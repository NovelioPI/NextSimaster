import { io } from "socket.io-client";
const socket = io.connect("http://192.168.100.24:8000", {jsonp: false});
export default socket;