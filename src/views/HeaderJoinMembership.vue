<template>
  <div class="wrap">
    <div class="header-header">
      <router-link to="/"> <img src="../assets/image/vidiyo logo 5.png" alt="" /></router-link>
      <div class="header-login">
        <router-link to="/login"><p>로그인</p></router-link>
      </div>
    </div>
    <h1>회원가입</h1> 
    <form>
      <input
        v-model="idValue"
        type="text"
        class="login id"
        placeholder="이름"
      />
      <br />
      <input
        v-model="pwValue"
        type="text"
        class="login email"
        placeholder="이메일(example@gmail.com)"
      />
      <br />
      <input
        v-model="eValue"
        type="password"
        class="login pw"
        placeholder="비밀번호(영어,숫자,특문 중 2개 이상 조합 10자리 이상)"
      />
      <br />
      <div class="terms">
        <label>
          <input @click="jihun" v-model="cValue1" id="check_all" class="checkbox" type="checkbox" />전체약관에
          동의합니다.
          <br />
        </label>
        <label>
          <input v-model="cValue2" class="checkbox" type="checkbox" />만 14세
          이상입니다.
          <br />
        </label>
        <label>
          <input v-model="cValue3" class="checkbox" type="checkbox" />(필수)
          vidiyo서비스 이용약관
          <u>보기</u>
          <br />
        </label>
        <label>
          <input v-model="cValue4" class="checkbox" type="checkbox" />(필수)
          개인 정보 수집 및 이용 동의 <u>보기</u>
          <br />
        </label>
        <label>
          <input v-model="cValue5" class="checkbox" type="checkbox" />(선택)
          신작 알림 이벤트 정보 수신
          <br />
        </label>
      </div>
      <div class="button">
        <button
          class="join"
          type="submit"
          :disabled="
            idValue == '' ||
            pwValue == '' ||
            eValue == '' ||
            // !cValue1 ||
            !cValue2 ||
            !cValue3 ||
            !cValue4"
        >
          가입하기
        </button>
      </div>
    </form>

    <header-footer class="header-footer" />
  </div>
</template>

<script>
import HeaderFooter from "../components/HeaderFooter.vue";
export default {
  components: { HeaderFooter },
  // updated(){//변경이 되면 실행
    // console.log(this.idValue)
  // },
  data() {
    return {
      idValue: "",
      pwValue: "",
      eValue: "",
      cValue1: false,
      cValue2: false,
      cValue3: false,
      cValue4: false,
      cValue5: false,
    };
  },
  methods:{ 
      jihun(){
        this.cValue2=true;
        this.cValue3=true;
        this.cValue4=true;
        this.cValue5=true;
        if(this.cValue1==true){
          this.cValue2=false;
          this.cValue3=false;
          this.cValue4=false;
         this.cValue5=false;
        }
      }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  margin: auto;
  border-style: none;
}
.wrap {
  width:100%;
  height:100%;
  outline: 1px solid green;
  background: #444 url(../assets/image/image\ 25.png) center/cover;
  background-blend-mode: overlay;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
}
.wrap img {
  margin: 20px 0 0 28px;
}
.wrap h1 {
  text-align: center;
  color: #fff;
  margin: 250px 0 36px 0;
}
.header-header {
}
.header-login {
  width: 60px;
  height: 24px;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  position: absolute;
  top: 20px;
  right: 28px;
}
form {
  text-align: center;
}
.login {
  width: 400px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #da0037;
  font-size: 12px;
  padding: 20px;

}


.terms {
  width: 400px;
  text-align: left;
}
.terms > label {
  color: #b5b5b5;
  display: block;
}
.terms input[type="checkbox"] {
  accent-color: rgb(248,47,98);
  /* background-color: red; */
}
.checkbox {
  margin-right: 20px;
  cursor: pointer;
}
.button {
  text-align: center;
}
.join:disabled {
  background-color: #5a5a5a;
  color: #898989;
}
.join {
  /* outline: 1px solid red; */
  margin-top: 36px;
  width: 400px;
  height: 40px;
  border-radius: 20px;
  background-color: #da0037;
  color: #fff;
}
.header-footer {
  /* outline: 1px solid blue; */
  /* text-align: center; */
  position: absolute;
  bottom: 5%;
}
</style>