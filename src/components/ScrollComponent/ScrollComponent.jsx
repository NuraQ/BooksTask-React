import { useRef, useCallback } from "react";

export const ScrollComponent = (setPageNumber, totalCount, hasMore, loading) => {

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if(loading){
      return 
    }
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
 
      if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPage) => prevPage + totalCount);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore, loading]);
  return { lastBookElementRef };
};
