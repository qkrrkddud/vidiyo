<template>
  <div class="web">
    <customer-header />
    <div class="boxa">
      <div class="number1">
        <a href="#"><h1>계정/비밀번호 변경</h1></a>
        <p><a href="#">가입한 이메일 주소와 비밀번호를 변경하고 싶어요.</a></p>
        <p>
          <a href="#"
            >@privaterelay.appleid.com 주소로 가입되어 있어요. 어떻게
            변경하나요?</a
          >
        </p>
        <p>
          <a href="#"
            >@privaterelay.appleid.com 주소로 가입된 계정은 가족 혹은 친구에게
            어떻게 공유할 수 있나요?</a
          >
        </p>
        <p>
          <a href="#"
            >@privaterelay.appleid.com 주소로 가입된 계정은 다른 기기에서 어떻게
            로그인 하나요?</a
          >
        </p>
      </div>
      <div class="number2">
        <h1><a href="#">계정/비밀번호 분실</a></h1>
        <p><a href="#">가입한 이메일 주소와 비밀번호를 변경하고 싶어요.</a></p>
        <p><a href="#">이메일 주소, 비밀번호가 기억나지 않아요.</a></p>
        <p><a href="#">로그인 상태에서 비밀번호가 기억나지 않아요. </a></p>
      </div>
      <div class="number3">
        <a href="#"><h1>탈퇴</h1></a>
        <p>
          <a href="#">VIDIYO를 탈퇴하면 충전한 VIDIYO 캐시는 어떻게 되나요?</a>
        </p>
        <p><a href="#">VIDIYO를 탈퇴하면 소장한 콘텐츠는 어떻게 되나요?</a></p>
        <p><a href="#">탈퇴하고 싶어요.</a></p>
        <p><a href="#">탈퇴한 이메일 계정을 다시 복구할 수 있나요? </a></p>
      </div>
      <div class="number4">
        <a href="#"><h1>기타</h1></a>
        <p><a href="#">프로필에 비밀번호를 설정할 수 있나요?</a></p>
        <p><a href="#">프로필마다 연령 등급을 설정할 수 있나요?</a></p>
        <p><a href="#">등록된 모든 기기에서 로그아웃하고 싶어요.</a></p>
        <p>
          <a href="#"
            >한국에서 로그인하는데 '서비스 이용 불가' 메시지가 안내되어요.</a
          >
        </p>
        <p>
          <a href="#"
            >휴대폰 문자 전송 이외에 본인(성인) 인증을 할 수 있는 방법은
            없나요?</a
          >
        </p>
        <p><a href="#">인증 메일이 오지 않아요.</a></p>
        <div class="step">
          <p><a href="#">문서 10개 더보기</a></p>
        </div>
      </div>
    </div>
    <customer-footer />
  </div>
</template>

<script>
import CustomerHeader from "../components/CustomerHeader.vue";
import CustomerFooter from "../components/CustomerFooter.vue";

export default {
  name: "HelloWorld",
  components: {
    CustomerHeader,
    CustomerFooter,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  margin: auto;
  border-style: none;
}

.web {
  position:absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  background-color: #f5f5f5;
}

.boxa {
  max-width: 780px;
  margin: auto;
}

h1 {
  padding-left: 4px;
  font-family: "Noto Sans KR";
  font-weight: bold;
  margin-left: 4px;
  padding-top: 70px;
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  font-family: "Roboto";
  border-bottom: 1px solid #c1a2a2;
  padding: 12px;
  line-height: 30px;
  font-size: 16px;
}

.step{
  padding-bottom: 100px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.box > .number4 > p {
  text-decoration: none;
  color: #da0037;
}
</style>
