// import styled from "styled-components";

// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: auto;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid white;
//   background: white;
// `;

// const Label = styled.label`
//   font-size: 15px;
// `;

// const StyledInput = styled.input`
//   display: flex;
//   margin: 2px;
//   padding: 5px;
//   width: 200px;
//   height: 20px;
// `;

// const ErrorText = styled.div`
//   font-size: 15px;
//   color: red;
// `;

// const Input = ({ label, error, ...rest }) => {
//   return (
//     <Wrapper>
//       {/* 라벨이 존재할 때만 화면에 보여줌 */}
//       {label && <Label>{label}</Label>}

//       {/* 나머지 속성(type, name, value, onChange 등)을 input에 그대로 전달 */}
//       <StyledInput {...rest} />

//       {/* 에러 메시지가 존재할 때만 빨간 글씨로 보여줌 */}
//       {error && <ErrorText>{error}</ErrorText>}
//     </Wrapper>
//   );
// };

// export default Input;

import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box; /* padding/border를 width 안에 포함 → 넘침 방지 */
  padding: 1em;
  font-size: 15px;
  border: 1px solid #999;
  border-radius: 18px;
  outline: none;

  &:focus {
    border-color: orange;
  }
`;

// type을 props로 받아야 비밀번호 칸을 type="password"로 쓸 수 있음
const Input = ({ type = "text", value, onChange, placeholder }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
