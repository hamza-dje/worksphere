import { io } from "socket.io-client";

export const socket = io("http://localhost/freelancer-client", {
  transports: ["websocket"],
  withCredentials: true,
});
