import React, { useEffect, useState } from "react";
import {
	Card,
	TextContainer,
	Heading,
	TextStyle,
	Frame,
	Loading,
	DisplayText,
} from "@shopify/polaris";
import styled from "styled-components";
import HeartButton from "./HeartButton";

const Feed = () => {
	const [apiData, setApiData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNasaData = async () => {
			const apiKey = process.env.REACT_APP_API_KEY;
			const response = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			);
			const data = await response.json();
			setApiData(data);
			setLoading(false);
		};
		fetchNasaData();
	}, []);

	return loading ? (
		<div style={{ height: "100px" }}>
			<Frame>
				<Loading />
			</Frame>
		</div>
	) : (
		<Wrapper>
			<>
				<DisplayText size="extraLarge">Spacetagram</DisplayText>
				<br />
				{apiData.media_type === "image" ? (
					<>
						<Card>
							<Card.Section flush>
								<img
									width="100%"
									height="100%"
									src={apiData.url}
									alt={apiData.title}
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
								<Card.Section>
									<TextStyle variation="subdued">{apiData.date}</TextStyle>
									<Heading element="h1">{apiData.title}</Heading>
									<br />
									<TextContainer>{apiData.explanation}</TextContainer>
								</Card.Section>
								<Card.Section>
									<HeartButton></HeartButton>
								</Card.Section>
							</Card.Section>
						</Card>
					</>
				) : (
					<>
						<Card>
							<Card.Section flush>
								<iframe
									title={apiData.title}
									width="100%"
									height="600px"
									src={apiData.url}
									alt={apiData.title}
									style={{
										objectFit: "cover",
										objectPosition: "center",
									}}
								/>
								<Card.Section>
									<TextStyle variation="subdued">{apiData.date}</TextStyle>
									<Heading element="h1">{apiData.title}</Heading>
									<br />
									<TextContainer>{apiData.explanation}</TextContainer>
								</Card.Section>
								<Card.Section>
									<HeartButton></HeartButton>
								</Card.Section>
							</Card.Section>
						</Card>
					</>
				)}
			</>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 75%;
	min-width: 35%;
	max-height: 60vh;
	margin: 5% auto 5% auto;
`;

export default Feed;
