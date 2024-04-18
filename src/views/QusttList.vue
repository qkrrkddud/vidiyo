<template>
  <div class="web">
    <customer-header />
    <div class="box">
      <div class="box_a">
        <ul class="category">
          <li><p>카테고리별</p></li>
          <li>모든 카테고리(6)</li>
          <li>계정관리(4)</li>
          <li>이용권 구독 해지(1)</li>
          <li>환불(1)</li>
          <div class="button">
            <button>카테고리 더 보기</button>
          </div>
        </ul>
      </div>
      <div class="box_b">
        <h1>모든 카테고리에서 "탈퇴" 검색 결과 6개</h1>
        <div class="memo">
          <a href="#"><h2>탈퇴하고 싶어요.</h2></a>
          <p>
            탈퇴 시 환불 및 결제 내역 조회가 어려울 수 있어요. 고객센터에 환불
            요청하신 상태라면 환불 답변 받으신 후에 탈퇴를 진행해 주세요.
            탈퇴하시기 전에 아래 내용을 꼭 확인해 주세요. '계정 탈퇴'와
          </p>
          <a href="#"><h2>탈퇴한 이메일 계정을 다시 복구할 수 있나요?</h2></a>
          <p>
            탈퇴 시 모든 정보가 영구 삭제되기 때문에 복구가 어려워요. 탈퇴 시
            다시 한번 주의 부탁드려요.
          </p>
          <a href="#"
            ><h2>VIDIYO를 탈퇴하면 충전한 VIDIYO 캐시는 어떻게 되나요?</h2></a
          >
          <p>
            VIDIYO 계정을 탈퇴하는 경우 보유하고 계신 유/무료 VIDIYO 캐시는
            소멸되며, 이후 복구가 불가해요. 탈퇴 전 안내되는 유의 사항을 꼭 확인
            후 진행해 주세요.
          </p>
          <a href="#"
            ><h2>
              [VIDIYO 개봉관] VIDIYO를 탈퇴하면 소장한 콘텐츠는 어떻게 되나요?
            </h2></a
          >
          <p>
            VIDIYO 탈퇴 시 유료 서비스를 포함해 모든 서비스 계약은 종료되어요.
            탈퇴 시 소장한 콘텐츠는 삭제되며, 이후 이용은 불가한 점 유의해
            주세요.
          </p>
          <a href="#"
            ><h2>
              [VIDIYO 개봉관] 정기 이용권 해지하면 VIDIYO 개봉관에서 구매한
              작품도 못보게 되나요?
            </h2></a
          >
          <p>
            있어요. 대여용: 대여 기간 동안 감상 가능 소장용: 기간 제한 없이 감상
            가능 * 계정 탈퇴 시에는 더이상 감상이 불가해요.
          </p>
          <a href="#"><h2>결제 취소(환불)하고 싶어요.</h2></a>
          <p>
            다운로드한 내역이 없고 감상 이력이 없는 경우, 7일 이내에 요청 시
            환불이 가능해요. 환불이 완료되기 전에 탈퇴하시면 계약 및 결제 정보의
            확인이 어려워 환불이 어려울 수 있어요.
          </p>
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
  margin: 0;
  border-style: none;
  font-family: "Noto Sans KR";
  list-style: none;
}

.web {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
   width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.box {
  margin: auto;
  margin-top: 70px;
  justify-content: center;
  width: 1200px;
  display: flex;
  height: 910px;
}

.box_a {
  margin-top: 35px;
  font-size: 20px;
  height: 342px;
  line-height: 64px;
}

.box_b {
  width: 782px;
  padding: 50px;
}

.box_b > h1 {
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #5f5f5f;
  padding-bottom: 31px;
}

h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 60px;
  color: #da0037;
}

h2:hover {
  text-decoration: underline;
  color: #da0037;
}
</style>