import { RootState } from "@store/index";

export const getNodes = (state: RootState) => state.tree.nodes;
