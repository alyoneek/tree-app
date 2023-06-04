import { FC, ReactNode } from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  color?: "purple" | "none";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  onClick,
  color = "purple",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${className} ${styles[color]}`}>
      {children}
    </button>
  );
};

export default Button;
