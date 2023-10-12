import React from 'react';
import SignupComponet from './SignupComponet';
import SigninComponent from './SigninComponent';

export default function SignModalComponent({setIsModal}) {
    const [signSortNum, setSignSortNum] = React.useState(0);
    
    const onClickSignSort = (e) => {
        if(e.target.innerText === "회원가입"){
            setSignSortNum(1);
        }
        else{
            setSignSortNum(0);
        }
    };
  return (
    <div id="sign">
        <div className="sign__container">
            <div className="sign__gap">
                <div className="sign__title">
                    <ul className="category__list">
                        <li className="category__item">
                            <button type='button' name='signinCategory' className={signSortNum === 0 ? 'active' : null} onClick={onClickSignSort}>로그인</button>
                        </li>
                        <li className="category__item">
                            <button type='button' name='signupCategory' className={signSortNum === 1 ? 'active' : null} onClick={onClickSignSort}>회원가입</button>
                        </li>
                    </ul>
                </div>
                <div className="sign__content">
                    {
                        signSortNum === 0 ? <SigninComponent /> : <SignupComponet />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
