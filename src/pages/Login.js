// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import styled from "styled-components";
// import Button from "../components/common/Button";
// import Input from "../components/common/Input";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 300px;
//   gap: 15px;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 500;
// `;

// // 로그인 입력 필드 정의
// const loginFields = [
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
// ];

// const Login = () => {
//   const navigate = useNavigate();

//   // 1. 입력값을 관리할 state 선언
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // 2. input 값이 바뀔 때 state를 업데이트하는 함수
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // 3. 로그인 버튼을 눌렀을 때 실행되는 함수
//   const handleLogin = (e) => {
//     e.preventDefault();

//     // 로컬 스토리지에 저장된 회원가입 정보 가져오기
//     const savedUser = localStorage.getItem("user");

//     if (!savedUser) {
//       alert("가입된 정보가 없습니다. 먼저 회원가입을 해주세요.");
//       return;
//     }

//     // 문자열로 저장되어 있으므로 객체로 변환 (JSON.parse)
//     const parsedUser = JSON.parse(savedUser);

//     // 입력한 이메일과 비밀번호가 저장된 정보와 일치하는지 확인
//     if (
//       parsedUser.email === form.email &&
//       parsedUser.password === form.password
//     ) {
//       alert("로그인 성공!");
//       localStorage.setItem("isLoggedIn", "true"); // 로그인 상태 저장
//       navigate("/home"); // 홈 화면으로 이동
//     } else {
//       alert("이메일 또는 비밀번호가 일치하지 않습니다.");
//     }
//   };

//   return (
//     <Container>
//       <Title>로그인</Title>
//       <Form onSubmit={handleLogin}>
//         {loginFields.map((field) => (
//           <Input
//             key={field.name}
//             label={field.label}
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={form[field.name]}
//             onChange={handleChange}
//           />
//         ))}
//         <Button type="submit">로그인하기</Button>
//       </Form>
//       <Link to="/signUp" style={{ marginTop: "15px" }}>
//         계정이 없으신가요? 가입하기
//       </Link>
//     </Container>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

// 화면 전체를 차지하고, 가운데에 로그인 박스를 배치
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
`;

// 실제 로그인 영역: 최대 너비 제한 + 요소 간 간격
const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h1`
  margin: 0 0 20px;
  text-align: center;
  font-size: 28px;
`;

const SignupText = styled.p`
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

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");

  const nav = useNavigate();

  // 둘 다 입력돼야 버튼 활성화
  const isValid = inputEmail.trim() !== "" && inputPwd !== "";

  // form의 onSubmit으로 처리하면 Enter 키로도 로그인 가능
  const onSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    const localEmail = localStorage.getItem("email");
    const localPwd = localStorage.getItem("pwd");

    if (inputEmail.trim() === localEmail && inputPwd === localPwd) {
      nav("/home", { replace: true }); // 뒤로가기로 로그인 화면에 다시 오지 않도록
    } else {
      alert("이메일 또는 비밀번호가 틀립니다.");
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>로그인</Title>
        <Input
          type="email"
          value={inputEmail}
          placeholder="이메일"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <Input
          type="password"
          value={inputPwd}
          placeholder="비밀번호"
          onChange={(e) => setInputPwd(e.target.value)}
        />
        <Button type="submit" enabled={isValid}>
          로그인
        </Button>
        <SignupText>
          계정이 없으신가요?
          <Link to="/signup">회원가입</Link>
        </SignupText>
      </Form>
    </Container>
  );
};

export default Login;
