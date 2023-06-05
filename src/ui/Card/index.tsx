import { FC, ReactNode } from "react";

import { ReactComponent as ArrowLogo } from "@assets/icons/arrow.svg";
import { ReactComponent as BinLogo } from "@assets/icons/bin.svg";
import { ReactComponent as PencilLogo } from "@assets/icons/pencil.svg";
import { ReactComponent as PlusLogo } from "@assets/icons/plus.svg";
import IconButton from "@ui/IconButton";
import Modal from "@ui/Modal";

import useModal from "@/hooks/useModal";
import styles from "./card.module.scss";

type CummonCardProps = {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onExpand?: () => void;
};

type EditableCardProps = CummonCardProps & {
  editable: boolean;
  handleAdd: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
  default?: never;
};

type DefaultCardProps = CummonCardProps & {
  default: boolean;
  editable?: never;
  handleAdd?: never;
  handleEdit?: never;
  handleDelete?: never;
};

type CardProps = EditableCardProps | DefaultCardProps;

const Card: FC<CardProps> = ({
  className = "",
  children,
  open = true,
  editable = false,
  onExpand,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const { modalShown, showModal, hideModal } = useModal();

  const onDelete = () => {
    handleDelete && handleDelete();
    hideModal();
  };

  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <div className={styles.content}>{children}</div>
        {editable && (
          <div className={styles.actions}>
            <IconButton Icon={PlusLogo} onClick={handleAdd} />
            <IconButton Icon={PencilLogo} onClick={handleEdit} />
            <IconButton Icon={BinLogo} onClick={showModal} />
          </div>
        )}

        {onExpand && (
          <IconButton className={open ? styles.iconOpen : ""} onClick={onExpand} Icon={ArrowLogo} />
        )}
      </div>

      <Modal
        title="Are you sure?"
        content="You're trying to delete this node"
        okText="Yes"
        cancelText="No"
        open={modalShown}
        onOk={onDelete}
        onCancel={hideModal}
      />
    </>
  );
};

export default Card;
