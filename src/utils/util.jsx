import { toast } from "react-toastify";
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    toast.info("🧑‍🍳Cooking...🍳");
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
