import { FC, HTMLInputTypeAttribute } from "react";

import styles from "./input.module.scss";

interface InputProps {
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

const Input: FC<InputProps> = ({ type = "text", placeholder = "", className = "" }) => {
  return <input className={`${className} ${styles.input}`} type={type} placeholder={placeholder} />;
};

export default Input;
