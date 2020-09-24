import * as yup from "yup";
import React, { useState, useContext } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import { Redirect, useHistory } from 'react-router-dom';

import "../../styles/Auth.css";
import AuthService from "../../services/auth";
import BaseButton from "../buttons/BaseButton"; 
import { StoreContext } from "../../store/index";

const AuthLogin = ({ switchScreen }) => {
	const history = useHistory();
	const { dispatch } = useContext(StoreContext);

	return (
		<div className="AuthLogin">
			<h1 className="AuthView__Title">Login</h1>
			<p className="AuthView__Info">Please provide your account email and password. All fields are required</p>
			<Formik
				initialValues={{ email: "", password: ""}}
				validationSchema={yup.object({
					email: yup.string()
						.email("Invalid Email Address")
						.required("Email is required"),
					password: yup.string()
						.min(6, "Password must be at least 6 characters")
						.required("Password is required")
				})}
				onSubmit={credentials => {
					AuthService.loginUser(credentials)
						.then(data => {
							dispatch({ type: "SET_USER", user: data.user })
							dispatch({ type: "SET_TOKEN", token: data.token })
							history.push("/app");
						})
						.catch(error => console.log(error))
				}}
				>
				{formik => (
					<form onSubmit={ formik.handleSubmit }>
						<div className="FormGroup">
							<label htmlFor="email">Email</label>
							<Field className="FormGroup__Input" 
								type="email" 
								name="email" 
								placeholder="Enter your email"
								/>
							{formik.touched.email && formik.errors.email 
								? <output className="FormGroup__Error">{formik.errors.email}</output>
								: null}
						</div>
						<div className="FormGroup">
							<label htmlFor="password">Password</label>
							<Field className="FormGroup__Input" 
								type="password" 
								name="password"
								placeholder="Enter your password"/>
							{formik.touched.password && formik.errors.password 
								? <output className="FormGroup__Error">{formik.errors.password}</output>
								: null}
						</div>
						<BaseButton 
							btnText="Login" 
							type="submit" 
						/>
						<p className="SwitchBox">
							Don't have an account? &nbsp; 
							<a href="#" 
								className="SwitchBox__Btn" 
								onClick={ evt => switchScreen(evt, "register") }>
								Register
							</a>
						</p>
					</form>
				)}
			</Formik>
		</div>
	);
}

export default AuthLogin;