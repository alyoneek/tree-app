import { FormEvent, useState } from "react";

import { ReactComponent as BinLogo } from "@assets/icons/bin.svg";
import { ReactComponent as PlusLogo } from "@assets/icons/plus.svg";
import IconButton from "@ui/IconButton";
import Input from "@ui/Input";

import { useAppDispatch } from "@/store";
import { treeActions } from "@/store/tree/treeSlice";
import styles from "./addNodeForm.module.scss";

const AddNodeForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(treeActions.addNode(inputValue));
    resetForm();
  };

  const resetForm = () => {
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <Input
        placeholder="Add a node"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <IconButton type="submit" Icon={PlusLogo} className={styles.button} />
        <IconButton Icon={BinLogo} className={styles.button} />
      </div>
    </form>
  );
};

export default AddNodeForm;
