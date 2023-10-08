import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { VscSend } from "react-icons/vsc";
import { FaBold, FaItalic, FaUnderline, FaRegFile } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { ChatContext } from "../../Context/ContextApi";
function Dashboard() {
	const { chats, conversations, users } = useContext(ChatContext);
	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState("");

	const msgHandle = () => {
		if (messageInput.trim() !== "") {
			setMessages([...messages, messageInput]);
			setMessageInput(""); // Clear the input field
		}
	};

	return (
		<div>
			<div className={styles.dashboardContainer}>
				{/* Left Column */}

				<div className={styles.chatListColumn}>
					<div className={styles.chatList}>
						<div className={styles.chatsContainer}>
							<div className={styles.chatFormContainer}>
								<h1 className={styles.header}>My Chats</h1>
								<button className={styles.primaryButton}>
									<LuPlusCircle />
								</button>
							</div>
						</div>
						{users.map((us, index) => {
							return (
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
							);
						})}

						<div className={styles.logoutContainer}>
							<button className={styles.logoutButton}>Logout</button>
						</div>
					</div>
				</div>

				{/* Middle Column */}
				<div className={styles.chatFeedColumn}>
					<div className={styles.chatHeads}>
						<div className={styles.chatTitle}>
							<h2>Gaming</h2>
						</div>
						<div className={styles.chatSubDetail}>
							<h3>Active...</h3>
						</div>
					</div>
					<div className={styles.chatSubDetail}>Time Date...</div>

					<div className={styles.chatBox}>
						<div>
							<div className={styles.sender}>hello bugatti!</div>
							<div className={styles.receiver}>hey luffy!</div>

							{messages.map((message, index) => (
								<div className={styles.sender} key={index}>
									{message}
								</div>
							))}
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
									<button className={styles.button} onClick={msgHandle}>
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
								<h2>Gaming</h2>
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
		</div>
	);
}

export default Dashboard;
