import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, show }) => {
  return (
    <div className={`carousel-item carousel-item__show-${show}`}>
      {children}
    </div>
  );
};

const Carousel = ({ children, show }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 2000);
  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    },
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => {
        setPaused(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
      }}
    >
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { show: show });
        })}
      </div>
      <div className="indicators">
        <span
          className="arrow left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        ></span>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${
                index === activeIndex
                  ? `indicators__number indicators__number__show-${show} active`
                  : `indicators__number indicators__number__show-${show}`
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
        <span
          className="arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Carousel;
