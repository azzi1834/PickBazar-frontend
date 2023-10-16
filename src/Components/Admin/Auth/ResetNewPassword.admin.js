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
export default function ResetNewPasswordAdmin() {
  const { Text, Title } = Typography;

  const boxStyle = {
    width: "100%",
  };

  const boxStyle2 = {
    borderRadius: 6,
    border: "1px solid rgb(151, 161, 161, 0.2)",
    backgroundColor: "white",
    padding: "40px 0px",
    marginTop: "130px",
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
            labelCol={{ span: 40 }}
            wrapperCol={{ span: 50 }}
            style={{
              maxWidth: "100%",
              textAlign: "center",
              padding: "0px 20px ",
            }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
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
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
}
