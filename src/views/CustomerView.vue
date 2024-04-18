<template>
  <div class="web">
    <customer-header />
    <div class="box_a">
      <div class="gnb">
        <h1>어떤 도움이 필요하세요?</h1>
        <div class="search">
          <div class="icon">
            <img src="../assets/image/search2.jpg" @click="$router.push('/customerand')">
          </div>
          <input class="search-bar__input" type="search" placeholder="검색">
        </div>
      </div>
      <div class="info">
        <div class="box">
          <ul class="grid">
            <ul class="form_a">
              <li><button class="button" @click="$router.push('/customorlist')">계정관리</button></li>
              <li><button class="button"><a href="#">사용문의</a></button></li>
              <li><button class="button"><a href="#">콘텐츠</a></button></li>
              <li><button class="button"><a href="#">이용권 구독 해지</a></button></li>
            </ul>
            <ul class="form_b">
              <li><button class="button"><a href="#">결제 및 이용권</a></button></li>
              <li><button class="button"><a href="#">쿠폰</a></button></li>
              <li><button class="button"><a href="#">환불</a></button></li>
              <li><button class="button"><a href="#">재생 및 사용 오류</a></button></li>
            </ul>
          </ul>
        </div>
        <div class="question">
          <h2>자주 묻는 질문</h2>
            <ul class="list">
              <div class="one">
                <li>애플 결제로 결제가 되었는데 이용권이 없다고 나와요.</li>
              </div>
              <div class="two">
                <li>구글 플레이로 결제가 되었는데 이용권이 없다고 나와요.</li>
              </div>
              <div class="three">
                <li>애플 결제로 결제가 되었는데 이용권이 없다고 나와요.</li>
              </div>
            </ul>
        </div>
      </div>
    </div>
    <customer-footer />
  </div>
</template>

<script>
import CustomerHeader from "../components/CustomerHeader.vue"
import CustomerFooter from "../components/CustomerFooter.vue"

export default {
  name: "HelloWorld",
  components:{
    CustomerHeader, CustomerFooter
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
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.box_a {
  max-width: 780px;
  /* height: 910px; */
  margin: auto;
}

input {
  font-size: 1rem;
  width: 525px;
  border-radius: 20px;
  padding: 12px 50px;
  float: Left;
}

.gnb h1 {
  text-align: start;
  width: 526px;
  margin-left: 126px;
  padding: 60px 0 12px 0;
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 32px;
}

h2 {
  font-family: "Noto Sans KR";
  font-weight: bold;
  font-size: 36px;
  text-align: left;
  margin-top: 40px;
  margin-bottom: 20px;
}

.search {
  position: relative;
  width: 526px;
  height: 46px;
  margin: 0 auto 28px auto;
  outline: 1px solid black;
  border-radius: 20px;
}

.icon {
  position: absolute; 
  display: flex;
  bottom: 14px;
  left: 10px;
  margin: 0;
  padding: 0 8px;
}


ul {
  list-style: none;
  font-family: 'Noto Sans KR', sans-serif;
}

.grid {
  display: flex;
}

.list {
  display: flex;
  height: 61px;
}
.list > .one {
  border-bottom: 1px solid #C1A2A2;
  padding-bottom: 12px;
}

.list > .two,.three {
  margin-left: 36px;
  border-bottom: 1px solid #C1A2A2;
  padding-bottom: 12px;
}

.form_a {
  padding-right: 20px;
}

button {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  width: 380px;
  height: 68px;
  box-shadow: 5px 5px 15px rgb(143, 143, 143);
  border-radius: 5px;
  margin: 10px 0;
  font-size: 24px;
}

a {
  text-decoration: none;
  color: black;
  padding: 0;
  margin: 0;
  display: block;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
}

li > .button:hover {
  color: #da0037;
}
a:hover {
  color: #da0037;
}

.one:hover {
  text-decoration: underline;
}
.two:hover {
  text-decoration: underline;
}

.three:hover {
  text-decoration: underline;
}

</style>
