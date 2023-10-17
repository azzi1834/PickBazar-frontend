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
import classes from "./Auth.module.css";
import websiteLogo from "./../../../Images/PickBazar.webp";
export default function ForgotPasswordCustomer() {
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
    <div>
      <Flex style={boxStyle} justify="center" align="center">
        <Flex style={boxStyle2} justify="center" align="center" vertical>
          <Image src={websiteLogo} alt="PickBazar" width={130} />
          <div className={classes.heading}>Forgot Password</div>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 50 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ remember: true }}
            autoComplete="off"
            style={{
              maxWidth: "100%",
              textAlign: "center",
              // backgroundColor: "lightgrey",
              padding: "0px 50px ",
            }}
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

            <Form.Item>
              <Button
                type="submit"
                htmlType="submit"
                block
                className={classes.loginButton}
                size="large"
              >
                Submit Email
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
}
