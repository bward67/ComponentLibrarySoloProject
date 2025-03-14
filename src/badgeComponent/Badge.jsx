import React from "react";
import "./badge.css";
import clsx from "clsx";

const Badge = ({ shape, color, children }) => {
  let shapeClass = shape && `badge-${shape}`;
  let colorClass = color && `badge-${color}`;
  const allClasses = clsx("badge", shapeClass, colorClass);
  //console.log(allClasses);

  return <div className={allClasses}>{children}</div>;
};

export default Badge;
