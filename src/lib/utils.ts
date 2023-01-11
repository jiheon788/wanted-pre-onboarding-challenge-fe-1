import $ from "jquery";

interface IAuthData {
  email: string;
  password: string;
  rePassword?: string
}

const rEmailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const isValidateAuthData = (data: IAuthData, isSignIn: boolean = false) => {
  if (data.email === "") {
    alert("이메일을 입력해주세요.");
    $("#email").focus();
    return false;
  }

  if (data.email.match(rEmailExp) === null) {
    alert("이메일 형식이 아닙니다");
    $("#email").focus();
    return false;
  }

  if (data.password === "") {
    alert("패스워드를 입력해주세요.");
    $("#password").focus();
    return false;
  }

  if (isSignIn && data.password !== data.rePassword) {
    alert("패스워드가 다릅니다.");
    $("#password").focus();
    return false;
  }

  if (data.password.length < 8) {
    alert("패스워드는 8자 이상으로 입력해주세요.");
    $("#password").focus();
    return false;
  }

  return true;
}

export const calcTime = (timeStamp: string) => {
  const today = new Date();
  const timeValue = new Date(timeStamp);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
      return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}