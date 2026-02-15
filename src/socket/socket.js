import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  const token = localStorage.getItem("accessToken");

  if (!socket) {
    socket = io("http://localhost:5002", {
      autoConnect: false,
      transports: ["websocket"],
    });
  }

  socket.auth = { token };
  socket.connect();

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};
