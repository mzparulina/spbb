import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from 'components/Header';
// import styled from 'styled-components';
import { Row, Col, Carousel, Card, Button, Empty } from 'antd';
// import '../App.css';

function onChange(a, b, c) {
	console.log(a, b, c);
}

const contentStyle = {
	height: '160px',
	lineHeight: '160px',
	textAlign: 'center',
	// background: '#364d79',
};

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
					<Card>
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
					</Card>
				</Col>
				<Col span={12}>
					<Card>
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
					</Card>
				</Col>
			</Row>
		</div>
	);
};
export default Home;
