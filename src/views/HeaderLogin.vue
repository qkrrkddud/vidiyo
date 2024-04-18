<template>
  <div class="wrap">
    <div class="header-header">
      <router-link to="/"><img src="../assets/image/vidiyo logo 5.png" alt="" /></router-link>
      <div class="header-login"> 
        <router-link to="/joinmembership"><p>회원가입</p></router-link>
      </div>
    </div>
    <h1>로그인</h1>
    <form>
      <input
        type="text"
        class="login email"
        placeholder="이메일(example@gmail.com)"
        v-model="idValue"
        name="id"
        
      />
      <br />
      <input type="password" class="login pw" placeholder="비밀번호" v-model="pwValue" name="pw" />
      <br />
      <div class="button">
        <button 
        class="join" 
        type="submit"
        :disabled="idValue && pwValue == 0"
        >로그인</button>
      </div>
    </form>
    <header-footer class="header-footer" />
  </div>
</template>

<script>
import HeaderFooter from "../components/HeaderFooter.vue";
export default {
  components: { HeaderFooter },
  data() {
    return {
      idValue: "",
      pwValue: "",
    };
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
.wrap{
  outline: 1px solid green;
  width: 100%;
  height: 100vh;
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
  margin: 300px 0 36px 0;
}
.header-header {
}
.header-login {
  width: 80px;
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
  padding: 20px;
  font-size: 12px;
}
.terms {
  width: 400px;
  text-align: left;
}
.terms > label {
  color: #b5b5b5;
  display: block;
}

.checkbox {
  margin-right: 20px;
}
.join:disabled {
  background-color: #5a5a5a;
  color: #898989;
}
.join {
  margin-top: 36px;
  width: 400px;
  height: 40px;
  border-radius: 20px;
  background-color: #da0037;
  color: #fff;
}
.header-footer {
  position: absolute;
  bottom: 5%;
}

</style>