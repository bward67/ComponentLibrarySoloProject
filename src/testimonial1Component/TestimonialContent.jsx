import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimonialContent = ({ children }) => {
  return (
    <div className="test-container">
      <ImQuotesLeft className="quote-icon" />

      {children}
    </div>
  );
};

export default TestimonialContent;
