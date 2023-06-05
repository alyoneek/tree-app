import { FC } from "react";

import Node from "@components/Node";
import { INode } from "@store/tree/treeSlice";

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
