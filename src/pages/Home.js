import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from 'components/Header';
import styled from 'styled-components';
import { Row, Col, Carousel, Button, Empty } from 'antd';
// import '../App.css';

const StyledIntro = styled.div`
	background: transparent;
	border: 0;
	padding: 50px;
`;

const Home = (props) => {
	return (
		<div>
			<Row
				type="flex"
				justify="space-around"
				align="middle"
				style={{ minHeight: '555px' }}
			>
				<Col span={12}>
					<StyledIntro>
						<h1>SPBB</h1>
						<h1>4th Quarter</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Nam ullamcorper nec arcu quis scelerisque. Nam
							ac massa nunc. Ut porttitor metus sit amet
							pellentesque rutrum. Nam accumsan interdum lorem non
							rutrum.{' '}
						</p>
						<Button>Get Started</Button>
						<Button>Upload</Button>
					</StyledIntro>
				</Col>
				<Col span={12}>
					<StyledIntro>
						<Carousel autoplay>
							<div>
								<Empty />
							</div>
							<div>
								<Empty />
							</div>
							<div>
								<Empty />
							</div>
							<div>
								<Empty />
							</div>
						</Carousel>
					</StyledIntro>
				</Col>
			</Row>
		</div>
	);
};
export default Home;
