// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`How can I help you?`)],
  botName: 'ChatBot',
  customComponents: {
    // Replaces the default header
   header: () => <div class="react-chatbot-kit-chat-header">Chatbot</div>,
   // Replaces the default bot avatar
  //  botAvatar: (props) => <MyAvatar {...props} />,
   // Replaces the default bot chat message container
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   // Replaces the default user icon
  //  userAvatar: (props) => <MyCustomAvatar {...props} />,
   // Replaces the default user chat message
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },
}

export default config
