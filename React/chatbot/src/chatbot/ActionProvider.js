class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleHello() {
      const message = this.createChatbotMessage('G\'day. Nice to meet you.');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
 }
 
 export default ActionProvider;