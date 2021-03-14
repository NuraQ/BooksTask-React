import React, { useState, useEffect } from "react";
import FetchData from '../'
const ScrollComponent = () => {
  const [scrollState, setScrollData] = useState({
    loading: false,
    books: [],
    page: 0,
    prevY: 0,
  });

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

  let observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    observer.observe(this.loadingRef);
  }, []);

  const getMoreData = () => {
    setScrollData({ scrollState, loading: true });
  };
};



function handleObserver(entities, observer) {
  const y = entities[0].boundingClientRect.y;
  if (scrollState.prevY > y) {
    const curPage = scrollState.page + 40;
    FetchData(curPage);
    this.setState({ page: curPage });
  }
  this.setState({ prevY: y });
}
