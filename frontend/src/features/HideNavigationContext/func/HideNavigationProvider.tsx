import { useState } from "react";

import { HideNavigationContext } from "./HideNavigationContext";

export const HideNavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <HideNavigationContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </HideNavigationContext.Provider>
  );
};
