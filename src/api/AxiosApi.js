import axios from "axios"; // 비동기 톤신 라이브러리
const HM_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // auth controller
  // 회원가입여부확인(GET)
  memberExist: async (email) => {
    return await axios.get(HM_DOMAIN + `/auth/exist/${email}`);
  },
  // 회원가입(POST)
  memberSignup: async (email, pwd, name) => {
    return await axios.post(HM_DOMAIN + "/auth/signup", { email, pwd, name });
  }, // "/auth/signup", {email, pwd, name} email, pwd, name은 생략 가능하단 뜻
  // 로그인(POST)
  memberLogin: async (email, pwd) => {
    return await axios.post(HM_DOMAIN + "/auth/login", { email, pwd });
  },

  // board controller
  // 게시글쓰기(POST)
  boardWrite: async (title, content, email) => {
    return await axios.post(HM_DOMAIN + "/board/write", {
      title,
      content,
      email,
    });
  },
  // 게시글전체목록조회(GET)
  boardList: async () => {
    return await axios.get(HM_DOMAIN + "/board/list");
  },
  // 게시글상세조회(GET)
  // 게시글페이지조회(GET)
  // 게시글검색(GET)
  // 게시글수정(PUT)
  boardModify: async (title, content, email) => {
    return await axios.put(HM_DOMAIN + "/board/write", {
      title,
      content,
      email,
    });
  },
  // 게시글삭제(DELECTE)
  boardDelete: async (boardId) => {
    return await axios.delete(HM_DOMAIN + `/board/delete/${boardId}`);
  },

  // comment controller
  // 댓글쓰기(POST)
  // 댓글목록조회(GET)
  // 댓글수정(PUT)
  // 댓글삭제(DELECTE)
  // mamber controller
  // 회원목록조회(GET)
  memberList: async () => {
    return await axios.get(HM_DOMAIN + "/member/list");
  },
  // 회원정보수정(PUT)
  // 회원목록페이지조회
  // 회원삭제
  // 회원상세조회
};

export default AxiosApi;
