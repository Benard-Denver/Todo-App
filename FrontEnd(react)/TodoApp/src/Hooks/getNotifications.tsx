import { toast } from "sonner";
import { getToken } from "./useLoginUser";

export const getNotifications = async () => {
  console.log("Fetching notifications...");
  const url = "https://localhost:44300/notifications";
  const token = getToken();
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Status:", res.status);
  if (!res.ok) return;
  
  const data = await res.json();

  data.forEach((n: any) => {
    toast(n.message);
  });
};
