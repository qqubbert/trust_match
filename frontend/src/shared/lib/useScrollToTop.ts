import { useEffect } from "react";

export const useScrollToTop = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [ref]);
}
