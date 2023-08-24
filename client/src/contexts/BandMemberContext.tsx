import { ReactNode, createContext, useContext } from "react";
import { bandMembers } from "../data";

type BandMemberContextType = {
  bandMembers: typeof bandMembers;
};

export const BandMemberContext = createContext<
  BandMemberContextType | undefined
>(undefined);

type BandMemberProviderProps = {
  children: ReactNode;
};

export function BandMemberProvider({ children }: BandMemberProviderProps) {
  return (
    <BandMemberContext.Provider value={{ bandMembers }}>
      {children}
    </BandMemberContext.Provider>
  );
}

export function useBandMemberContext() {
  const context = useContext(BandMemberContext);
  if (!context) {
    throw new Error(
      "useBandMemberContext must be used within a BandMemberProvider"
    );
  }
  return context;
}
