import { useState } from "react";
import { useRef, useCallback } from "react";

export const ScrollComponent = () => {
  const [page, setPageNumber] = useState(0);

  const observer = useRef();
  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prevPage) => prevPage + 40);
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastBookElementRef, page };
};
