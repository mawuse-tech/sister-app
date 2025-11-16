// src/config/socket.js
import { io } from "socket.io-client";

let socket;

export const initSocket = () => {
  if (!socket) {
    socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:8000", {
      withCredentials: true,
    });
  }
  return socket;
};

export const getSocket = () => socket;
