import React from 'react'
import { Outlet } from 'react-router-dom';
import SignModalComponent from './user/SignModalComponent';

export default function HeaderComponent() {
  const [isModal, setIsModal] = React.useState(false);
  
  const onClickSignup = (e) => {
    if(isModal === false){
      setIsModal(true);
    }
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="content__left">
                <hr />
                <hr />
                <hr />
              </div>
              <div className="content__right">
                <div className="btn__box">
                  <button className="signin__btn" type='button'>로그인</button>
                  <button className="signup__btn" type='button' onClick={onClickSignup}>회원가입</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          isModal ? <SignModalComponent setIsModal={setIsModal} /> : null
        }
      </header>
      <Outlet />
    </>
  )
}
