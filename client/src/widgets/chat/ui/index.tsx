import useWebSocket from '../../../shared/hooks/useWebSocket'
import styles from './Chat.module.scss'



export const Chat = () => {
  const socket = useWebSocket()
  return (
    <div>Chat</div>
  )
}
