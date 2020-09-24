import React from 'react';
import * as yup from "yup";
import { Formik, Field } from "formik";
import { useHistory } from 'react-router-dom';

import "../../styles/Auth.css";
import AuthService from "../../services/auth";
import BaseButton from "../buttons/BaseButton";

const AuthRegister = ({switchScreen}) => {
	return (
		<div className="AuthRegister">
			<h1 className="AuthView__Title">Register</h1>
			<p className="AuthView__Info">Provide valid information to create your account</p>
			<Formik 
				initialValues={{ username: "", email: "", password: "" }}
				validationSchema={yup.object({
					username: yup.string()
						.min(3, "Username must be at least 5 characters")
						.required("Username is required"),
					email: yup.string()
						.email("Email format is invalid")
						.required("Email is required"),
					password: yup.string()
						.min(6, "Password must be 6 characters or more")
						.required("Password is required")
				})}
				onSubmit={credentials => {
					AuthService.registerUser(credentials)
						.then(createdUser => {
							console.log("user", createdUser);
							switchScreen(new Event("click"), "login");
						})
						.catch(error => console.log(error));
				}}
				>
				{formik => (
					<form  onSubmit={formik.handleSubmit}>
						<div className="FormGroup">
							<label htmlFor="username">Username</label>
							<Field className="FormGroup__Input" type="text" name="username"/>
							{ formik.touched.username && formik.errors.username 
								?  <output className="FormGroup__Error">{formik.errors.username}</output>
								: null }
						</div>
						<div className="FormGroup">
							<label htmlFor="email">Email</label>
							<Field className="FormGroup__Input" type="email" name="email" />
							{ formik.touched.email && formik.errors.email 
								?  <output className="FormGroup__Error">{formik.errors.email}</output>
								: null }
						</div>
						<div className="FormGroup">
							<label htmlFor="password">Password</label>
							<Field className="FormGroup__Input" type="password" name="password" />
							{ formik.touched.password && formik.errors.password 
								?  <output className="FormGroup__Error">{formik.errors.password}</output>
								: null }
						</div>
						<BaseButton 
							btnText="Register" 
							type="submit" 
						/>
						<p className="SwitchBox">
							Already have an account? &nbsp;
							<a href="#" 
								className="SwitchBox__Btn"
								onClick={ evt => switchScreen(evt, "login") }>
								Login
							</a>
						</p>
					</form>
				)}
			</Formik>
		</div>
	);
}

export default AuthRegister;