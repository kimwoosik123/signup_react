import React from 'react';

export default function SignupComponet() {
    const onFocusInput = (e) => {
        const {value} = e.target;
        const labelFor = e.target.id;
        const labelTag = document.querySelector(`label[for=${labelFor}]`);
        
        labelTag.classList.add('active');
        
        e.target.addEventListener('blur', (e) => {
            if(e.target.value === ""){
                labelTag.classList.remove('active');
            }
        });
    };
  return (
    <form action="" id="signupForm">
        <ul className="signup__list">
            <li className="signup__item"><label htmlFor="userId">아이디</label><input id='userId' type="text" onFocus={onFocusInput} /></li>
            <li className="signup__item"><label htmlFor="userPw">비밀번호</label><input id='userPw' type="password" onFocus={onFocusInput} /></li>
            <li className="signup__item"><label htmlFor="userPwc">비밀번호 확인</label><input id='userPwc' type="password" onFocus={onFocusInput} /></li>
            <li className="signup__item"><label htmlFor="userEmail">이메일</label><input id='userEmail' type="email" onFocus={onFocusInput} /></li>
            <li className="signup__item"><label htmlFor="userHp">연락처</label><input id='userHp' type="text" onFocus={onFocusInput} /></li>
            <li className="signup__item"><label htmlFor="userAddr">주소</label><input id='userAddr' type="text" onFocus={onFocusInput} /></li>
        </ul>
        <div className="btn__box">
            <button className="submit__btn" type='submit'>회원가입</button>
            <button className="close__btn" type='button'>닫기</button>
        </div>
    </form>
  )
}
