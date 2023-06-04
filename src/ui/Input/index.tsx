import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

import styles from "./input.module.scss";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "",
  className = "",
  value = "",
  onChange,
}) => {
  return (
    <input
      className={`${className} ${styles.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
