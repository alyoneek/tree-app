import { FC, FormEvent, useState } from "react";

import { useAppDispatch } from "@/store";
import { ReactComponent as CancelLogo } from "@assets/icons/cancel.svg";
import { ReactComponent as CheckLogo } from "@assets/icons/check.svg";
import { INode, treeActions } from "@store/tree/treeSlice";
import IconButton from "@ui/IconButton";
import Input from "@ui/Input";

import styles from "./editNodeForm.module.scss";

interface EditNodeFormProps {
  nodeData: INode;
  handleSave?: () => void;
  handleCancel?: () => void;
}

const EditNodeForm: FC<EditNodeFormProps> = ({ nodeData, handleSave, handleCancel }) => {
  const [inputValue, setInputValue] = useState(nodeData.name);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(treeActions.editNode({ id: nodeData.id, name: inputValue }));
    handleSave && handleSave();
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <div>
        <IconButton type="submit" Icon={CheckLogo} />
        <IconButton Icon={CancelLogo} onClick={handleCancel} />
      </div>
    </form>
  );
};

export default EditNodeForm;
