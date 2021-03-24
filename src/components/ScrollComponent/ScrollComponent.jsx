import { useRef, useCallback, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useLoaderStyle } from "./ScrollComponent.style";

export const ScrollComponent = (props) => {
  const { children, handleLoadMore, hasMore } = props;
  const loader = useRef();
  const handleLoading = useRef(handleLoadMore);
  const { loaderStyle } = useLoaderStyle();
  const handleObserver = useCallback(
    (entities) => {
      const target = entities[0];
      if (target.isIntersecting && hasMore) {
        handleLoading.current();
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader && loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, hasMore]);
  useEffect(() => {
    handleLoading.current = handleLoadMore;
  }, [handleLoadMore]);
  return (
    <div>
      {children}
      {hasMore && (
        <>
          <div className={loaderStyle}>
            <CircularProgress />
          </div>
          <div ref={loader} />
        </>
      )}
    </div>
  );
};
