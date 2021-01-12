import React, {useState} from 'react';
import { Form, Input, Button, Alert } from 'antd';
import {Title} from "../components/Title";
import {Intro} from "../components/Intro";

export const Login = () => {
    const [isFormSubmit, setIsFormSubmit] = useState(false)
    const [isUserAuth, setIsUserAuth] = useState(false)
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        isRememberMe: false,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setUserData({
            ...userData,
            [name]: value,
        })

    };

    const handleSubmit = () => {
        setIsFormSubmit(true)
    };

    return (
        <Intro>
            <Title title={'Lets Login!'}/>
          <Form onSubmit={handleSubmit}>
              <Form.Item
                  label="Email"
                  type="email"
                  value={userData.email}
                  onChange
                  rules={[
                      {
                          required: true,
                          message: 'Please input your email!',
                      },
                  ]}>
                  <Input type="email" name="email" onChange={handleChange} value={userData.email}/>
              </Form.Item>
              <Form.Item
                  label="Password"
                  type="password"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your password!',
                      },
                  ]}>
                  <Input type="password" name="password"  onChange={handleChange} value={userData.password}/>
              </Form.Item>
              <Button type="primary" htmlType="submit">Sign in</Button>
          </Form>

            {isUserAuth
                ? <Alert message="Login is Success" type="success" />
                : (isFormSubmit ? <Alert message="Axes denied" type="error" /> : null)
            }
        </Intro>
    )
}