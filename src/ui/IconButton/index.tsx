import { FC, FunctionComponent, SVGProps } from "react";

import styles from "./iconButton.module.scss";

interface IconButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

const IconButton: FC<IconButtonProps> = ({ Icon, className = "", onClick, type = "button" }) => {
  return (
    <button type={type}>
      <Icon className={`${styles.icon} ${className}`} onClick={onClick} />
    </button>
  );
};

export default IconButton;
