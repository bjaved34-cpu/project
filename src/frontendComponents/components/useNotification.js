import { useState } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showNotification = (message, type = "success", duration = 2500) => {
    setNotification({ show: true, message, type });

    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, duration);
  };

  return { notification, showNotification };
};

export default useNotification;
