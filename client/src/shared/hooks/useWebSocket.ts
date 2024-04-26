import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useWebSocket = () => {
  const [socket, setSocket] = useState<any>();
  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
  return socket;
};

export default useWebSocket;
