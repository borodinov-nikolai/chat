import { useEffect, useState } from 'react'
import useWebSocket from '../../../shared/hooks/useWebSocket'
import styles from './Chat.module.scss'



export const Chat = () => {
  const [user, setUser] = useState<string>('user1')
  const [typing, setTyping] = useState<boolean>(false)
  const [incomingTyping, setIncomingTyping] = useState<{user: string, typing:boolean}>()
  const [message, setMessage] = useState<string>('')
  const [history, setHistory] = useState<string[]>([])
  const socket = useWebSocket('http://localhost:5000')

const handleSend = ()=> {
    socket?.emit('message', {name: user, message})
    setTyping(false)
    setMessage('')
}

console.log(typing)
useEffect(()=> {
  socket?.emit('typing',{user, typing})
}, [typing])


useEffect(()=> {
  socket?.on('message', (data)=> setHistory((prev)=> [...prev, data]))
  socket?.on('typing', (data)=> setIncomingTyping(data))
}, [socket])

console.log(incomingTyping)


useEffect(()=> {

  if(typing) {
    setTimeout(()=>setTyping(false), 1000)
  }

}, [typing])


  return (
    <div>
      <select onChange={(e)=>{setUser(e.target.value)}} name="user" id="">
        <option value="user1">user1</option>
        <option value="user2">user2</option>
      </select>
      <h1>Чат:</h1>
      {history.map((message, i)=> <div key={i} >{message}</div> )}
      {(incomingTyping?.typing && incomingTyping.user !== user) && <div>печатает</div> }
      <div><textarea rows={10} cols={100} value={message} onChange={(e)=>{setTyping(true);  setMessage(e.target.value)}} ></textarea></div>
      <div><button onClick={handleSend} >отправить</button></div>
    </div>
  )
}
