import { FormEvent, useState } from "react";

import useModal from "@/hooks/useModal";
import { useAppDispatch } from "@/store";
import { treeActions } from "@/store/tree/treeSlice";
import { ReactComponent as BinLogo } from "@assets/icons/bin.svg";
import { ReactComponent as PlusLogo } from "@assets/icons/plus.svg";
import IconButton from "@ui/IconButton";
import Input from "@ui/Input";
import Modal from "@ui/Modal";

import styles from "./addNodeMainForm.module.scss";

const AddNodeMainForm = () => {
  const { modalShown, showModal, hideModal } = useModal();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      dispatch(treeActions.addNode(inputValue));
      resetForm();
    }
  };

  const resetForm = () => {
    setInputValue("");
  };

  const handleReset = () => {
    dispatch(treeActions.clearTree());
    hideModal();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="Add a node"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>
          <IconButton type="submit" Icon={PlusLogo} className={styles.button} />
          <IconButton Icon={BinLogo} className={styles.button} onClick={showModal} />
        </div>
      </form>

      <Modal
        title="Are you sure?"
        content="You're trying to clear all tree"
        okText="Yes"
        cancelText="No"
        open={modalShown}
        onOk={handleReset}
        onCancel={hideModal}
      />
    </>
  );
};

export default AddNodeMainForm;
