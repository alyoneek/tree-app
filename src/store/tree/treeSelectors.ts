import { RootState } from "@store/index";

export const getNodes = (state: RootState) => state.tree.nodes.children;
export const getNode = (state: RootState) => state.tree.choosenNode;
