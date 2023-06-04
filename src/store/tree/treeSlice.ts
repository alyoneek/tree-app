import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface INode {
  id: number;
  name: string;
  children: INode[];
}

interface ITreeState {
  nodes: INode[];
}

const initialState: ITreeState = {
  nodes: [],
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
    // deleteNode: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // clearTree: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { reducer: treeReducer, actions: treeActions } = treeSlice;
