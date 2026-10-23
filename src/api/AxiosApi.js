import axios from "axios"; // 비동기 통신 라이브러리
const HM_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // auth controller
  // 회원가입여부확인(GET)
  memberExist: async (email) => {
    return await axios.get(HM_DOMAIN + `/auth/exists/${email}`);
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
  boardDetail: async (id) => {
    return await axios.get(HM_DOMAIN + `/board/${id}`);
  },
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
  // 댓글 쓰기
  commentWrite: async (boardId, content, email) => {
    return await axios.post(HM_DOMAIN + "/comment/write", {
      boardId,
      content,
      email,
    });
  },
  // 댓글 목록 조회
  commentList: async (boardId) => {
    return await axios.get(HM_DOMAIN + `/comment/list/${boardId}`);
  },
  // 댓글 수정
  commentModify: async (commentId, content, email) => {
    return await axios.put(HM_DOMAIN + `/comment/${commentId}`, {
      content,
      email,
    });
  },
  // 댓글 삭제
  commentDelete: async (commentId) => {
    return await axios.delete(HM_DOMAIN + `/comment/${commentId}`);
  },

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
