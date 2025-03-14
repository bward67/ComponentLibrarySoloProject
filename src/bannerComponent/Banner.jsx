import React from "react";
import "./banner.css";

const Banner = ({ children, status }) => {
  //console.log(children);
  //   console.log(status);

  let statusClass = status && `banner-${status}`;

  function changeStatus() {
    if (status === "success") {
      return <div className={statusClass}></div>;
    } else if (status === "warning") {
      return <div className={statusClass}></div>;
    } else if (status === "error") {
      return <div className={statusClass}></div>;
    } else if (status === "neutral") {
      return <div className={statusClass}></div>;
    }
  }

  return (
    <section className={`banner ${statusClass}`}>
      {changeStatus()}

      <div>{children}</div>
    </section>
  );
};

export default Banner;
