import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTIONS from "../Actions/Actions";

export const ScrollComponent = ( totalCount, hasMore) => {
  const getPage = (state) => state.searchState.page;
  const currentPage = useSelector(getPage);
  const dispatch = useDispatch();
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch({ type: ACTIONS.SCROLL, payload: totalCount + currentPage});
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, totalCount, currentPage, dispatch]
  );
  return { lastBookElementRef };
};
