import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Row, Col, Steps, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { SubmitButton, Input, Form, Cascader } from "formik-antd";

import DataService from "../services/DataService";
import styled from "styled-components";

const { Step } = Steps;
const { Option } = Select;

const StyledDiv = styled.div`
	border: grey solid 1px;
	padding: 20px;
	border-radius: 15px;
	min-width: 400px;
	min-height: 400px;
`;

const initialValues = {
	firstName: "",
	lastName: "",
};

const validationSchema = yup.object({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
});

const props = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const options = [];
const UploadPage = () => {
	const [user, setUser] = useState(null);
	const [count, setCount] = useState(0);
	const [divisions, setDivisions] = useState(null);
	const [districts, setDistricts] = useState(null);
	const [regions, setRegions] = useState(null);

	const getUser = async () => {
		const user = { username: "www", password: "chris" };
		const users = await DataService.login(user);
		setUser(users.data);
	};

	const getRegions = async () => {
		getUser();
		const regions = await DataService.getRegions();
		setRegions(regions.data);
	};

	const getDivisions = async () => {
		getUser();
		const divisions = await DataService.getDivisions();
		setDivisions(divisions.data);
	};

	const getDistrict = async () => {
		getUser();
		const districts = await DataService.getDistrict();
		setDistricts(districts.data);
	};

	const onStepChange = () => {
		setCount(count + 1);
	};

	useEffect(() => {}, []);

	const infoForm = (
		<Form>
			<Form.Item
				name="firstName"
				label="First Name"
				required={true}
				validate={validationSchema}
			>
				<Input name="firstName" placeholder="First Name" />
			</Form.Item>
			<Form.Item
				name="lastName"
				label="Last Name"
				required={true}
				validate={validationSchema}
			>
				<Input name="lastName" placeholder="Last Name" />
			</Form.Item>
			<Form.Item label="Regions" name="regions" required={true}>
				<Select
					showSearch
					placeholder="Regions"
					onChange={getDivisions}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Form.Item>
			<Form.Item label="Division" name="division" required={true}>
				<Select
					showSearch
					placeholder="Division"
					onChange={getDistrict}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Form.Item>
			<Form.Item label="District" name="district" required={true}>
				<Select showSearch placeholder="District" onChange={() => {}}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Form.Item>
			<Form.Item name="button" onClick={onStepChange}>
				<Button>Next</Button>
			</Form.Item>
		</Form>
	);

	const uploadForm = (
		<Form>
			<Form.Item
				name="projectName"
				label="Project Name"
				required={true}
				validate={validationSchema}
			>
				<Select showSearch placeholder="" onChange={() => {}}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="count"
				label="How many are you in the video?"
				required={true}
				validate={validationSchema}
			>
				<Select showSearch placeholder="" onChange={() => {}}>
					<Option value="jack">1</Option>
					<Option value="lucy">2</Option>
					<Option value="tom">3+</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name="browse"
				label="Browse?"
				required={true}
				validate={validationSchema}
			>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Form.Item>
			<Form.Item name="button" onClick={onStepChange}>
				<Button>Submit</Button>
			</Form.Item>
		</Form>
	);

	return (
		<Row justify="center" style={{ padding: "50px 20px" }}>
			<Col span={4}>
				<Steps direction="vertical" current={count}>
					<Step
						title="Basic info"
						description="Enter your basic information"
					/>
					<Step
						title="Upload Video"
						description="This is a description."
					/>
					<Step
						title="Finished"
						description="This is a description."
					/>
				</Steps>
			</Col>
			<Col span={8}>
				<StyledDiv>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={() => {}}
					>
						{count === 0 ? infoForm : uploadForm}
					</Formik>
				</StyledDiv>
			</Col>
		</Row>
	);
};
export default UploadPage;
