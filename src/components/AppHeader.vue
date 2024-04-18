<template>
  <header>
    <div class="search">
      <input
        type="text"
        class="search-all"
        placeholder="콘텐츠, 태그, 인물, 리스트 검색 "
        @input="searchGroup"
        v-if="this.$store.state.searchShow"
        @keydown="$router.push('/searchmovie')"
      />
      <button class="btnClear" @click="clearInput"><i class="fa-solid fa-circle-xmark"></i></button>
    </div>
    <div class="login-header">
      <div class="alam">
        <img src="../assets/image/Vector.png" alt="소식함" />
      </div>
      <div class="profile">
        <img src="../assets/image/프로필 이미지.png" alt="프로필" />
      </div>
    </div>
    <div class="logout-header">
      <router-link to="/login"
        ><button type="button" class="login">로그인</button></router-link
      >
      <router-link to="/joinmembership"
        ><button type="button" class="join">회원가입</button></router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    clearInput(){
      document.querySelector('input').value = ""
    }
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 56px;
  background-color: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  font-family: "Roboto";
  padding-left: 15rem;
  z-index: 1000;
}
.login-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  display: none;
}
.profile {
  margin: 0 2.5rem 0 1.25rem;
}
.logout-header {
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0225rem;
}

.join {
  width: 74px;
  height: 32px;
  background-color: var(--button-color1);
  color: var(--text-color3);
  font-size: 0.75rem;
  border: none;
  padding: 0.5625rem 0.5625rem;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 2.5rem 0 0.625rem;
}
.login {
  background-color: var(--sub-color2);
  color: var(--text-color3);
  font-size: 0.75rem;
  border: none;
  width: 46px;
  height: 24px;
  padding: 0.3125rem;
  box-sizing: border-box;
  text-align: center;
}
input[type="text"] {
  width: 340px;
  height: 36px;
  background: url(../assets/image/icon.png) no-repeat 10px center #222326;
  text-indent: 40px;
  margin-left: 2.5rem;
  border-radius: 7px;
  border: none;
  color: white;
}
.search {
  position: relative;
  display: inline-block;
}
.search .btnClear {
  position: absolute;
  top: 7px;
  right: 0;
  width: 30px;
  height: 16px;
  background-color: inherit;
  background-size: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--button-color4);
}
</style>