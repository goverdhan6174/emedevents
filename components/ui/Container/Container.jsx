import cn from "classnames";
import React from "react";

const Container = ({ children, className, el = "div", clean, style = {} }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-6xl px-6": !clean,
  });

  let Component = el;

  return (
    <Component className={rootClassName} style={style}>
      {children}
    </Component>
  );
};

export default Container;
