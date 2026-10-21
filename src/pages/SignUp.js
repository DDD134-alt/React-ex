// import { useState } from "react";
// // useNavigate : navigate("/")처럼 페이지 이동 쓸때 사용하는 기능,
// // import Home from "./pages/Home"; 이거는 페이지 위에 다른 페이지를 깔아주는 기능
// // useNavigate이거는 주소창을 이동시키는 기능
// import { useNavigate } from "react-router-dom";
// // styled : 자바스크립트 파일 안에 CSS 파일을 따로 만들지 않고도 스타일을 작성할 수 있게 해주는 라이브러리
// import styled from "styled-components";
// // components/common/Button 여기에 만들어둔 스타일을 불러오기
// import Button from "../components/common/Button";
// import Input from "../components/common/Input";

// // styled. : 컴포넌트를 styled로 입혀서 CSS처럼 꾸미는거
// // styled. 다음에 오는 구문의 종류가 어떤게 있는지 궁금함.
// // `(백틱)으로 감싸는 이유는 줄바꿈을 쓰기 위해, 문자열 안에서 변수 또는 자바스크립트 효현식을 ${}형태로 넣기 위해
// // ${} : 변수 도는 조건무느 함수 등이 들어감
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 300px;
//   border: 1px solid white;
// `;

// const Title = styled.div`
//   font-size: 30px;
//   font-weight: 500;
// `;

// const FieldStyle = styled.div`
//   font-size: 100px;
//   font-weight: 500;
// `;

// // 화면에 반복해서 만들어야 하는 입력창(이메일, 비밀번호, 이름 등)의 정보들을 객체 형태의 배열로 미리 정리해 둔 것
// // 이게 없다면 나중에 return에서 input 값을 일일이 써서 넣어줘야 함
// const fields = [
//   {
//     label: "이메일",
//     type: "email",
//     name: "email",
//     placeholder: "example@email.com",
//   },
//   {
//     label: "비밀번호",
//     type: "password",
//     name: "password",
//     placeholder: "비밀번호",
//   },
//   {
//     label: "비밀번호 확인",
//     type: "password",
//     name: "passwordOk",
//     placeholder: "비밀번호 확인",
//   },
//   {
//     label: "이름",
//     type: "text",
//     name: "name",
//     placeholder: "이름",
//   },
//   {
//     label: "전화번호",
//     type: "tel",
//     name: "phone",
//     placeholder: "전화번호",
//   },
// ];

// // [form, setForm] : [입력창에 담긴 초기값, 업데이트 되는 함수]
// // email: "",... : 초기값이 빈 문자열임을 표현
// const SignUp = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     passwordOk: "",
//     name: "",
//     phone: "",
//   });

//   // handleChange 함수에 이밴트(e,값입력되기)가 발생하면 setForm에서 email(name)에 값(value)이 업데이트 되서 form으로 저장
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // email 등등을 기입하고 가입완료 버튼을 누를때 실행되는 컴포넌트
//   const handleSignUp = (e) => {
//     // form문은 입력값 서버로 제출하기(type="submit") 함수가 발동하면 웹페이지 전체를 초기화하는 기본 성질이 있다.
//     // 그런데 리엑트는 SPA(화면 하나로 돌려먹기) 성질을 가지고 있기 때문에,
//     // 입력값이 제출(type="submit")되기도 전에 새로 고침(초가화)이 되어
//     // 작성한 회원가입 데이터(form 상태)가 날아가버릴 수 있다.
//     // 이를 막기 위해 새고고침을 방지하는 e.preventDefault(); 문을 사용.
//     e.preventDefault();
//     // 앞서 받은 form에서 비밀번화와 확인 비밀번호를 비교하는 구문
//     if (form.password !== form.passwordOk) {
//       alert("비밀번호 불일치! 다시 입력하세요!");
//       return;
//     }
//     // localStorage(간단명료저장소)에 로그인 상태와 회원정보 저장
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("user", JSON.stringify(form));
//     alert("회원가입 완료!");
//     // 가입완료 함수 끝에 괄호 안 주소로 이동하기
//     navigate("/");
//   };

//   // 화면에 나오는 부분
//   return (
//     <Container>
//       <Title>가입하기</Title>
//       <Form onSubmit={handleSignUp}>
//         <FieldStyle>
//           {fields.map((field) => (
//             <Input
//               // 반복문(.map())을 사용할때 사용되는 고유번호
//               key={field.name}
//               // label : 입력창 제목/이름
//               label={field.label}
//               // type : 입력창의 속성(email 일시 골뱅이 검사, password면 입력한 글자 가리기 등 기능이 들어감)
//               type={field.type}
//               // 리액트 상대와 연결하기 위한 식별자 이름, form에 들어가는 게 바로 이거, form의 key라고 생각하면 될까 싶다
//               name={field.name}
//               // 압력창 빈 칸일때 깔리는 은은한 힌트글자
//               placeholder={field.placeholder}
//               // form에 들어간 값을 보여달란 뜻
//               value={form[field.name]}
//               // 실시간으로 handleChange 함수 발동시켜 업데이트 하기
//               onChange={handleChange}
//             />
//           ))}
//         </FieldStyle>
//         <Button type="submit">가입하기</Button>
//       </Form>
//     </Container>
//   );
// };

// export default SignUp;

import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

/* ───────── 정규식 ───────── */
// 이메일: 공백·@ 없는 문자 + @ + 도메인 + . + 2자 이상 최상위 도메인
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// 비밀번호: 8~20자, 영문 + 숫자 + 특수문자(!@#$%^&*) 각 1개 이상
const PWD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
// 이름: 한글 또는 영문 2~10자
const NAME_REGEX = /^[가-힣a-zA-Z]{2,10}$/;

/* ───────── 스타일 (Login과 동일한 레이아웃) ───────── */
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 28px;
`;

// 입력창 + 메시지를 한 묶음으로
const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

// 입력창 오른쪽 하단 메시지. 높이를 고정해 메시지가 생겨도 레이아웃이 흔들리지 않음
const Message = styled.p`
  margin: 4px 8px 0;
  min-height: 18px;
  text-align: right;
  font-size: 12px;
  color: ${({ $valid }) => ($valid ? "#2e9e4f" : "#e5484d")};
`;

const BottomText = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: #666;

  a {
    margin-left: 6px;
    color: orange;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Signup = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputPwdCheck, setInputPwdCheck] = useState("");
  const [inputName, setInputName] = useState("");

  const nav = useNavigate();

  /* 유효성은 state로 따로 두지 않고 렌더링 때 계산(파생값)
     → 비밀번호를 바꾸면 재확인 결과도 자동으로 다시 계산됨 */
  const isEmail = EMAIL_REGEX.test(inputEmail);
  const isPwd = PWD_REGEX.test(inputPwd);
  const isPwdCheck = inputPwdCheck !== "" && inputPwd === inputPwdCheck;
  const isName = NAME_REGEX.test(inputName);

  const isAllValid = isEmail && isPwd && isPwdCheck && isName;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isAllValid) return;

    localStorage.setItem("email", inputEmail);
    localStorage.setItem("pwd", inputPwd);
    localStorage.setItem("name", inputName);

    alert(`${inputName}님, 회원가입이 완료되었습니다.`);
    nav("/", { replace: true }); // 로그인 페이지 경로에 맞게 수정
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>회원가입</Title>

        <Field>
          <Input
            type="email"
            value={inputEmail}
            placeholder="이메일"
            onChange={(e) => setInputEmail(e.target.value.trim())}
          />
          <Message $valid={isEmail}>
            {inputEmail &&
              (isEmail
                ? "사용 가능한 이메일입니다."
                : "이메일 형식이 올바르지 않습니다.")}
          </Message>
        </Field>

        <Field>
          <Input
            type="password"
            value={inputPwd}
            placeholder="비밀번호"
            onChange={(e) => setInputPwd(e.target.value)}
          />
          <Message $valid={isPwd}>
            {inputPwd &&
              (isPwd
                ? "사용 가능한 비밀번호입니다."
                : "영문, 숫자, 특수문자 포함 8~20자로 입력하세요.")}
          </Message>
        </Field>

        <Field>
          <Input
            type="password"
            value={inputPwdCheck}
            placeholder="비밀번호 확인"
            onChange={(e) => setInputPwdCheck(e.target.value)}
          />
          <Message $valid={isPwdCheck}>
            {inputPwdCheck &&
              (isPwdCheck
                ? "비밀번호가 일치합니다."
                : "비밀번호가 일치하지 않습니다.")}
          </Message>
        </Field>

        <Field>
          <Input
            value={inputName}
            placeholder="이름"
            onChange={(e) => setInputName(e.target.value.trim())}
          />
          <Message $valid={isName}>
            {inputName &&
              (isName
                ? "사용 가능한 이름입니다."
                : "한글 또는 영문 2~10자로 입력하세요.")}
          </Message>
        </Field>

        <Button type="submit" enabled={isAllValid}>
          가입하기
        </Button>

        <BottomText>
          이미 계정이 있으신가요?
          <Link to="/">로그인</Link>
        </BottomText>
      </Form>
    </Container>
  );
};

export default Signup;
