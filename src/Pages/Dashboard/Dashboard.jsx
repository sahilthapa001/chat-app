import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { VscSend } from "react-icons/vsc";
import { FaBold, FaItalic, FaUnderline, FaRegFile } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { ChatContext } from "../../Context/ContextApi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const { chats, setChats, users, myUser, setMyUser, setSearchUser } =
		useContext(ChatContext);
	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState("");
	const chatBoxRef = useRef(null);
	const navigate = useNavigate();

	
	useEffect(() => {
		if (!myUser) {
			navigate("/");
			return setSearchUser("searched");
		}
	}, [myUser]);

	const handleSendMessage = () => {
		if (messageInput.trim() !== "") {
			setChats((prev) => [...prev, { text: messageInput, date }]);
			setMessageInput(""); 
		}
	};
	useEffect(() => {
		chatBoxRef?.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, messages.length]);

	return (
		<div className={styles.dashboardContainer}>
			{/* Left Column */}
			<div className={styles.chatListColumn}>
				<div className={styles.chatList}>
					<div className={styles.chatsContainer}>
						<div className={styles.chatFormContainer}>
							<h1 className={styles.header}>Chats </h1>

							<button className={styles.primaryButton}>
								<LuPlusCircle />
							</button>
						</div>
					</div>

					{users
						.filter((u) => u.id !== myUser?.id)
						.map((us, index) => (
							<div className={styles.messageBox} key={index}>
								<div className={styles.username}>
									<div className={styles.insideUsername}>
										<img
											src={us.profileImage}
											alt="User Profile"
											className={styles.userImage}
										/>
										<div className={styles.msg}>
											<div className={styles.usernametype}>
												<h3>{us.name}</h3>
												{/* <p>One Piece</p> */}
											</div>
											<div className={styles.delivery}>
												{/* <p>yesterday</p>
											<p>5:55pm</p> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					<div className={styles.logoutContainer}>
						<button
							className={styles.logoutButton}
							onClick={() => {
								localStorage.removeItem("myUser");
								setMyUser(null);
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</div>

			{/* Middle Column */}
			<div className={styles.chatFeedColumn}>
				<div className={styles.chatHeads}>
					<div className={styles.chatTitle}>
						<h2>Chiya ra Guff</h2>
					</div>
					<div className={styles.chatSubDetail}>
						<h3>Active...</h3>
					</div>
				</div>
				<div className={styles.chatSubDetail}>Time Date...</div>
				<div className={styles.chatBox}>
					<div className={styles.chatInnerBox}>
						{/* <div className={styles.sender}>hello bugatti!</div>
						<div className={styles.receiver}>hey luffy!</div> */}
						{chats.map((message, index) => {
							let isLast = messages.length == index + 1;
							return (
								<div
									className={`${
										myUser && myUser.id == message.sender
											? styles.receiver
											: styles.sender
									}`}
									key={index}
								>
									{isLast ? (
										<div>
											{message.text}
											<div ref={chatBoxRef}> </div>
										</div>
									) : (
										message.text
									)}
								</div>
							);
						})}
					</div>
					<div>
						<div className={styles.chatBoxInput}>
							<input
								type="text"
								className={styles.inputChat}
								name="chat"
								placeholder="Type your message..."
								onChange={(e) => setMessageInput(e.target.value)}
								value={messageInput}
							/>
						</div>
						<div className={styles.functionalButton}>
							<div>
								<button className={styles.button}>
									<FaBold />
								</button>
								<button className={styles.button}>
									<FaItalic />
								</button>
								<button className={styles.button}>
									<FaUnderline />
								</button>
								<button className={styles.button}>
									<FaRegFile />
								</button>
							</div>
							<div className={styles.send}>
								<button className={styles.button} onClick={handleSendMessage}>
									<VscSend />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Right Column */}
			<div className={styles.chatSettingColumn}>
				<div className={styles.chatSetting}>
					<div className={styles.avatarLogo}>{/* Images */}</div>
					<div>
						<div className={styles.chatTitle}>
							<h2>Guff Gaff</h2>
						</div>
						<div>
							<div className={styles.details}>
								<h4>PEOPLE</h4>
								<button className={styles.detailsButton}>#</button>
							</div>
							<div className={styles.details}>
								<h4>PHOTOS</h4>
								<button className={styles.detailsButton}>#</button>
							</div>
							<div className={styles.details}>
								<h4>OPTIONS</h4>
								<button className={styles.detailsButton}>#</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
