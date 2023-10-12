import { createContext, useEffect, useState } from "react";
import ChatJson from "../../public/Data/chat.json";
import ConversationJson from "../../public/Data/conversation.json";
import UserJson from "../../public/Data/users.json";
import AuthJson from "../../public/Data/auth.json";
import styles from "./styles.module.css";
// creating context
export const ChatContext = createContext();

//wrapping up the container

export const ChatContextProvider = ({ children }) => {
	const [chats, setChats] = useState([]);
	const [auth, setAuth] = useState([]);
	const [myUser, setMyUser] = useState(null);
	const [searchUser, setSearchUser] = useState("searching");

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
	useEffect(() => {
		// let temp = JSON.parse(ConversationJson);
		setAuth(AuthJson);
	}, []);
	let providerValue = {
		chats,
		setChats,
		users,
		setConversations,
		conversations,
		auth,
		setMyUser,
		myUser,
		searchUser,
		setSearchUser,
	};
	return (
		<ChatContext.Provider value={providerValue}>
			<div
				className={`${
					searchUser == "searching" ? styles.search : styles.complete
				}`}
			>
				searching
			</div>
			{children}
		</ChatContext.Provider>
	);
};
