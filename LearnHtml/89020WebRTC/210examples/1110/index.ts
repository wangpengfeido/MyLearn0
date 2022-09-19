import { WebSocketServer, WebSocket } from "ws";

//-----------------------------------------------------------------

/** 连接 ID 计数 */
let nextID = Date.now();
/** 保存在线连接 */
const connectionArray: {
  clientID: number;
  username?: string;
  ws: WebSocket;
}[] = [];

/** 遍历找到在线的 target 用户连接，向其发送 msgString。 */
function sendToOneUser(target, msgString: string) {
  for (let i = 0; i < connectionArray.length; i++) {
    if (connectionArray[i].username === target) {
      connectionArray[i].ws.send(msgString);
      break;
    }
  }
}

/** 遍历找到 id 对应的连接 */
function getConnectionForID(id: number) {
  let connect = null;
  for (let i = 0; i < connectionArray.length; i++) {
    if (connectionArray[i].clientID === id) {
      connect = connectionArray[i];
      break;
    }
  }
  return connect;
}

//-----------------------------------------------------------------

const wss = new WebSocketServer({ port: 6503 });

wss.on("connection", (ws, request) => {
  const clientID = nextID;
  nextID++;
  connectionArray.push({ clientID: clientID, ws });

  ws.send(JSON.stringify({ type: "id", id: clientID }));

  ws.on("message", (data, isBinary) => {
    if (isBinary) {
      return;
    }
    const msg: {
      type: "message" | "username";
      id: string;
      name: string;
      text: string;
    } = JSON.parse(data.toString());
  });
});
