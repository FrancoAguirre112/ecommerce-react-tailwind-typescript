/*
 useInfiniteScroll Hook : Custom hook for implementing infinite scrolling behavior using an IntersectionObserver.
 
 @param callback - The callback function to be called when scrolling near the target element.
                   It receives the current page number as a parameter.

 @param targetRef - The ref object for the target element that triggers the infinite scroll.

 @param limit - Optional. The limit to control the number of times the callback is triggered.
                If set to 0 or not provided, there is no limit (unlimited).
                  
  @param search - Optional. String which controls what items the infinite scroll will load.
 */
import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  callback: (pageNumber: number, search: string) => void,
  search = "",
  targetRef: React.RefObject<HTMLDivElement>,
  limit = 0
): void => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageNumberRef = useRef<number>(1);

  useEffect(() => {
    // Options for the IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    /*
       Handles the intersection event and triggers the callback if conditions are met.
            @param entries - The intersection observer entries.
      */

    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting) return;
      if (limit > 0 && pageNumberRef.current > limit) return;

      callback(pageNumberRef.current, search);
      pageNumberRef.current += 1;
    };

    if (targetRef.current) {
      // Create an IntersectionObserver instance
      observerRef.current = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );

      // Start observing the target element
      observerRef.current.observe(targetRef.current);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [callback, targetRef, limit, search]);
};

export default useInfiniteScroll;
