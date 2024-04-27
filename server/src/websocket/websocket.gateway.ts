import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';




@WebSocketGateway({cors: true})
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')
  HandleEvent(@ConnectedSocket() client: Socket , @MessageBody() data: any) {
  
      console.log(data)
    this.server.emit('message', `${data.name}: ${data.message}`)
  }
  @SubscribeMessage('typing')
  HandleTyping(@ConnectedSocket() client: Socket , @MessageBody() data: boolean) {
  
      console.log(data)
      this.server.emit('typing', data)
  }
}
