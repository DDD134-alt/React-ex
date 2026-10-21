import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// 콤보박스를 만들고 만들고 선택된 값을 전달해 페이지 이동 하기

const Home = () => {
  const nav = useNavigate();
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (value) nav(`/profile/${value}`);
  };

  return (
    <div>
      <h1>여기가 홈 입니다.</h1>
      <Link to="/about">소개로 이동</Link>
      <br />
      <Link to="/profile">프로파일로 이동</Link>
      <br />

      <h3>콤보 박스 프로필 이동</h3>
      <select value={selected} onChange={handleChange}>
        <option value="">프로필 선택</option>
        <option value="frontend">프론트엔드</option>
        <option value="backend">백엔드</option>
        <option value="dba">데이터베이스</option>
      </select>
    </div>
  );
};
export default Home;
