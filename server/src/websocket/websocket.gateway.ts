import { ConnectedSocket, MessageBody, WebSocketGateway, WsResponse } from '@nestjs/websockets';
import { WebsocketService } from './websocket.service';
import { Socket } from 'dgram';

@WebSocketGateway()
export class WebsocketGateway {
  constructor(private readonly websocketService: WebsocketService) {}
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: unknown) {
    return data
  }
}
