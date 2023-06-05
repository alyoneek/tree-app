import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface INode {
  id: number;
  name: string;
  children: INode[];
}

interface ITreeState {
  nodes: INode[];
  choosenNode: number | null;
}

const initialState: ITreeState = {
  nodes: [],
  choosenNode: null,
};

const a = (addToNode: INode, nodeId: number, newNode: INode): INode => {
  if (addToNode.id === nodeId) {
    addToNode.children.push(newNode);
    return addToNode;
  }

  const newChildren = addToNode.children.map((node) => a(node, nodeId, newNode));
  return { ...addToNode, children: newChildren };
};

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Omit<INode, "children">>) => {
      const newNode: INode = {
        id: new Date().getTime(),
        name: action.payload.name,
        children: [],
      };

      if (action.payload.id === 0) {
        state.nodes.push(newNode);
      } else {
        state.nodes = state.nodes.map((node) => a(node, action.payload.id, newNode));
      }
    },
    editNode: (state, action: PayloadAction<Omit<INode, "children">>) => {
      const node = state.nodes.find((node) => node.id === action.payload.id);
      if (node) {
        node.name = action.payload.name;
      }
    },
    deleteNode: (state, action: PayloadAction<number>) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
    },
    clearTree: (state) => {
      state.nodes = [];
    },
    chooseNode: (state, action: PayloadAction<number | null>) => {
      state.choosenNode = action.payload;
    },
  },
});

export const { reducer: treeReducer, actions: treeActions } = treeSlice;
