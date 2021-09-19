import React, { useEffect, useState, useContext } from "react";
import { MediaCard, VideoThumbnail, Caption, Card } from "@shopify/polaris";
import styled from "styled-components";

const Feed = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		const fetchNasaData = async () => {
			const apiKey = process.env.REACT_APP_API_KEY;
			const response = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			);
			const data = await response.json();
			console.log(data);
			setApiData(data);
		};
		fetchNasaData();
	}, []);

	return (
		<Wrapper>
			<>
				{apiData.media_type === "image" ? (
					<>
						<MediaCard portrait={true}>
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

							<Card title={apiData.title}>
								<Card.Section>
									<Caption>{apiData.date}</Caption>
									<br />
									<p>{apiData.explanation}</p>
									<br />
								</Card.Section>
							</Card>
						</MediaCard>
					</>
				) : (
					<MediaCard
						portrait={true}
						title={apiData.title}
						primaryAction={{
							content: "Learn more",
							onAction: () => {},
						}}
						description={apiData.explanation}
					>
						<VideoThumbnail
							videoLength={80}
							thumbnailUrl={apiData.url}
							frameBorder="0"
							gesture="media"
							allow="encrypted-media"
							allowFullSCreen
						/>
					</MediaCard>
				)}
			</>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 85%;
	min-width: 30%;
	margin: 5% auto 5% auto;
`;

export default Feed;
