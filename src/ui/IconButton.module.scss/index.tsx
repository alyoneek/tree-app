import { FC, FunctionComponent, SVGProps } from "react";

import styles from "./iconButton.module.scss";

interface IconButtonProps {
  className?: string;
  onClick: () => void;
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

const IconButton: FC<IconButtonProps> = ({ Icon, className = "", onClick }) => {
  return <Icon className={`${styles.icon} ${className}`} onClick={onClick} />;
};

export default IconButton;
