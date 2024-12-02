import React, { useEffect } from "react";

interface useTitleProps {
  title: string;
}

const useTitle = ({ title }: useTitleProps) => {
  useEffect(() => {
    debugger;
    if (window.document) {
      window.document.head.title = title;
      if (document.querySelector("title")) {
        document.querySelector("title").textContent = title;
      }
    }
  }, [title]);
};

export default useTitle;
