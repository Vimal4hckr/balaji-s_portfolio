
import React, {
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.03,
  itemStackDistance = 32,
  stackPosition = '15%',
  scaleEndPosition = '8%',
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const initialTopsRef = useRef<number[]>([]);
  const lastTransformsRef = useRef<Map<number, string>>(new Map());
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const stackCompletedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (end <= start) return scrollTop >= end ? 1 : 0;
      if (scrollTop <= start) return 0;
      if (scrollTop >= end) return 1;

      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === 'number') return value;

      if (value.includes('%')) {
        return (parseFloat(value) / 100) * containerHeight;
      }

      return parseFloat(value) || 0;
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;

    return {
      scrollTop: scroller?.scrollTop ?? 0,
      containerHeight: scroller?.clientHeight ?? window.innerHeight,
    };
  }, [useWindowScroll]);

  // Measure only the cards belonging to this ScrollStack.
  const measureCards = useCallback(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;

    initialTopsRef.current = cards.map((card) => {
      const rect = card.getBoundingClientRect();

      return useWindowScroll
        ? rect.top + window.scrollY
        : rect.top -
            (root.getBoundingClientRect().top) +
            root.scrollTop;
    });

    cards.forEach((card, index) => {
      card.style.zIndex = String(index + 1);
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.perspective = '1000px';

      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      } else {
        card.style.marginBottom = '';
      }
    });

    lastTransformsRef.current.clear();
  }, [itemDistance, useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    try {
      const { scrollTop, containerHeight } = getScrollData();

      const stackPositionPx = parsePercentage(
        stackPosition,
        containerHeight
      );

      const scaleEndPositionPx = parsePercentage(
        scaleEndPosition,
        containerHeight
      );

      const root = scrollerRef.current;

      // Use this stack's own end marker, not another section's marker.
      const endElement = root?.querySelector(
        '.scroll-stack-end'
      ) as HTMLElement | null;

      const endElementTop = endElement
        ? useWindowScroll
          ? endElement.getBoundingClientRect().top + window.scrollY
          : endElement.getBoundingClientRect().top -
            (root?.getBoundingClientRect().top ?? 0) +
            scrollTop
        : 0;

      cardsRef.current.forEach((card, index) => {
        const cardTop = initialTopsRef.current[index] ?? 0;

        const pinStart =
          cardTop -
          stackPositionPx -
          itemStackDistance * index;

        const triggerEnd = cardTop - scaleEndPositionPx;

        const pinEnd = Math.max(
          pinStart,
          endElementTop - containerHeight / 2
        );

        const scaleProgress = calculateProgress(
          scrollTop,
          pinStart,
          triggerEnd
        );

        const targetScale = baseScale + index * itemScale;

        const scale =
          1 - scaleProgress * (1 - targetScale);

        const rotation = rotationAmount
          ? index * rotationAmount * scaleProgress
          : 0;

        let blur = 0;

        if (blurAmount > 0) {
          let topCardIndex = 0;

          cardsRef.current.forEach((_, cardIndex) => {
            const top =
              initialTopsRef.current[cardIndex] ?? 0;

            const trigger =
              top -
              stackPositionPx -
              itemStackDistance * cardIndex;

            if (scrollTop >= trigger) {
              topCardIndex = cardIndex;
            }
          });

          if (index < topCardIndex) {
            blur = (topCardIndex - index) * blurAmount;
          }
        }

        let translateY = 0;

        if (scrollTop >= pinStart && scrollTop <= pinEnd) {
          translateY =
            scrollTop -
            cardTop +
            stackPositionPx +
            itemStackDistance * index;
        } else if (scrollTop > pinEnd) {
          translateY =
            pinEnd -
            cardTop +
            stackPositionPx +
            itemStackDistance * index;
        }

        const transform = [
          `translate3d(0, ${translateY}px, 0)`,
          `scale(${scale})`,
          `rotate(${rotation}deg)`,
        ].join(' ');

        const filter = blur > 0 ? `blur(${blur}px)` : '';
        const transformKey = `${transform}|${filter}`;

        if (lastTransformsRef.current.get(index) !== transformKey) {
          card.style.transform = transform;
          card.style.filter = filter;
          lastTransformsRef.current.set(index, transformKey);
        }

        if (index === cardsRef.current.length - 1) {
          const isInView =
            scrollTop >= pinStart && scrollTop <= pinEnd;

          if (isInView && !stackCompletedRef.current) {
            stackCompletedRef.current = true;
            onStackComplete?.();
          } else if (!isInView) {
            stackCompletedRef.current = false;
          }
        }
      });
    } finally {
      isUpdatingRef.current = false;
    }
  }, [
    getScrollData,
    parsePercentage,
    stackPosition,
    scaleEndPosition,
    itemStackDistance,
    baseScale,
    itemScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    calculateProgress,
    onStackComplete,
  ]);

  useLayoutEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    let disposed = false;
    let resizeObserver: ResizeObserver | undefined;
    let refreshFrame: number | null = null;

    const refreshLayout = () => {
      if (disposed) return;

      measureCards();
      updateCardTransforms();
    };

    const scheduleRefresh = () => {
      if (refreshFrame !== null) {
        cancelAnimationFrame(refreshFrame);
      }

      refreshFrame = requestAnimationFrame(() => {
        refreshFrame = null;
        refreshLayout();
      });
    };

    refreshLayout();

    // Re-measure when images finish loading.
    const images = Array.from(root.querySelectorAll('img'));

    images.forEach((image) => {
      if (!image.complete) {
        image.addEventListener('load', scheduleRefresh);
        image.addEventListener('error', scheduleRefresh);
      }
    });

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(scheduleRefresh);
      resizeObserver.observe(root);

      const inner = root.querySelector('.scroll-stack-inner');
      if (inner) resizeObserver.observe(inner);
    }

    const handleScroll = () => updateCardTransforms();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    window.addEventListener('resize', scheduleRefresh);

    let lenis: Lenis | null = null;

    // Preserve the original smooth scrolling for window-based stacks.
    if (useWindowScroll) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;
      lenis.on('scroll', handleScroll);

      const raf = (time: number) => {
        if (disposed || !lenis) return;

        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };

      animationFrameRef.current = requestAnimationFrame(raf);
    }

    return () => {
      disposed = true;

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', scheduleRefresh);

      images.forEach((image) => {
        image.removeEventListener('load', scheduleRefresh);
        image.removeEventListener('error', scheduleRefresh);
      });

      resizeObserver?.disconnect();

      if (refreshFrame !== null) {
        cancelAnimationFrame(refreshFrame);
      }

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      lenis?.destroy();
      lenisRef.current = null;

      cardsRef.current.forEach((card) => {
        card.style.transform = '';
        card.style.filter = '';
        card.style.willChange = '';
      });

      cardsRef.current = [];
      initialTopsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      isUpdatingRef.current = false;
    };
  }, [
    measureCards,
    updateCardTransforms,
    useWindowScroll,
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
