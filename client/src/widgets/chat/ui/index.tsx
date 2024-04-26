import { useEffect, useState } from 'react'
import useWebSocket from '../../../shared/hooks/useWebSocket'
import styles from './Chat.module.scss'



export const Chat = () => {
  const [message, setMessage] = useState<string>('')
  const socket = useWebSocket('http://localhost:5000')

const handleSend = ()=> {
    socket?.emit('message', {name: 'nest'}, (data: unknown)=> console.log(data))
    setMessage('')
}


useEffect(()=> {
  socket?.on('message', (data)=> console.log(data))
}, [socket])

  return (
    <div>
      <h1>Чат:</h1>
      <div><textarea rows={10} cols={100} value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea></div>
      <div><button onClick={handleSend} >отправить</button></div>
    </div>
  )
}
