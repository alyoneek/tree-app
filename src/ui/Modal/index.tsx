import { FC, useEffect } from "react";

import { ReactComponent as CancelLogo } from "@assets/icons/cancel.svg";
import Button from "@ui/Button";
import IconButton from "@ui/IconButton";

import styles from "./modal.module.scss";

interface ModalProps {
  title: string;
  content: string;
  okText?: string;
  cancelText?: string;
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const Modal: FC<ModalProps> = ({
  okText = "OK",
  cancelText = "Cancel",
  open,
  onCancel,
  onOk,
  title,
  content,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <IconButton Icon={CancelLogo} onClick={onCancel} />
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>
          <Button color="none" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button onClick={onOk}>{okText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
