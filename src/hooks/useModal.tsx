import { useState } from "react";

const useModal = () => {
  const [modalShown, setModalShown] = useState(false);

  const hideModal = () => {
    setModalShown(false);
  };

  const showModal = () => {
    setModalShown(true);
  };

  return {
    modalShown,
    hideModal,
    showModal,
  };
};

export default useModal;
