import React from 'react';
import {NavLink} from "react-router-dom";
import {Row, Col} from "antd";
import {Title} from "../components/Title";
import {Footer, Header} from "antd/es/layout/layout";
import styled from "styled-components";

export const MainLayout = (props) => (
    <>
        <Header>
                <Row className="row">
                    <Col span={3}>
                        <Logo href="/" className="logo">MY WONDER PAGE</Logo>
                    </Col>
                    <Col span={12} className="col">
                            <NavStyled className="nav">
                                <li className="nav_item">
                                    <NavLink className="nav_link" to={'/'}>Sign In</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink  className="nav_link" to={'/auth'}>Sign Up</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink  className="nav_link" to={'/cv'}>CV</NavLink>
                                </li>
                                <li className="nav_item">
                                    <NavLink  className="nav_link"  to={'/auth'}>CV Preview</NavLink>
                                </li>
                            </NavStyled>
                    </Col>
                </Row>
        </Header>
        <main className="main">
            {props.children}
        </main>

        <Footer>
            <Title title="My wonder footer of page is here" />
        </Footer>
    </>

)

const Logo = styled.a `
  color: aquamarine;
  font-weight: 900;
  text-align: center;
  transition: color 0.3s ease;
  
  &:hover {
    color: aqua;
  }
`;
const NavStyled = styled.ul `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 8px;
    
 
  .nav_item {
    list-style-type: none;
  }
  .nav_link {
    display: block;
    font-weight: 900;
    color: #fff;
    padding: 10px 20px;
    background: rgba(127,255,212,0.7);    
    margin-left: 40px;
    border-radius: 5px;
    line-height: 26px;
    white-space: nowrap;
    transition: background-color 0.3s ease;
    
    &:hover {
      background: aqua;
    }
  }
`