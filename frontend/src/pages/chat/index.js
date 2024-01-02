import styles from './style.module.css';
import MessagesReceived from './Messages';
import SendMessage from './SendMessages';
import RoomAndUsers from './Room-and-Roomusers';

const Chat = ({ socket, username, room }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsers socket={socket} username={username} room={room} />
    <div>
      <MessagesReceived socket={socket} />
      <SendMessage socket={socket} username={username} room={room} />
    </div>
  </div>
  );
};

export default Chat;