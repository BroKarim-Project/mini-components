import React, { useState } from 'react';

export default function LoginTwo() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPasswordHovered, setIsPasswordHovered] = useState(false);

  const handleEmailInputChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <>
      <div className="login">
        
        <form action="" className="login__form">
          <h1 className="login__title">Login-2</h1>

          {/* field box */}
          <div className="login__content">
            <div className="login__box ">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login__box-input">
                <input
                  type="email"
                  required
                  className="login__input"
                  id="login-email"
                  placeholder=" "
                  value={emailValue}
                  onChange={handleEmailInputChange}
                  onMouseEnter={() => setIsEmailHovered(true)}
                  onMouseLeave={() => setIsEmailHovered(false)}
                />
                <label for="login-email" className="login__label">
                  Email
                </label>
              </div>
              <span className={isEmailHovered && emailValue.trim() !== '' ? 'underline animated' : 'underline'}></span>
            </div>

            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>

              <div className="login__box-input">
                <input
                  type="password"
                  required
                  className="login__input  "
                  id="login-pass"
                  placeholder=" "
                  value={passwordValue}
                  onChange={handlePasswordInputChange}
                  onMouseEnter={() => setIsPasswordHovered(true)}
                  onMouseLeave={() => setIsPasswordHovered(false)}
                />
                <label for="login-pass" className="login__label">
                  Password
                </label>
                <i className="ri-eye-off-line login__eye" id="login-eye"></i>
              </div>
              <span className={isPasswordHovered && passwordValue.trim() !== '' ? 'underline animated' : 'underline'}></span>
            </div>
          </div>

          {/* check box and help pas */}
          <div className="login__check">
            <div className="login__check-group">
              <input type="checkbox" className="login__check-input" id="login-check" />
              <label for="login-check" className="login__check-label">
                Remember me
              </label>
            </div>

            <a href="#" className="login__forgot">
              Forgot Password?
            </a>
          </div>

          {/* submit button */}
          <button type="submit" className="login__button text-black">
            Login
          </button>

          <p className="login__register">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>

        <style>
          {`

                  * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                  }
                  
                  body,
                  input,
                  button {
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif;
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
                  

                  .login__box:focus {
                    border-color: #08AEEA;
                    outline: none;
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
                  .login__form {
                    position: relative;
                    background-color: hsla(0, 0%, 10%, 0.9);
                    border: 2px solid hsl(0, 0%, 100%);
                    margin-inline: 1.5rem;
                    padding: 2.5rem 1.5rem;
                    border-radius: 1rem;
                    backdrop-filter: blur(8px);
                  }
                  .login__title {
                    text-align: center;
                    font-size: 1.75rem;
                    font-weight: 500);
                    margin-bottom: 2rem;
                  }
                  .login__content, .login__box {
                    display: grid;
                  }
                  .login__content {
                    row-gap: 1.75rem;
                    margin-bottom: 1.5rem;
                  }
                  .login__box {
                    grid-template-columns: max-content 1fr;
                    align-items: center;
                    column-gap: 0.75rem;
                    background-color: transparent;
                    transition: border-color 0.3s ease-in-out;
                    position: relative;
                  }
                  .login__icon, .login__eye {
                    font-size: 1.25rem;
                  }
                  .login__input {
                    width: 100%;
                    padding: 10px 0;
                    background: none;
                    border: none;
                    // border-bottom: 2px solid #ccc;
                    color: #ffff;
                    position: relative;
                    background-color: transparent;
                    transition: border-color 0.3s ease-in-out;
                  }
                  .login__box-input {
                    position: relative;
                  }

                  .underline {
                    position: absolute;
                    bottom: 0;
                    --height-of-loader: 2px;
                    width: 100%;
                    height: var(--height-of-loader);
                    --loader-color: #08AEEA;
                    background-color: #ffff;  
                    z-index: 0;
                  }

                   .animated {
                    content: "";
                    --height-of-loader: 2px;
                    bottom:0;
                    position: absolute;
                    background: var(--loader-color);         
                    left: 0;
                    width: 0%;
                    border-radius: 30px;
                    animation: moving 1s ease-in-out infinite;  
                    z-index: 1;
                  }


                  @keyframes moving {
                    50% {
                      width: 100%;
                    }
                  
                    100% {
                      width: 0;
                      right: 0;
                      left: unset;
                    }
                  }

                  /* Input focus move up label */
                  .login__input:focus + .login__label {
                    top: -12px;
                    font-size: .813rem;
    
                  }
                  .login__input:focus {
                    border-color: #08AEEA;
                    outline: none;
                  }

                  
                  /* Input focus sticky top label */
                  .login__input:not(:placeholder-shown).login__input:not(:focus) + .login__label {
                    top: -12px;
                    font-size: .813rem;
                  }

                  
                  .login__label {
                    position: absolute;
                    left: 0;
                    top: 13px;
                    font-weight: 500);
                    transition: top 0.3s, font-size 0.3s;
                  }
                  .login__eye {
                    position: absolute;
                    right: 0;
                    top: 18px;
                    z-index: 10;
                    cursor: pointer;
                  }
                  .login__box:nth-child(2) input {
                    padding-right: 1.8rem;
                  }
                  .login__check, .login__check-group {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  }
                  .login__check {
                    margin-bottom: 1.5rem;
                  }
                  .login__check-label, .login__forgot, .login__register {
                    font-size: .813rem;
                  }
                  .login__check-group {
                    column-gap: 0.5rem;
                  }
                  .login__check-input {
                    width: 16px;
                    height: 16px;
                  }
                  .login__forgot {
                    color: hsl(0, 0%, 100%);
                  }
                  .login__forgot:hover {
                    text-decoration: underline;
                  }
                  .login__button {
                    width: 100%;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    background-color: hsl(0, 0%, 100%);
                    font-weight: 500);
                    cursor: pointer;
                    margin-bottom: 2rem;
                  }
                  .login__register {
                    text-align: center;
                  }
                  .login__register a {
                    color: hsl(0, 0%, 100%);
                    font-weight: 500);
                  }
                  .login__register a:hover {
                    text-decoration: underline;
                  }
                  
                  /*=============== BREAKPOINTS ===============*/
                  /* For medium devices */
                  @media screen and (min-width: 576px) {
                    .login {
                      justify-content: center;
                    }
                    .login__form {
                      width: 432px;
                      padding: 4rem 3rem 3.5rem;
                      border-radius: 1.5rem;
                    }
                    .login__title {
                      font-size: 2rem;
                    }
                  }
                
                `}
        </style>
      </div>
    </>
  );
}
