import { Link, useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "곰돌곰돌",
    description: "리엑트의 사랑을 독차지하는 개발자",
  },
  backend: {
    name: "달빛조각사",
    description: "스프링 부트의 사랑을 쟁취하는 개발자",
  },
  dba: {
    name: "눈물을머금은새",
    description: "데이터베이스의 사랑을 갈취하는 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.name];
  return (
    <div>
      <h1>프로파일 입니다.</h1>
      <p>프로파일 입니다.</p>

      <h2>사용자 프로필</h2>
      {profile ? (
        <>
          <h3>{profile.name}</h3>
          <h4>{profile.description}</h4>
        </>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}

      <Link to="/profile">프로파일로~</Link>
      <br />
      <Link to="/home">홈으로~</Link>
      <br />
      <Link to="/about">어바웃으로~</Link>
    </div>
  );
};
export default Profile;
