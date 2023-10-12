export default function HomeComponent() {

  // const userPwInput = document.querySelector('#userPw'); // vanilla js 230911_bhg
  const userPwInput = React.useRef(); // react js 230911_bhg
  // 비밀번호 보임/숨김 토글 이벤트 230911_bhg
  const onClickTogglePw = (e) => {
    e.target.classList.toggle('active');
    userPwInput.current.type = (userPwInput.current.type === "password" ? "text" : "password");
    console.log(userPwInput.current);
    // userPwInput.classList.toggle('active'); // vanilla js 230911_bhg
    // userPwInput.type = userPwInput.type === "password" ? "text" : "password"; // vanilla js 230911_bhg
  };

  // input - label 포커스 이벤트 230912_bhg
  const onFocusInput = (e) => {
    const labelHtml = e.target.id;
    const label = document.querySelector(`label[for=${labelHtml}]`); // vanilla js 230912_bhg
    label.classList.add('active');
    e.target.addEventListener('blur', (e) => {
      if (e.target.value === '') {
        label.classList.remove('active');
      }
    });
  };

  return (
    <div id="signup">
      <div className="container">
        <div className="title">
          <h1>Singup</h1>
        </div>
        <div className="contents">
          <form action="#" id="signupForm" method='get'>
            <ul className="singup__list">
              <li className="singup__item">
                <label htmlFor="singup__id">아이디</label>
                <input type="text" id="singup__id" name="singup__id" onFocus={onFocusInput} required autoComplete='off' />
                <button type='button' className='signup__btn btn' >중복확인</button>
              </li>
              <li className="singup__item">
                <label htmlFor="input__pw">비밀번호</label>
                <input type="password" id="input__pw" name="input__pw" ref={userPwInput} onFocus={onFocusInput} required autoComplete='off' />
                <button type='button' className='toggle__btn btn' onClick={onClickTogglePw}></button>
              </li>
              <li className="singup__item">
                <label htmlFor="input__pwc">비밀번호 확인</label>
                <input type="password" id="input__pwc" name="input__pwc" onFocus={onFocusInput} required autoComplete='off' />
                <button type='button' className='toggle__btn btn' onClick={onClickTogglePw} ></button>
              </li>
              <li className="singup__item">
                <label htmlFor="address">주소를 입력해주세요</label>
                <input type="text" id="address" name="address" onFocus={onFocusInput} required autoComplete='off' />
                <button type='button' className='signup__btn btn'>주소찾기</button>
              </li>
              <li className="singup__item">
                <label htmlFor="dt__address">상세주소</label>
                <input type="text" id="dt__address" name="dt__address" onFocus={onFocusInput} required autoComplete='off' />
              </li>
              <li className="singup__item">
                <label htmlFor="postal__code">우편번호</label>
                <input type="text" id="postal__code" name="postal__code" onFocus={onFocusInput} required autoComplete='off' />
              </li>
              <li className="singup__item">
                <label htmlFor="email__id">이메일</label>
                <input type="email" id="email__id" name="email__id" />
              </li>
              <li className="singup__item">
                <label htmlFor="hp__code">핸드폰를 입력해주세요</label>
                <input type="text" id="hp__code" name="hp__code" />
              </li>
            </ul>
            <div className="box__bottom">
              <button className='signup__btn btn' type='submit'>회원가입</button>
              <button className='signup__btn btn' type='button'>취소</button>
            </div>
          </form>
        </div >
      </div >
    </div >
  )
}
