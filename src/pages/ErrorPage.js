import React from 'react';
import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const ErrorPage = (props) => {
	return (
		<Result
			status="error"
			title="Submission Failed"
			subTitle="Please check and modify the following information before resubmitting."
			extra={<Button key="buy">Try Again</Button>}
		>
			<div className="desc">
				<Paragraph>
					<Text
						strong
						style={{
							fontSize: 16,
						}}
					>
						The content you submitted has the following error:
					</Text>
				</Paragraph>
				<Paragraph>
					<CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
					File too big. <a>Please try again &gt;</a>
				</Paragraph>
				<Paragraph>
					<CloseCircleOutlined className="site-result-demo-error-icon" />{' '}
					A network error has occurred <a>Please try again &gt;</a>
				</Paragraph>
			</div>
		</Result>
	);
};
export default ErrorPage;
