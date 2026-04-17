import { useEffect } from "react";
import { getNotifications } from "./getNotifications";

export const useNotificationListener = () => {
  useEffect(() => {
    getNotifications();

    const interval = setInterval(() => {
      getNotifications();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};
