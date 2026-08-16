"use client";

import {
  createContext,
  useContext,
} from "react";

type NavigationContextType = {
  navigate: (tab: string) => void;
};

const NavigationContext =
  createContext<NavigationContextType>({
    navigate: () => {},
  });

type Props = {
  navigate: (tab: string) => void;
  children: React.ReactNode;
};

export function NavigationProvider({
  navigate,
  children,
}: Props) {
  return (
    <NavigationContext.Provider
      value={{ navigate }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}