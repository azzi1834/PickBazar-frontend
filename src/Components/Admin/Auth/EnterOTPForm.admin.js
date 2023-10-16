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
export default function EnterOTPFormAdmin() {
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

  const validateFourDigits = (_, value) => {
    if (!/^\d{4}$/.test(value)) {
      return Promise.reject("Please enter exactly four digits.");
    }
    return Promise.resolve();
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
              // backgroundColor: "lightgrey",
              padding: "0px 50px ",
            }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Put your token you got from email"
              name="otp"
              style={{ textAlign: "start" }}
              rules={[
                {
                  required: true,
                  message: "Token is Required!",
                },
                {
                  validator: validateFourDigits,
                },
              ]}
            >
              <Input style={{ width: "100%" }} size="large" maxLength={4} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                block
                className={classes.loginButton}
                size="large"
              >
                Submit OTP
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
}
