import React, { useState } from "react";
import Heart from "react-animated-heart";
import styled from "styled-components";
import { TextStyle } from "@shopify/polaris";

const HeartButton = () => {
	const [isPostLiked, setIsPostLiked] = useState();
	const [numberOfLikes, setNumberOfLikes] = useState(99);

	const handleLike = () => {
		setIsPostLiked(!isPostLiked);
		!isPostLiked
			? setNumberOfLikes(numberOfLikes + 1)
			: setNumberOfLikes(numberOfLikes - 1);
	};

	return (
		<Wrapper>
			<Heart
				isClick={isPostLiked}
				onClick={() => setIsPostLiked(!isPostLiked)}
				onClick={handleLike}
			/>
			<TextStyle variation="subdued">{numberOfLikes}</TextStyle>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export default HeartButton;
