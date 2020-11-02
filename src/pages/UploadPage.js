import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Row, Col, Steps, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Form } from "formik-antd";

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
	const [songs, setSongs] = useState(null);

	const getUser = async () => {
		const userData = { email: "www@mcgi.io", password: "public" };
		const users = await axios.post("/api/users/login", userData);
		setUser(users.data);
	};

	const getRegions = async () => {
		const userData = { email: "www@mcgi.io", password: "public" };
		const users = await axios.post("/api/users/login", userData);

		if (users) {
			let config = { authorization: users.data.data.api_key };
			const regions = await axios.get("/api/regions", {
				headers: config,
			});
			setRegions(regions.data);
		}
	};

	const getDivisions = async (value) => {
		const userData = { email: "www@mcgi.io", password: "public" };
		const users = await axios.post("/api/users/login", userData);

		if (users) {
			console.log(value);

			let config = { Authorization: users.data.data.api_key };
			const divisions = await axios.get(
				`/api/divisions/regions/${value}`,
				{
					headers: config,
				}
			);
			setDivisions(divisions.data);
		}
	};

	const getDistrict = async (value) => {
		const userData = { email: "www@mcgi.io", password: "public" };
		const users = await axios.post("/api/users/login", userData);

		if (users) {
			let config = { Authorization: users.data.data.api_key };
			const districts = await axios.get(
				`/api/districts/divisions/${value}`,
				{
					headers: config,
				}
			);
			setDistricts(districts.data);
		}
	};

	const getSongs = async () => {
		// getUser();
		console.log("songs");
		const songData = await axios.get("/api/songs");
		// setSongs(songData);
		console.log(songData);
	};

	const onStepChange = () => {
		setCount(count + 1);
		if (count === 0) getSongs();
	};

	useEffect(() => {
		getRegions();
	}, []);

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
				<Select placeholder="Regions" onChange={getDivisions}>
					{regions && regions.data.length > 0
						? regions.data.map((region, key) => (
								<Option key={key} value={region.uuid}>
									{region.name}
								</Option>
						  ))
						: ""}
				</Select>
			</Form.Item>
			<Form.Item label="Division" name="division" required={true}>
				<Select placeholder="Division" onChange={getDistrict}>
					{divisions && divisions.data.length > 0
						? divisions.data.map((division, key) => (
								<Option key={key} value={division.uuid}>
									{division.name}
								</Option>
						  ))
						: ""}
				</Select>
			</Form.Item>
			<Form.Item label="District" name="district" required={true}>
				<Select placeholder="District">
					{districts && districts.data.length > 0
						? districts.data.map((district, key) => (
								<Option key={key} value={district.uuid}>
									{district.name}
								</Option>
						  ))
						: ""}
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
				<Select placeholder="" onChange={() => {}}>
					{songs &&
						songs.map((songs, index) => (
							<Option value="songs.name">{songs.name}</Option>
						))}
				</Select>
			</Form.Item>
			<Form.Item
				name="projectPart"
				label="Part Number"
				required={true}
				validate={validationSchema}
			>
				<Select placeholder="" onChange={() => {}}>
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
				<Select placeholder="" onChange={() => {}}>
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
