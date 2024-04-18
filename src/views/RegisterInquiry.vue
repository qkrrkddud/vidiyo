<template>
  <div class="web">
    <customer-header />
    <div clas="box_a">
      <div class="box_b">
        <div class="text">
          <h1>문의등록</h1>
          <p>
            문의하신 내용은 고객 센터에서 확인 후 영업일 기준 1~3일 이내에 답변
            드리도록 하겠습니다. <br />*운영 시간: 평일 10:00 ~ 18:00 (주말,
            공휴일 제외)
          </p>
        </div>
        <div class="id_management">
          <p>아래에서 문의 유형을 선택해 주세요.</p>
          <sapn>
            <select class="form-select" aria-label="Default selexample">
                <option selected>-</option>
                <option value="1">로그인/계정관리</option>
                <option value="2">쿠폰</option>
                <option value="3">콘텐츠</option>
                <option value="3">환불</option>
                <option value="3">해지</option>
                <option value="3">결제</option>
                <option value="3">재생 및 사용오류</option>
                <option value="3">VIDIYO에 제안하기</option>
                <option value="3">사용문의</option>
            </select>
          </sapn>
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
  box-sizing: border-box;
  font-family: "Roboto";
}

.web {
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.box_b {
  margin: auto;
  justify-content: center;
  margin-top: 4rem;
  text-align: center;
}

h1 {
  font-style: "Noto Sans";
  line-height: 20px;
  font-size: 36px;
  margin-bottom: 20px;
}

.id_management > p {
  margin-top: 20px;
}

.form-select {
  max-width: 48.75rem;
  height: 3.125rem;
  font-size: 16px;
  border-radius: 5px;
  margin: auto;
}

option { padding : 0 0 0 10px; 
}
.id_management span{
  
}

</style>

