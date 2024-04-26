import React, { useState } from 'react';

export default function LoginOne() {
  return (
    <>
      <div className="login">

        <form action="" className="login_form">
          <h1 className="login_title">Login</h1>
          <div className="login_content">
            <div className="login_box ">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login_box-input">
                <input type="email" required className="login_input " id="login-email" placeholder=" " />
                <label for="login-email" className="login_label">
                  Email
                </label>
              </div>
            </div>

            <div className="login_box">
              <i className="ri-lock-2-line login__icon"></i>

              <div className="login_box-input">
                <input type="password" required className="login_input " id="login-pass" placeholder=" " />
                <label for="login-pass" className="login_label">
                  Password
                </label>
                <i className="ri-eye-off-line login__eye" id="login-eye"></i>
              </div>
            </div>
          </div>

          <div className="login_check">
            <div className="login_check-group">
              <input type="checkbox" className="login_check-input" id="login-check" />
              <label for="login-check" className="login_check-label">
                Remember me
              </label>
            </div>

            <a href="#" className="login_forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login__button text-black">
            Login
          </button>

          <p className="login_register">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>

        <style>
          {`
                  /*=============== BASE ===============*/
                  * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                  }
                  
                  body,
                  input,
                  button {
                    font-size: 1rem);
                    font-family:  "Poppins", sans-serif;
                  }
                  
                  body {
                    color: hsl(0, 0%, 100%);
                  }
                  
                  input,
                  button {
                    border: none;
                    outline: none;
                  }
                  
                  
                  img {
                    max-width: 100%;
                    height: auto;
                  }
                  
                  /*=============== LOGIN ===============*/
                  

                  .login_box:focus {
                    border-color: #08AEEA;
                    outline: none;
                  }
                  
                  .login_box:focus + .underline {
                    transform: scaleX(1);
                  }

                  .login {
                    position: relative;
                    height: 100vh;
                    display: grid;
                    align-items: center;
                  }
                  .login__img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                  }
                  .login_form {
                    position: relative;
                    background-color: hsla(0, 0%, 10%, 0.9);
                    border: 2px solid hsl(0, 0%, 100%);
                    margin-inline: 1.5rem;
                    padding: 2.5rem 1.5rem;
                    border-radius: 1rem;
                    backdrop-filter: blur(8px);
                  }
                  .login_title {
                    text-align: center;
                    font-size: 1.75rem;
                    font-weight: 500;
                    margin-bottom: 2rem;
                  }
                  .login_content, .login_box {
                    display: grid;
                  }
                  .login_content {
                    row-gap: 1.75rem;
                    margin-bottom: 1.5rem;
                  }
                  .login_box {
                    grid-template-columns: max-content 1fr;
                    align-items: center;
                    column-gap: 0.75rem;
                    background-color: transparent;
                    transition: border-color 0.3s ease-in-out;
                  }
                  .login__icon, .login__eye {
                    font-size: 1.25rem;
                  }
                  .login_input {
                    width: 100%;
                    padding: 10px 0;
                    background: none;
                    border: none;
                    border-bottom: 2px solid #ccc;
                    color: #ffff;
                    position: relative;
                    background-color: transparent;
                    transition: border-color 0.3s ease-in-out;
                  }
                  .underline {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #08AEEA;
                    transform: scaleX(0);
                    transition: transform 0.3s ease-in-out;
                  }

                  .login_box-input {
                    position: relative;
                  }
                  .login_label {
                    position: absolute;
                    left: 0;
                    top: 13px;
                    font-weight: 500;
                    transition: top 0.3s, font-size 0.3s;
                  }
                  .login__eye {
                    position: absolute;
                    right: 0;
                    top: 18px;
                    z-index: 10;
                    cursor: pointer;
                  }
                  .login_box:nth-child(2) input {
                    padding-right: 1.8rem;
                  }
                  .login_check, .login_check-group {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .login_check {
                    margin-bottom: 1.5rem;
                  }
                  .login_check-label, .login_forgot, .login_register {
                    font-size: .813rem;
                  }
                  .login_check-group {
                    column-gap: 0.5rem;
                  }
                  .login_check-input {
                    width: 16px;
                    height: 16px;
                  }
                  .login_forgot {
                    color: hsl(0, 0%, 100%);
                  }
                  .login_forgot:hover {
                    text-decoration: underline;
                  }
                  .login__button {
                    width: 100%;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    background-color: hsl(0, 0%, 100%);
                    font-weight: 500;
                    cursor: pointer;
                    margin-bottom: 2rem;
                  }
                  .login_register {
                    text-align: center;
                  }
                  .login_register a {
                    color: hsl(0, 0%, 100%);
                    font-weight: 500;
                  }
                  .login_register a:hover {
                    text-decoration: underline;
                  }
                  
                  /* Input focus move up label */
                  .login_input:focus + .login_label {
                    top: -12px;
                    font-size: .813rem;
    
                  }
                  .login_input:focus {
                    border-color: #08AEEA;
                    outline: none;
                  }

                  login_input:focus + .underline{
                    transform: scaleX(1);
                  }
                  
                  /* Input focus sticky top label */
                  .login_input:not(:placeholder-shown).login_input:not(:focus) + .login_label {
                    top: -12px;
                    font-size: .813rem;
                  }

                  


                  /*=============== BREAKPOINTS ===============*/
                  /* For medium devices */
                  @media screen and (min-width: 576px) {
                    .login {
                      justify-content: center;
                    }
                    .login_form {
                      width: 432px;
                      padding: 4rem 3rem 3.5rem;
                      border-radius: 1.5rem;
                    }
                    .login_title {
                      font-size: 2rem;
                    }
                  }
                
                `}
        </style>
      </div>
    </>
  );
}


