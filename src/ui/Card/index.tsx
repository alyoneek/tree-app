import { FC, ReactNode } from "react";

import { ReactComponent as ArrowLogo } from "@assets/icons/arrow.svg";
import { ReactComponent as BinLogo } from "@assets/icons/bin.svg";
import { ReactComponent as PencilLogo } from "@assets/icons/pencil.svg";
import { ReactComponent as PlusLogo } from "@assets/icons/plus.svg";
import IconButton from "@ui/IconButton";

import styles from "./card.module.scss";

interface CardProps {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  handleEdit?: () => void;
  onExpand?: () => void;
}

const Card: FC<CardProps> = ({ className = "", onExpand, children, open = true, handleEdit }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>
        <IconButton Icon={PlusLogo} />
        <IconButton Icon={PencilLogo} onClick={handleEdit} />
        <IconButton Icon={BinLogo} />
      </div>
      {onExpand && (
        <IconButton className={open ? styles.iconOpen : ""} onClick={onExpand} Icon={ArrowLogo} />
      )}
    </div>
  );
};

export default Card;
