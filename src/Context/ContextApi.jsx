import { createContext, useEffect, useState } from "react";
import ChatJson from "../../public/Data/chat.json";
import ConversationJson from "../../public/Data/conversation.json";
import UserJson from "../../public/Data/users.json";

// creating context
export const ChatContext = createContext();

//wrapping up the container

export const ChatContextProvider = ({ children }) => {
	const [chats, setChats] = useState([]);
	const [users, setUsers] = useState([]);
	const [conversations, setConversations] = useState([]);
	useEffect(() => {
		// let temp = JSON.parse(ChatJson);
		setChats(ChatJson);
	}, []);
	useEffect(() => {
		// let temp = JSON.parse(UserJson);
		setUsers(UserJson);
	}, []);
	useEffect(() => {
		// let temp = JSON.parse(ConversationJson);
		setConversations(ConversationJson);
	}, []);
	let providerValue = {
		chats,
		setChats,
		users,
		setConversations,
		conversations,
	};
	return (
		<ChatContext.Provider value={providerValue}>
			{children}
		</ChatContext.Provider>
	);
};
