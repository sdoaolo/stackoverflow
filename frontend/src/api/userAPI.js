import axios from "axios";

export const login = async (data) => {
  //수정 필요
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { Authorization: null },
      url: "http://localhost:4000/members",
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      url: "http://localhost:4000/members",
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};