import { useState } from "react";
import { useRef, useCallback } from "react";

export const ScrollComponent = (setPageNumber, totalCount, page) => {

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if(totalCount > 0 && totalCount != page){
          setPageNumber((prevPage) => prevPage + totalCount);
        }
      }
    });
    if (node) observer.current.observe(node);
  }, [totalCount]);
  return { lastBookElementRef };
};
