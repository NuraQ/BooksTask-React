import { useRef, useCallback } from "react";
import ACTIONS from "../Actions/Actions";

export const ScrollComponent = (
  totalCount,
  hasMore,
  dispatch,
  currentPage,
  loading
) => {
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("yalla");
          dispatch({ type: ACTIONS.SCROLL, payload: totalCount + currentPage });
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading]
  );
  return { lastBookElementRef };
};
