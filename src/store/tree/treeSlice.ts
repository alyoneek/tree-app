import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface INode {
  id: number;
  name: string;
  children: INode[];
}

interface ITreeState {
  nodes: INode;
  choosenNode: number | null;
}

const initialState: ITreeState = {
  nodes: {
    id: 0,
    name: "",
    children: [],
  },
  choosenNode: null,
};

const findNode = (tree: INode, nodeId: number): INode | null => {
  if (nodeId === 0 || tree.id === nodeId) {
    return tree;
  }

  let node = null;

  for (let i = 0; i < tree.children.length; i++) {
    node = findNode(tree.children[i], nodeId);
    if (node) break;
  }

  return node;
};

const deleteNode = (tree: INode, nodeId: number): INode | null => {
  let node = null;

  for (let i = 0; i < tree.children.length; i++) {
    if (tree.children[i].id === nodeId) {
      node = tree.children.splice(i, 1)[0];
      break;
    }
    node = deleteNode(tree.children[i], nodeId);
    if (node) break;
  }

  return node;
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

      const node = findNode(state.nodes, action.payload.id);
      if (node) {
        node.children.push(newNode);
      }
    },
    editNode: (state, action: PayloadAction<Omit<INode, "children">>) => {
      const node = findNode(state.nodes, action.payload.id);
      if (node) {
        node.name = action.payload.name;
      }
    },
    deleteNode: (state, action: PayloadAction<number>) => {
      deleteNode(state.nodes, action.payload);
    },
    clearTree: () => initialState,
    chooseNode: (state, action: PayloadAction<number | null>) => {
      state.choosenNode = action.payload;
    },
  },
});

export const { reducer: treeReducer, actions: treeActions } = treeSlice;
