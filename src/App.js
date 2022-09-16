import "./App.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import React, { useState, useEffect } from 'react'
import Select_Journal from "./components/SelectJournal";


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() =>{
    const data = require('./components/CountryData.json')
    console.log(data)
    setCountries(data)

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="http://cdn.shopify.com/s/files/1/1607/4155/products/3D_Logo_Design_S1_blue_WM_1024x1024.png?v=1540625263" alt="image"/>
        <h1>Sign up</h1>
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
              },
              { whitespace: true },
            
            ]}
            hasFeedback
          >
            <Input placeholder="" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "",
              },
              { whitespace: true },
              
            ]}
            hasFeedback
          >
            <Input placeholder="" />
          </Form.Item>

          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
              },
              
              
            ]}
            hasFeedback
          >
            <select>
            <option value=''>Choose in the list</option>
            </select>
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[
                {
                  required: true,
                },
              {
              whitespace: true },
              
            ]}
            hasFeedback
          >
            <select>
            <option value=''>Choose in the list</option>
            {
              countries.map((item) => {
                return(
                  <option key={item.country}>
                    {item.country}
                  </option>
                )
              })
            }
            </select>
          </Form.Item>

          <Form.Item
            name="affiliation"
            label="Affiliation"
            rules={[
              {
                required: true,
              },
              { whitespace: true },
              
            ]}
            hasFeedback
          >
            <Input placeholder="" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
              { type: "email", message: "" },
            ]}
            hasFeedback
          >
            <Input placeholder="" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },

              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("password required"),
              },
              
            ]}
            hasFeedback
          >
            <Input.Password placeholder="" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Password mismatch"
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="" />
          </Form.Item>
                    

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>
              {" "}
              I have read and acknowledge the <a href="#">Privacy Policy</a>
            </Checkbox>
          </Form.Item>

          <Form.Item className="formCol" wrapperCol={{ span: 10 }} >
            <Button block type="primary" htmlType="submit">
              SIGN UP
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;