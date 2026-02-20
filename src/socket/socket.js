import { io } from "socket.io-client";

let socket = null;

export const connectSocket = () => {
  const token = localStorage.getItem("accessToken");

  // 🔥 disconnect old socket
  if (socket) {
    socket.disconnect();
    socket = null;
  }

  if (!socket) {
    socket = io("https://chat-service-sstt.onrender.com/", {
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
  console.log("disconnect ho gya huraaah.. !!!!!!")
  if (socket) {
    socket.disconnect();
  }
};
