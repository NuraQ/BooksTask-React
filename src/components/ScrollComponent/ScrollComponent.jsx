import { useRef, useCallback } from "react";

export const ScrollComponent = (setPageNumber, totalCount, hasMore) => {

  const observer = useRef();
  console.log(hasMore,"hasMore inside")
  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
 
      if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + totalCount);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore,setPageNumber,totalCount]);
  return { lastBookElementRef };
};
