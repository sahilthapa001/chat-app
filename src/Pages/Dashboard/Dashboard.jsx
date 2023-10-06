import React from "react";
import styles from "./styles.module.css";
import { VscSend } from "react-icons/vsc";
import { FaBold, FaItalic, FaUnderline, FaRegFile } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
function Registration() {
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
							<h4>Chattings</h4>
						</div>
						<div>
							<div className={styles.chatBoxInput}>
								<input
									type="text"
									className={styles.inputChat}
									name="chat"
									placeholder="Type your message..."
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
									<button className={styles.button}>
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

export default Registration;
