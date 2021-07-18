import React from "react";

// 1. Create the context
// 2. Provide a context value
// 3. Consume the context value

const UserContext = React.createContext("Code Context");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.UserConsumer;

export { UserProvider, UserConsumer}
