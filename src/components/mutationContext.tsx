import React from "react";
import { MutationContextType } from "../types/mutationContext";

// A mutex, basically
export const MutationContext = React.createContext<MutationContextType>({
  mutationData: null,
  setMutationData: () => {},
});
