import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";


const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket>();
  
  useEffect(() => {
    const newSocket = io(url);
    newSocket.on('connect', ()=> console.log( 'websocket id ' + newSocket.id))
    newSocket.on('disconnect', ()=> console.log('websocket disconect'))
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
  
  return socket;
};

export default useWebSocket;
