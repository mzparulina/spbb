import React from "react";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Row, Col, Card, Empty } from "antd";
import { mq } from "../constants/theme";

const { Meta } = Card;

const StyledDiv = styled.div`
	border-radius: 0.3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	padding: 15rem 5rem;
`;

const StyledDivContent = styled.div`
	border-radius: 0.3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	padding: 10rem 5rem;
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
						Nam accumsan interdum lorem non rutrum.{" "}
					</StyledP>
				</StyledDiv>
			</Col>
			<Col span={12}>
				<StyledDiv>
					<Empty></Empty>
				</StyledDiv>
			</Col>
			<>
				<Title>THANKSGIVING MATERIALS</Title>
				<Col span={12}>
					<StyledDivContent>
						<Card title="STUDY FILE: HEAL THE WORLD">
							<p>
								The sacrifice of thanksgiving to God should be
								well-prepared and planned. Please memorize the
								song we will be singing before recording a video
								of ourselves. Treat the video recording as if it
								is our actual thanksgiving already, and not just
								because we are obligated to record a video and
								submit. LET US SING WITH GRACE IN OUR HEARTS.
							</p>
						</Card>
					</StyledDivContent>
				</Col>
				<Col span={12}>
					<StyledDivContent>
						<Empty></Empty>
					</StyledDivContent>
				</Col>
				<Col span={12} style={{ textAlign: "center" }}>
					<StyledDivContent>
						<StyledH1>
							<h1>Phone Camera Guidelines</h1>
						</StyledH1>

						<p>
							When recording a video using smartphones, record a
							video in PORTRAIT or Vertical mode if recording
							individually. Record in LANDSCAPE or HORIZONTAL mode
							if recording witha a group.
						</p>
					</StyledDivContent>
				</Col>

				<Col span={12}>
					<StyledDivContent>
						<Empty></Empty>
					</StyledDivContent>
				</Col>
				<Col span={24}>
					<Row gutter={16}>
						<Col span={8}>
							<Card
								style={{ height: "370px" }}
								hoverable
								cover={<img width={200} height={200} src="" />}
							>
								<Meta description="Please use the BACK CAMERA of your phones when recording your thanksgiving videos." />
							</Card>
						</Col>
						<Col span={8}>
							<Card
								style={{ height: "370px" }}
								hoverable
								cover={<img width={200} height={200} src="" />}
							>
								<Meta description="If you can see yourself in the phone screen, you are using the front camera of your phone. Click or tap the FLIP BUTTON to enable the camera in the back of your phone." />
							</Card>
						</Col>
						<Col span={8}>
							<Card
								style={{ height: "370px" }}
								hoverable
								cover={<img width={200} height={200} src="" />}
							>
								<Meta description="4K is the resolution that we will be using when recording. Resolution is the measure of width and height of our videos. Please watch the video for instructions on how to change the settings of your camera resolution." />
							</Card>
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<StyledDiv>
						<StyledH1>
							<h1>Clothes Framing Requirements</h1>
						</StyledH1>
						<StyledP>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nam ullamcorper nec arcu quis scelerisque. Nam
							ac massa nunc. Ut porttitor metus sit amet
							pellentesque rutrum. Nam accumsan interdum lorem non
							rutrum.{" "}
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
					<div style={{ textAlign: "center" }}>
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
