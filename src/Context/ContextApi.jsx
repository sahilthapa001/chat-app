import { createContext } from "react";

// creating context
export const ChatContext = createContext();

//wrapping up the container

export const ChatContextProvider = ({ children }) => {
	return (
		<ChatContext.Provider value={children}>{children}</ChatContext.Provider>
	);
};
