import React, { useState } from "react";

import StripeIcon from "./PaymentIcons/Stripe.svg";
import PaypalIcon from "./PaymentIcons/Paypal.svg";

import {
  Divider,
  Typography,
  Row,
  Col,
  Card,
  Image,
  message,
  Upload,
  Button,
  Form,
  Input,
  InputNumber,
  Switch,
  Select,
  Checkbox,
  Flex,
  Table,
} from "antd";

import { CloudUploadOutlined, FileTextTwoTone } from "@ant-design/icons";

import Logo from "./../../Images/PickBazar.webp";

export default function SettingsAdmin() {
  const { Title, Text } = Typography;
  const [uploadedImage, setUploadedImage] = useState(Logo);
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [copied, setCopied] = useState(false);

  const { Meta } = Card;

  const paymentOptions = [
    { name: "Credit Card" },
    { name: "PayPal" },
    { name: "Bank Transfer" },
  ];

  const dataSource = [
    {
      key: "1",
      bankName: <Image src={StripeIcon} width={40} />,
      webhookUrl: "https://mock.redq.io/api//webhooks/stripe",
      popup:
        copied === true ? (
          <div
            style={{
              width: "fit-content",
              backgroundColor: "rgb(56,148,118)",
              color: "white",
              padding: "2px 10px",
              borderRadius: "20px",
            }}
          >
            Copied!
          </div>
        ) : (
          ""
        ),
      copyIcon: (
        <FileTextTwoTone
          onClick={() => {
            navigator.clipboard.writeText("copu");
          }}
          style={{ cursor: "pointer", fontSize: "20px" }}
          twoToneColor="rgb(56,148,118)"
        />
      ),
    },
    {
      key: "2",
      bankName: <Image src={PaypalIcon} width={50} />,
      webhookUrl: "https://mock.redq.io/api//webhooks/paypal",
      popup:
        copied === true ? (
          <div
            style={{
              width: "fit-content",
              backgroundColor: "rgb(56,148,118)",
              color: "white",
              padding: "2px 10px",
              borderRadius: "20px",
            }}
          >
            Copied!
          </div>
        ) : (
          ""
        ),

      copyIcon: (
        <FileTextTwoTone
          style={{ cursor: "pointer", fontSize: "20px" }}
          twoToneColor="rgb(56,148,118)"
        />
      ),
    },
  ];

  const columns = [
    { dataIndex: "bankName", key: "bankName", title: "bankName" },
    { dataIndex: "webhookUrl", key: "webhookUrl", title: "webhookUrl" },
    { dataIndex: "popup", key: "popup", title: "popup" },
    {
      dataIndex: "copyIcon",
      key: "copyIcon",
      title: "Copy",
      render: (_, record) => (
        <FileTextTwoTone
          onClick={() => {
            const webhookUrl = record.webhookUrl;
            navigator.clipboard.writeText(webhookUrl).then(function () {
              setCopied(true);
            });
          }}
          style={{ cursor: "pointer", fontSize: "20px" }}
          twoToneColor="rgb(56,148,118)"
        />
      ),
    },
  ];
  const handleCheckboxChange = (option) => {
    const updatedSelection = [...selectedOptions];
    if (updatedSelection.includes(option)) {
      updatedSelection.splice(updatedSelection.indexOf(option), 1);
    } else {
      updatedSelection.push(option);
    }
    setSelectedOptions(updatedSelection);
  };

  const { Option } = Select;

  const checkFile = (file) => {
    const isJPGorPNG = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJPGorPNG) {
      message.error("You can only upload JPG/PNG file!");
    }

    const is2MBorSmaller = file.size / 1024 / 1024 <= 2;
    if (!is2MBorSmaller) {
      message.error("Image must be smaller than 2MB!");
    }
    if (isJPGorPNG && is2MBorSmaller) {
      setUploadedImage(URL.createObjectURL(file));
    }

    return isJPGorPNG && is2MBorSmaller;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      setUploadedImage(info.file.response.url);
    }
  };

  return (
    <>
      <div style={{ margin: "30px 50px" }}>
        <Title level={4} style={{ marginTop: "60px" }}>
          Settings
        </Title>
        <Divider dashed />
        <Row>
          <Col flex="1 1 100px">
            <Title level={5}>Logo</Title>
            <p>
              Upload your site logo from here. Dimension of the logo should be
              128x40 Pixel Image size should not be more than 2 MB
            </p>
          </Col>
          <Col flex="1 1 500px">
            {" "}
            <Card
              style={{
                width: "100%",
                marginTop: 30,
              }}
            >
              <div>
                <Form.Item>
                  <Form.Item
                    name="dragger"
                    // valuePropName="fileList"
                    // getValueFromEvent={normFile}
                    beforeUpload={checkFile}
                    onChange={handleChange}
                    noStyle
                  >
                    <Upload.Dragger name="files" action="/upload.do">
                      <p className="ant-upload-drag-icon">
                        <CloudUploadOutlined style={{ fontSize: "40px" }} />
                      </p>
                      <p className="ant-upload-text">
                        Upload an image or drag and drop
                      </p>
                      <p className="ant-upload-hint">JPG,PNG</p>
                    </Upload.Dragger>

                    {uploadedImage && (
                      <Image
                        src={uploadedImage}
                        width={130}
                        alt="avatar"
                        style={{ marginTop: "20px" }}
                      />
                    )}
                  </Form.Item>
                </Form.Item>
              </div>
            </Card>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col flex="1 1 100px">
            <Title level={5}>Information</Title>
            <p>Change your site information from here</p>
          </Col>
          <Col flex="1 1 500px">
            {" "}
            <Card
              style={{
                width: "100%",
                marginTop: 30,
              }}
            >
              <div>
                <Form
                  labelCol={{ span: 8 }}
                  //   wrapperCol={{ span: 16 }}
                  layout="vertical"
                >
                  <Form.Item
                    label={<strong>Site Title</strong>}
                    name="title"
                    style={{ width: "100%" }}
                    rules={[{}]}
                  >
                    <Input size="large" placeholder="Enter Site title" />
                  </Form.Item>

                  <Form.Item
                    label={<strong>Site subtitle</strong>}
                    name="subtitle"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        message: "Please enter a Site subtitle",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Enter Site subtitle" />
                  </Form.Item>

                  <Form.Item
                    label={<strong>Minimum Order Amount</strong>}
                    name="minimumOrderAmount"
                    style={{ width: "100%" }}
                    rules={[{}]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label={<strong>Wallet Currency Ratio</strong>}
                    name="currencyRatio"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label={<strong>Sign Up Points</strong>}
                    name="signupPoints"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label={<strong>Maximum Questions Limit</strong>}
                    name="questionsLimit"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label="Use OTP at Checkout"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    label="Enable Must Verify Email"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Enable AI" valuePropName="checked">
                    <Switch />
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Select AI</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">openai</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Tax Class</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Global</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Shipping Class</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Gloabal</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Enable Guest Checkout"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item
                    label="Enable Free Shipping"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col flex="1 1 100px">
            <Title level={5}>Information</Title>
            <p>Change your site information from here</p>
          </Col>
          <Col flex="1 1 500px">
            {" "}
            <Card
              style={{
                width: "100%",
                marginTop: 30,
              }}
            >
              <div>
                <Form
                  labelCol={{ span: 8 }}
                  //   wrapperCol={{ span: 16 }}
                  layout="vertical"
                >
                  <Form.Item
                    label="Enable Cash on Delivery"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Currency</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Pakistani Ruppee</Option>
                      <Option value="option2">US Dollar</Option>
                      <Option value="option3">Canadian Dollar</Option>
                      <Option value="option4">Euro</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Enable Gateway" valuePropName="checked">
                    <Switch style={{ display: "inline-block" }} />
                  </Form.Item>
                  <Form.Item>
                    <Flex wrap="wrap" gap={"small"}>
                      {paymentOptions.map((option, index) => (
                        <div style={{ marginBottom: "16px" }}>
                          <Card
                            key={index}
                            hoverable
                            style={{
                              // width: "25%",
                              textAlign: "center",
                              border: selectedOptions.includes(option)
                                ? "2px solid #1890ff"
                                : "2px solid #d9d9d9",
                            }}
                            onClick={() => handleCheckboxChange(option)}
                          >
                            <Meta title={option.name} />
                            <Checkbox
                              onChange={() => handleCheckboxChange(option)}
                              checked={selectedOptions.includes(option)}
                            >
                              {selectedOptions.includes(option)
                                ? "Selected"
                                : "Select"}
                            </Checkbox>
                          </Card>
                        </div>
                      ))}
                    </Flex>
                  </Form.Item>
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Set default payment gateway</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Stripe</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Enable Stripe Element"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Form.Item>
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      showHeader={false}
                      pagination={false}
                    />
                  </Form.Item>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col flex="1 1 90px">
            <Title level={5}>Currency Options</Title>
            <p>
              The following options effect how prices are displayed on the
              frontend
            </p>
          </Col>
          <Col flex="1 1 500px">
            {" "}
            <Card
              style={{
                width: "100%",
                marginTop: 30,
              }}
            >
              <div>
                <Form
                  labelCol={{ span: 8 }}
                  //   wrapperCol={{ span: 16 }}
                  layout="vertical"
                >
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Select Currency Formation *</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">US Dollars</Option>
                      <Option value="option2">Pakistani Rupees</Option>
                      <Option value="option3">Canadian Dollar</Option>
                      <Option value="option4">Euro</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label={<strong>Number of Factional Digit *</strong>}
                    name="questionsLimit"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>
                  <p>
                    <strong>Sample Output:</strong>
                    <span
                      style={{
                        width: "fit-content",
                        padding: "2px 10px",
                        backgroundColor: "rgb(56,148,118)",
                        color: "white",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      $232323.23
                    </span>
                  </p>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col flex="1 1 90px">
            <Title level={5}>SEO</Title>
            <p>Change your site SEO from here</p>
          </Col>
          <Col flex="1 1 500px">
            {" "}
            <Card
              style={{
                width: "100%",
                marginTop: 30,
              }}
            >
              <div>
                <Form
                  labelCol={{ span: 8 }}
                  //   wrapperCol={{ span: 16 }}
                  layout="vertical"
                >
                  <Form.Item>
                    <label htmlFor="dropdown">
                      <strong>Meta Title</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "100%", marginTop: "8px" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">US Dollars</Option>
                      <Option value="option2">Pakistani Rupees</Option>
                      <Option value="option3">Canadian Dollar</Option>
                      <Option value="option4">Euro</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label={<strong>Number of Factional Digit *</strong>}
                    name="questionsLimit"
                    style={{ width: "100%" }}
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <InputNumber size="large" style={{ width: "100%" }} />
                  </Form.Item>
                  <p>
                    <strong>Sample Output:</strong>
                    <span
                      style={{
                        width: "fit-content",
                        padding: "2px 10px",
                        backgroundColor: "rgb(56,148,118)",
                        color: "white",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      $232323.23
                    </span>
                  </p>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
