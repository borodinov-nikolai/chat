import { ConnectedSocket, MessageBody, OnGatewayConnection, SubscribeMessage, WebSocketGateway} from '@nestjs/websockets';
import { WebsocketService } from './websocket.service';
import { emit } from 'process';
import { Socket } from 'dgram';


@WebSocketGateway({cors: true})
export class WebsocketGateway {
  @SubscribeMessage('message')
  HandleEvent(@ConnectedSocket() client: Socket , @MessageBody() data: string) {
    console.log(data) 

    return 'принял'
  }
}
