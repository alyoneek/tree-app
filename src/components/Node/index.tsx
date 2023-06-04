import { FC, useState } from "react";

import EditNodeForm from "@components/EditNodeForm";
import { INode } from "@store/tree/treeSlice";
import Card from "@ui/Card";

interface NodeProps {
  data: INode;
}

const Node: FC<NodeProps> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(false);

  const toggleChildren = () => {
    setOpen(!open);
  };

  const cancelEditMode = () => {
    setEdit(false);
  };

  return (
    <li>
      <Card
        onExpand={data.children.length ? toggleChildren : undefined}
        open={open}
        handleEdit={() => setEdit(true)}>
        {!edit ? (
          data.name
        ) : (
          <EditNodeForm nodeData={data} handleSave={cancelEditMode} handleCancel={cancelEditMode} />
        )}
      </Card>

      <ul className={open ? "visible" : "hidden"}>
        {data.children.map((child) => (
          <Node key={child.id} data={child} />
        ))}
      </ul>
    </li>
  );
};

export default Node;
