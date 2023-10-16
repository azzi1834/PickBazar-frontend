import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Image,
  Col,
  Row,
  Space,
  Flex,
  Divider,
  Typography,
} from "antd";
import classes from "./Login.module.css";
import websiteLogo from "./../../../Images/PickBazar.webp";
export default function Login() {
  const { Text, Title } = Typography;
  const boxStyle = {
    width: "100%",
  };
  const boxStyle2 = {
    borderRadius: 6,
    border: "1px solid rgb(151, 161, 161, 0.2)",
    backgroundColor: "white",
    padding: "40px 0px",
    marginTop: "40px",
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Flex style={boxStyle} justify="center" align="center">
        <Flex style={boxStyle2} justify="center" align="center" vertical>
          <Image src={websiteLogo} alt="PickBazar" width={130} />
          <div className={classes.heading}>Login to admin</div>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 50 }}
            style={{
              maxWidth: "100%",
              textAlign: "center",
              // backgroundColor: "lightgrey",
              padding: "0px 50px ",
            }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              style={{ textAlign: "start" }}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "You must need to provide your email address",
                },
              ]}
            >
              <Input style={{ width: "100%" }} size="large" />
            </Form.Item>
            <Flex justify="end">
              <Text type="primary">
                <Link
                  to={"/admin/forgot-password"}
                  style={{ align: "end", color: "rgb(56,148,118" }}
                >
                  Forgot Password?
                </Link>
              </Text>
            </Flex>
            <Form.Item
              label="Password"
              name="password"
              style={{ textAlign: "start" }}
              rules={[
                {
                  required: true,
                  message: "Password is Required!",
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                className={classes.loginButton}
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <Divider>or</Divider>
          <Text type="secondary">
            Don't have any account?
            <span>
              <Link to={"/admin/register"}>
                <strong style={{ color: "rgb(50,148,118)" }}>
                  {" "}
                  Register as an Admin
                </strong>
              </Link>
            </span>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}