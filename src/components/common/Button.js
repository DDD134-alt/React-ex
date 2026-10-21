// import styled from "styled-components";

// const Btn = styled.button`
//   display: flex;
//   width: 100px;
//   height: 50px;
//   border: 1px solid gray;
//   background: gray;
//   color: white;
//   &:hover {
//     background: transparent;
//     color: black;
//   }
//   & + button {
//     margin-left: 16px;
//   }
// `;

// const Button = () => {
//   return <Btn></Btn>;
// };

// export default Button;

import styled, { css } from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background-color: #999;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 18px;
  cursor: not-allowed;

  /* $ 접두사(transient prop): 스타일에만 쓰이고 DOM으로 전달되지 않음 */
  ${({ $enabled }) =>
    $enabled &&
    css`
      background-color: orange;
      cursor: pointer;

      &:active {
        background-color: #e69500;
      }
    `}
`;

const Button = ({ enabled, onClick, children, type = "button" }) => {
  return (
    <StyledBtn
      type={type}
      $enabled={enabled}
      disabled={!enabled}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;
