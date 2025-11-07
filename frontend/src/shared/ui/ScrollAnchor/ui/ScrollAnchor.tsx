import { useEffect, useRef } from "react";

import "./ScrollAnchor.css";

type ScrollAnchorProps = {
  behavior?: ScrollBehavior;
  trigger?: () => void;
};

export const ScrollAnchor = ({
  behavior = "smooth",
  trigger,
}: ScrollAnchorProps) => {
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    anchorRef.current?.scrollIntoView({ behavior });
  }, [trigger, behavior]);

  return <div ref={anchorRef} className="scroll-anchor" />;
};
