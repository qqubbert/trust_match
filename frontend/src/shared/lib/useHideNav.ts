import { useContext, useEffect } from "react";

import { HideNavContext } from "@features/HideNavigationContext/";

export const useHideNav = () => {
  const { setShowNav } = useContext(HideNavContext);

  useEffect(() => {
    setShowNav(false);
    return () => setShowNav(true);
  }, [setShowNav]);
};
