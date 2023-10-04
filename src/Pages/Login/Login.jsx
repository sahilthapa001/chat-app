import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
function Login() {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/Dashboard");
	};

	return (
		<div className={styles.loginContainer}>
			<div className={styles.subMain}>
				<div>
					<div className={styles.containerImage}>
						<img
							src={"/Images/user.png"}
							alt="User photo"
							className={styles.profile}
						/>
					</div>
				</div>
				<div>
					<h1 className={styles.loginTitle}>Login</h1>

					<div className={styles.inputContainer}>
						<img
							src={"/Images/email.png"}
							alt="email"
							className={styles.icon}
						/>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter your username"
							className={styles.inputField}
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<img src={"/Images/pass.png"} alt="pass" className={styles.icon} />
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							className={styles.inputField}
							required
						/>
					</div>
					<div>
						<button
							onClick={handleLogin}
							className={styles.gotoDashboardButton}
						>
							Login
						</button>
					</div>
					<div className={styles.links}>
						<p className="p">
							<a href="#">Forgot Password?</a> or{" "}
							<Link to="/Registration">Sign up</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
