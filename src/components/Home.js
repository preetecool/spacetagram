import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/sat.json";
import { Button, DisplayText } from "@shopify/polaris";
import { Link } from "react-router-dom";

const Home = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Wrapper>
			<DisplayText size="extraLarge">Welcome to Spacetagram</DisplayText>
			<br />
			<DisplayText size="small">
				View the Astronomy Picture of the Day, brought to you by NASA.
			</DisplayText>
			<Lottie options={defaultOptions} height={400} width={400} />
			<br />
			<SpaceLink to={"/space"}>
				<Button primary>Explore Space</Button>
			</SpaceLink>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	position: relative;
	font-size: 1.8em;
	padding: 5%;
`;
const SpaceLink = styled(Link)`
	text-decoration: none;
`;

export default Home;
