import { toast } from "react-toastify";

const toastConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastMessage = (success, message) => {
  if (success) toast.success(message, toastConfig);
  else toast.error(message, toastConfig);
};
