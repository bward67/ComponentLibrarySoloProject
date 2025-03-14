import React from "react";
import { IoIosCheckmarkCircle, IoIosInformationCircle } from "react-icons/io";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import clsx from "clsx";

const BannerTitle = ({ children, status }) => {
  //console.log(status);
  //console.log(children);
  let statusClass = status && `banner-${status}`;

  const allClasses = clsx("banner-icon", statusClass);

  function changeStatus() {
    if (status === "success") {
      return <IoIosCheckmarkCircle className={allClasses} />;
    } else if (status === "warning") {
      return <FaExclamationTriangle className={allClasses} />;
    } else if (status === "error") {
      return <FaCircleXmark className={allClasses} />;
    } else if (status === "neutral") {
      return <IoIosInformationCircle className={allClasses} />;
    }
  }

  const styles = { fontWeight: status === "error" ? 700 : 500 };

  return (
    <section className={`banner-top ${statusClass}`}>
      {changeStatus()}
      <h1 style={styles}>{children}</h1>
    </section>
  );
};

export default BannerTitle;
