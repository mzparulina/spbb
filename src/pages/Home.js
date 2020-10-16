import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Card, Button, Empty } from 'antd';
import { theme, mq } from '../constants/theme';

const StyledDiv = styled.div`
	@media screen and ${mq.phone.wide.max} {
		margin-top: 4rem;
	}

	@media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
		border-radius: 0.3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		padding: 16rem 7rem 16rem 5rem;
	}

	@media only screen and ${mq.desktop.medium.minWidth} {
		padding: 20rem 7rem 20rem 5rem;
	}
`;

const StyledH1 = styled.div`
	@media only screen and (min-width: ${mq.desktop.small.minWidth}) {
		width: 90%;
	}
`;

const StyledP = styled.p`
	text-align: left;
	margin: 0.5rem 0;
`;

const Title = styled.h1`
	text-align: center;
	width: 100%;
	background: #fff;
`;

const StyledList = styled.ul`
	display: table;
	margin: 0 auto;
`;

// const FlexBox = styled(Flex).attrs((props) => ({
//   wrap: "wrap",
//   justify: "center",
// }))``;

const Home = (props) => {
	return (
		<Row>
			<Col span={12}>
				<StyledDiv>
					<StyledH1>
						<h1>SPBB</h1>
						<h1>4th Quarter</h1>
					</StyledH1>
					<StyledP>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam ullamcorper nec arcu quis scelerisque. Nam ac massa
						nunc. Ut porttitor metus sit amet pellentesque rutrum.
						Nam accumsan interdum lorem non rutrum.{' '}
					</StyledP>
				</StyledDiv>
			</Col>
			<Col span={12}>
				<StyledDiv>
					<Empty></Empty>
				</StyledDiv>
			</Col>
			<>
				<Title>Requirements</Title>
				<Col span={12}>
					<StyledDiv>
						<Card>
							<Empty></Empty>
						</Card>
					</StyledDiv>
				</Col>

				<Col span={12}>
					<StyledDiv>
						<StyledH1>
							<h1>Camera Requirements</h1>
						</StyledH1>
						<StyledP>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nam ullamcorper nec arcu quis scelerisque. Nam
							ac massa nunc. Ut porttitor metus sit amet
							pellentesque rutrum. Nam accumsan interdum lorem non
							rutrum.{' '}
						</StyledP>
						<ul>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
						</ul>
					</StyledDiv>
				</Col>
				<Col span={12}>
					<StyledDiv>
						<StyledH1>
							<h1>Clothes Framing Requirements</h1>
						</StyledH1>
						<StyledP>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nam ullamcorper nec arcu quis scelerisque. Nam
							ac massa nunc. Ut porttitor metus sit amet
							pellentesque rutrum. Nam accumsan interdum lorem non
							rutrum.{' '}
						</StyledP>
						<ul>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
						</ul>
					</StyledDiv>
				</Col>

				<Col span={12}>
					<StyledDiv>
						<Card>
							<Empty></Empty>
						</Card>
					</StyledDiv>
				</Col>
			</>
			<>
				<Title>Song</Title>
				<Col span={24}>
					<Card>
						<Empty></Empty>
					</Card>
					<div style={{ textAlign: 'center' }}>
						<StyledList>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Lorem ipsum dolor sit amet</li>
						</StyledList>
					</div>
				</Col>
			</>
		</Row>
	);
};
export default Home;
