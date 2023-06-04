import Node from "@components/Node";
import { INode } from "@store/tree/treeSlice";
import { FC } from "react";

interface TreeProps {
  renderData: INode[];
}

const Tree: FC<TreeProps> = ({ renderData }) => {
  return (
    <ul>
      {renderData.map((item) => (
        <Node key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default Tree;
