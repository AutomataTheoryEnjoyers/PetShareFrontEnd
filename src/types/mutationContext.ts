import { Dispatch, SetStateAction } from "react";
import { MutationData } from "./mutationData";

export type MutationContextType = {
  mutationData: MutationData | null;
  setMutationData: Dispatch<SetStateAction<MutationData | null>>;
};
