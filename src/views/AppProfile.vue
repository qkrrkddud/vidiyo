<template>
  <div class="profile">
    <div class="container">
      <h1>프로필</h1>
      <div class="profileImage">
        <img src="../assets/image/프로필 이미지1.png" alt="" />
      </div>
      <button type="button" class="profilebtn">프로필 편집</button>
      <h2>설정</h2>
      <div class="profile-one">
        <p>계정</p>
        <span>이메일</span>
        <span> example@gmail.com</span>
        <span>이메일 변경</span>
        <p>비밀번호 변경</p>
      </div>
      <div class="profile-two">
        <p>알람 채널 설정</p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="profile-thr">
        <p>기타</p>
        <span>비디오품질</span>
        <span> 최대화질</span>
        <i class="fa-solid fa-arrow-right"></i>
        <p>
          컴퓨터 사양,네트워크 속도에 따라 최대 화질이 <br />
          지원되며, 쾌적한 환경에선 1080p까지 제공됩니다
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: #fff;
}
.profile {
  text-align: left;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 70%;
  margin-left:10% ;
}
.profile h1 {
  font-size: var(--size1);
  margin-bottom: 20px;
  font-weight: bold;
}
.profileImage {
  margin-bottom: 20px;
}
.profilebtn {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  background-color: #565656;
  border: 0px;
  font-weight: bold;
  font-size: var(--size6);
  border-radius: 5px;
}
h2 {
  font-weight: bold;
  margin-bottom: 20px;
}
.profile-one {
  border: 1px solid var(--button-color5);
  width: 100%;
  height: 130px;
  border-radius: 5px;
  padding: 12px 20px 26px 12px;
  position: relative;
  margin-bottom: 20px;
  font-weight: bold;
}

.profile-one :first-child {
  color: #b6b6b6;
  font-size: var(--size6);
  margin-bottom: 8px;
}
.profile-one :nth-child(2) {
  font-size: var(--size6);
  margin-bottom: 8px;
}
.profile-one :nth-child(3) {
  position: absolute;
  left: 30%;
  color: #b6b6b6;
  font-size: var(--size6);
}
.profile-one :nth-child(4) {
  position: absolute;
  right: 8px;
  color: #da0037;
  text-decoration: underline;
}
.profile-one :nth-child(5) {
  position: absolute;
  right: 8px;
  bottom: 17px;
  color: #da0037;
  text-decoration: underline;
}

.profile-two {
  border: 1px solid var(--button-color5);
  width: 100%;
  height: 60px;
  border-radius: 5px;
  padding: 0 15px 0 10px;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile-two p {
  font-size: var(--size6);
  font-weight: bold;
}
.profile-two i {
  color: #da0037;
}
.profile-thr {
  border: 1px solid var(--button-color5);
  width: 100%;
  height: 130px;
  border-radius: 5px;
  padding: 12px 20px 26px 12px;
  position: relative;
  margin-bottom: 20px;
  font-weight: bold;
}
.profile-thr :first-child {
  font-size: var(--size6);
  margin-bottom: 8px;
  color: #b6b6b6;
}
.profile-thr :nth-child(2) {
  font-size: var(--size6);
  margin-bottom: 8px;
}
.profile-thr :nth-child(3) {
  font-size: var(--size6);
  color: #b6b6b6;
  margin-bottom: 8px;
  position: absolute;
  left: 200px;
}
.profile-thr :nth-child(4) {
  position: absolute;
  right: 20px;
  color: #da0037;
}
.profile-thr :nth-child(5) {
  position: absolute;
  color: #b6b6b6;
  left: 200px;
}
 
</style>