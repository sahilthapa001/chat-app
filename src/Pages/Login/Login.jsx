import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ChatContext } from "../../Context/ContextApi";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const { auth, setMyUser, users } = useContext(ChatContext);
	const navigate = useNavigate();
	const onSubmit = ({ email, password }) => {
		let real = auth.find((au) => au.email == email);
		if (!real) {
			return alert("User doesnt exist!");
		}
		if (real.password !== password) {
			return alert("username or password doesn't match!");
		}
		let myUser = users.find((u) => u.id == real.user);
		localStorage.setItem("myUser", JSON.stringify(myUser));
		setMyUser(myUser);
		return navigate("/Dashboard");
	};
	useEffect(() => {
		if (localStorage.getItem("myUser")) {
			let mU = localStorage.getItem("myUser");
			setMyUser(JSON.parse(mU));
			return navigate("/Dashboard");
		}
	}, []);

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className={styles.loginTitle}>Login</h1>

					<div className={styles.inputContainer}>
						<HiOutlineMail className={styles.icon} />
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Enter your email"
							{...register("email", { required: true })}
							className={styles.inputField}
							// required
						/>
						{errors.email && <div>Email is required</div>}
					</div>
					<div className={styles.inputContainer}>
						<RiLockPasswordLine className={styles.icon} />
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							{...register("password", { required: true })}
							className={styles.inputField}
							required
						/>
						{errors.password && <span>Password is required</span>}
					</div>
					<div>
						<input
							type="submit"
							className={styles.gotoDashboardButton}
							value="Login"
						/>
					</div>
					<div className={styles.links}>
						<p className="p">
							<a href="#">Forgot Password?</a> or{" "}
							<Link to="/Registration">Sign up</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
