import { createContext } from "react";

type HideNavigationContextType = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HideNavigationContext = createContext<HideNavigationContextType>({
  showNav: true,
  setShowNav: () => {},
});
