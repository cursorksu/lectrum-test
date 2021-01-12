import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const FormLayout = (children) => (
    <FormLayoutStyled>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        MY WONDER PAGE
                    </div>
                    <div className="col-11">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={'/login'}>Sign In</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/auth'}>Sign Up</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/cv'}>CV</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/auth'}>CV Preview</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <main className="main">
            <div className="container">
                {children}
            </div>
        </main>
        <footer>
            <div className="container text-center">
                The End!
            </div>
        </footer>
    </FormLayoutStyled>
)

const FormLayoutStyled = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`