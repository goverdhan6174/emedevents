import React from "react";
import cn from "classnames";
import s from "./Text.module.css";

//Variant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading'

const Text = ({
  style,
  className = "",
  variant = "body",
  children,
  html,
  onClick,
  as,
}) => {
  const componentsMap = {
    body: "div",
    button: "p",
    heading: "h1",
    pageHeading: "h2",
    sectionHeading: "h3",
    subText: "p",
    baseHead: "h4",
  };

  const Component = componentsMap[variant] || as;

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.body]: variant === "body",
          [s.button]: variant === "button",
          [s.heading]: variant === "heading",
          [s.pageHeading]: variant === "pageHeading",
          [s.sectionHeading]: variant === "sectionHeading",
          [s.subText]: variant === "subText",
          [s.baseHead]: variant === "baseHead",
        },
        className
      )}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
