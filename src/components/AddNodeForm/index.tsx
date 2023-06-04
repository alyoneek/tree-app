import { ReactComponent as BinLogo } from "@assets/icons/bin.svg";
import { ReactComponent as PlusLogo } from "@assets/icons/plus.svg";
import IconButton from "@ui/IconButton";
import Input from "@ui/Input";

import styles from "./addNodeForm.module.scss";

const AddNodeForm = () => {
  return (
    <form className={styles.form}>
      <Input placeholder="Add a node" />
      <div>
        <IconButton Icon={PlusLogo} className={styles.button} />
        <IconButton Icon={BinLogo} className={styles.button} />
      </div>
    </form>
  );
};

export default AddNodeForm;
