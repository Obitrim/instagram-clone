import React from 'react';
import { Link } from "react-router-dom";

import "../styles/AppHome.css";
import Post from "../components/post/Post";
import { StoreContext } from "../store/index";
import Suggestion from "../components/Suggestion";
import AppContainer from "../components/AppContainer";
import FollowingBox from "../components/FollowingBox";
import UserProfileBox from "../components/UserProfileBox";


export default class AppHome extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			posts: [{}],
			suggestions: [
				{img: "/imgs/post.jpg", name: "Ronaldo"},
				{img: "/imgs/profile_2.jpg", name: "Messi"},
				{img: "/imgs/profile_3.jpg", name: "GBC"},
				{img: "/imgs/profile_4.jpg", name: "BBC"},
				{img: "/logo192.png", name: "React"},
			]
		}
	}

	componentDidMount() {
		let loggedInUser = localStorage.getItem("user");
		loggedInUser = JSON.parse(loggedInUser);
		this.context.dispatch({ type: "SET_USER", user: loggedInUser });
	}

	render() {
		return (
			<div className="AppHome">
				<AppContainer>
					<div className="Row">
						<main className="AppHome__Posts">
							<FollowingBox />
							<Post />
							{/*Account Suggestions*/}
							{/*More Posts*/}
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
							<Post />
						</main>
						<aside className="AppHome__Suggestions">
							<UserProfileBox />
							<div className="AppHome__Suggestions__Header">
								<h4 className="AppHome__Suggestions__Header__Title">Suggestions For You</h4>
								<Link to="/all-suggesstions" className="AppHome__Suggestions__Header__SeeAll">See All</Link>
							</div>
							{
								this.state.suggestions.map((suggestion, index) => {
									return <Suggestion account={suggestion} key={index}/>
								})
							}
							<footer className="Footer">
								<a href="#" className="Footer__Link">About</a>.
								<a href="#" className="Footer__Link">Help</a>.
								<a href="#" className="Footer__Link">Press</a>.
								<a href="#" className="Footer__Link">API</a>.
								<a href="#" className="Footer__Link">Jobs</a>.
								<a href="#" className="Footer__Link">Privacy</a>.
								<a href="#" className="Footer__Link">Terms</a>.
								<a href="#" className="Footer__Link">Locations</a>.
								<a href="#" className="Footer__Link">Top Accounts</a>.
								<a href="#" className="Footer__Link">Hashtags</a>.
								<a href="#" className="Footer__Link">Language</a>

								<div className="Footer__copyright">
									&copy;2020 Instagram from Xcoder
								</div>
							</footer>
						</aside>
					</div>
				</AppContainer>
			</div>
		);
	}
}

AppHome.contextType = StoreContext;