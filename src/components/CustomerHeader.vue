<template>
  <header>
    <div class="sub">
      <div class="logo">
        <a href="/" art="고객센터페이지"><img src="../assets/image/vidiyo logo 5.png" alt="vidiyo" /></a>
      </div>
      <div class="dropdown">
        <button @click="menuToggle"><span>홍길동</span><i class="fa-solid fa-play"></i></button>
        <ul class="dropdown-contents" v-show="MenuToggle" @click="menuHide">
          <a href="#">문의 내역</a>
          <a href="#" @click="$router.push('/registeri')">문의 등록</a>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      MenuToggle: false,
    }
  },
methods:{
  menuToggle() {
      //this.MenuToggle값이 true면 false로 false면 true로 변경
      this.MenuToggle == false
        ? (this.MenuToggle = true)
        : (this.MenuToggle = false);
    },
    menuHide(e) {
      //console.log(e.target.nodeName)
      //클릭한 요소가 li요소일때 MenuToggle의 값을 false로 변경
      if (e.target.nodeName == "LI") this.MenuToggle = false;
    },
}
};
</script>

<style scoped>
header {
  height: 80px;
  background-color: #141517;
  position: relative;
  padding: 0 10% 0 10%;
}
span{
  font-size: var(--size4);
  font-weight:bold;
}
.sub {
  margin: 0 auto;
  margin: auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: inherit;
  color: white;
  border: 0;
  font-family: Roboto;
}
i {
  transform: rotate(90deg);
  margin-left: 5px;
}

.dropdown {
  position: relative;
}
.dropdown > button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.dropdown>ul>a{
  font-size:var(--size5) ;
}
.dropdown-contents {
  position: absolute;
  padding: 10px 0;
  right: -50px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.dropdown-contents > a {
  color: #333;
    cursor: pointer;
    display: block;
    padding: 7px 40px 7px 20px;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    text-align: start;
    line-height: inherit;
    width: 100%;
}
.dropdown-contents > a:hover {
  background-color: #f3f3f3;
  cursor: pointer;
}

</style>