import React from "react";
import * as S from "./styles";

const Header = (props) => {
  return (
    <>
      <S.Nav>
        <S.NavLogo to="/">
          <img src="logo.jpeg" height="90px" width="auto" alt="logo" />
        </S.NavLogo>
        <S.NavMenu>
          {localStorage.getItem("userId") === undefined ||
          localStorage.getItem("userId") === null ? (
            <>
              <S.NavLink
                onClick={() => props.setShowLoginAndSignUpModal(true)}
                to="/"
              >
                Login
              </S.NavLink>
              <S.NavBtn>
                <S.NavBtnLink
                  onClick={() => props.setShowLoginAndSignUpModal(true)}
                  to="/"
                >
                  Sign Up
                </S.NavBtnLink>
              </S.NavBtn>
            </>
          ) : (
            <>
              <S.NavLink to="/">
                Welcome, {localStorage.getItem("userEmail")}
              </S.NavLink>
              <S.NavLink to="/courses">My Courses</S.NavLink>
              <S.NavBtn>
                <S.NavBtnLink onClick={() => localStorage.clear()} to="/">
                  Logout
                </S.NavBtnLink>
              </S.NavBtn>
            </>
          )}
        </S.NavMenu>
      </S.Nav>
    </>
  );
};
export default Header;
