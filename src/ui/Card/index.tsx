import { FC, ReactNode } from "react";
import styles from "./card.module.scss";

interface CardProps {
  className?: string;
  onExpand?: () => void;
  children?: ReactNode;
}

const Card: FC<CardProps> = ({ className, onExpand, children }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onExpand}>
      <div className={styles.content}>{children}</div>
      <div className={styles.actions}>
        <button>delete</button>
        <button>edit</button>
        <button>add</button>
      </div>
    </div>
  );
};

export default Card;
