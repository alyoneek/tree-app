import { FC, FormEvent, useState } from "react";

import { useAppDispatch } from "@/store";
import { ReactComponent as CancelLogo } from "@assets/icons/cancel.svg";
import { ReactComponent as CheckLogo } from "@assets/icons/check.svg";
import { treeActions } from "@store/tree/treeSlice";
import IconButton from "@ui/IconButton";
import Input from "@ui/Input";

import styles from "./addNodeForm.module.scss";

interface AddNodeFormProps {
  nodeId: number;
}

const AddNodeForm: FC<AddNodeFormProps> = ({ nodeId }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      dispatch(treeActions.addNode({ id: nodeId, name: inputValue }));
      handleCancel();
    }
  };

  const handleCancel = () => {
    dispatch(treeActions.chooseNode(null));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

export default AddNodeForm;
