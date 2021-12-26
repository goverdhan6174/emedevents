import React, {
  useState,
  Children,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import cn from "classnames";
import { Right, Left } from "@components/icons";
import Text from "../Text";

function Slider({
  heading,
  children,
  headerClassName,
  wrapperClassName,
  className,
  footerClassName,
  shadow = true,
  hr = false,
  size = 0.9,
  sliderClassName,
}) {
  let [active, setActive] = useState(0);
  let [width, setWidth] = useState(0);
  let [windowSize, setWindowSize] = useState(0);
  let [translate, setTranslate] = useState(0);
  let nChildren = Children.count(children);

  const parentRef = useRef(null);

  useEffect(() => {
    let handleResize = () => setWindowSize(window.innerWidth || 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (parentRef.current) {
      const width = parentRef.current.clientWidth;
      setWidth(width);
    }
  }, [windowSize]);

  const handleNext = () => {
    let nextSlide = (active + 1) % nChildren;
    setActive(nextSlide);
    setTranslate(nextSlide * width * size);
  };

  const handlePrev = () => {
    let prevSlide = (active - 1) % nChildren;
    if (prevSlide < 0) prevSlide = nChildren - 1;
    setActive(prevSlide);
    setTranslate(prevSlide * width * size);
  };

  const handleSlide = (slide) => {
    setActive(slide);
    setTranslate(slide * width * size);
  };

  return (
    <div className={cn("flex flex-col", sliderClassName)}>
      {heading && (
        <div
          className={cn(
            "flex justify-between items-center px-4",
            headerClassName
          )}
        >
          <Text letiant="sectionHeading" className="text-accent-7 my-2">
            {heading.toUpperCase()}
          </Text>
          {nChildren > 1 && (
            <div className="flex items-center space-x-4">
              <Left className="cursor-pointer" onClick={handlePrev} />
              <Right className="cursor-pointer ml-4" onClick={handleNext} />
            </div>
          )}
        </div>
      )}
      <div
        ref={parentRef}
        className={cn("w-full overflow-hidden", wrapperClassName)}
      >
        <ul
          className="flex no-wrap space-x-8 px-4 transform transform transition-transform"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {Children.map(Children.toArray(children), (child) => {
            return (
              <li
                className={cn("mb-4 rounded-lg overflow-hidden", className, {
                  "shadow-md": shadow,
                })}
                style={{
                  minWidth: `calc(${width * size}px - 2rem)`,
                  maxWidth: `calc(${width * size}px - 2rem)`,
                }}
              >
                {child}
              </li>
            );
          })}
        </ul>
      </div>

      {nChildren > 1 && (
        <div
          className={cn(
            "grid grid-cols-4 space-x-4 mt-8 mb-4",
            footerClassName
          )}
        >
          <hr className={cn({ "opacity-100": hr, "opacity-0": !hr })} />
          <div className="flex space-x-1 col-span-2 justify-center items-center">
            {Array.from(Array(nChildren)).map((info, index) => {
              return (
                <span
                  key={index}
                  className={cn(
                    "border border-primary-2 rounded-full cursor-pointer hover:bg-primary-2",
                    {
                      "py-0.5 px-1 bg-primary-2": active == index,
                      "px-2 py-0.5": active != index,
                    }
                  )}
                  onClick={() => handleSlide(index)}
                ></span>
              );
            })}
          </div>
          <hr className={cn({ "opacity-100": hr, "opacity-0": !hr })} />
        </div>
      )}
    </div>
  );
}

export default Slider;
