import robotprofileimg from "../assets/bot.png";
import userprofileimg from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  // const massage = props.massage;
  //const sender = props.sender;
  //const {massage, sender} = props;

  /*
                if (sender === "robot") {
                  return (
                    <div>
                      <img src="bot.png" width="30" />
                      {massage}
                    </div>
                  );
                }
        */
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={robotprofileimg} className="img-robot" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={userprofileimg} className="img-user" />}
    </div>
  );
}
