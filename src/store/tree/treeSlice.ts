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

export const treeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<string>) => {
      const newNode: INode = {
        id: new Date().getTime(),
        name: action.payload,
        children: [],
      };
      state.nodes.push(newNode);
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
