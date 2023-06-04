import { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store";
import { getNode } from "@/store/tree/treeSelectors";
import AddNodeForm from "@components/AddNodeForm";
import EditNodeForm from "@components/EditNodeForm";
import { INode, treeActions } from "@store/tree/treeSlice";
import Card from "@ui/Card";

interface NodeProps {
  data: INode;
}

const Node: FC<NodeProps> = ({ data }) => {
  const [open, setOpen] = useState(true);
  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch();
  const addToNode = useAppSelector(getNode);

  const toggleChildren = () => {
    setOpen(!open);
  };

  const cancelEditMode = () => {
    setEdit(false);
  };

  const handleAdd = () => {
    dispatch(treeActions.chooseNode(data.id));
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    dispatch(treeActions.deleteNode(data.id));
  };

  return (
    <li>
      <Card
        onExpand={data.children.length ? toggleChildren : undefined}
        open={open}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        handleDelete={handleDelete}>
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
        {addToNode === data.id && (
          <li>
            <Card>
              <AddNodeForm />
            </Card>
          </li>
        )}
      </ul>
    </li>
  );
};

export default Node;
