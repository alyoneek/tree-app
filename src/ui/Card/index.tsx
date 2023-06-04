import { FC, ReactNode } from "react";

import { ReactComponent as ArrowLogo } from "@assets/icons/arrow.svg";
import IconButton from "@ui/IconButton.module.scss";
import styles from "./card.module.scss";

interface CardProps {
  className?: string;
  onExpand?: () => void;
  children?: ReactNode;
  open?: boolean;
}

const Card: FC<CardProps> = ({ className = "", onExpand, children, open = true }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>
        <button>delete</button>
        <button>edit</button>
        <button>add</button>
      </div>
      {onExpand && (
        <IconButton className={open ? styles.iconOpen : ""} onClick={onExpand} Icon={ArrowLogo} />
      )}
    </div>
  );
};

export default Card;
