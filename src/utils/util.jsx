import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    toast.info("Take a break☕");
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
