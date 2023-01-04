import $ from "jquery";

const rEmailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const isValidateAuthData = (data, isSignIn) => {
  if (data.email === "") {
    alert("이메일을 입력해주세요.");
    $("#email").focus();
    return false;
  }

  

  return true;
}