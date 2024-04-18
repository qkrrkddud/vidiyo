<template>
  <footer>
    <!-- 모달시작 -->
    <div class="modal-terms">
        <!-- Button trigger modal -->
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-black" id="">
                  ott 서비스 이용약관
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-black">
                <p>opp 이용약관</p>
                <br />
                <p>본 약관은 2023년 1월1일부터 적용됩니다</p>
                <br /><br />
                <b>1. 총칙</b>
                <br /><br />
                <p>제 1조 목적</p>
                <br />
                <p>
                  왓챠 서비스 약관(이하 “약관”)은 주식회사 왓챠(이하 “회사”)가
                  제공하는 동영상 스트리밍 서비스(웹, 모바일 웹•앱 서비스 등을
                  포함)인 왓챠(WATCHA) 서비스(이하 “서비스”)를 이용함에 있어
                  회사와 회원간의 권리, 의무 및 책임사항, 서비스 이용조건 및
                  절차 등 기본적인 사항을 규정함을 목적으로 합니다.
                </p>
                <br />
                <p>제 2조 설명 및 용어의 정의</p>
                <br />
                <p>
                  1항. 회사는 유료 서비스를 이용하고자 하는 회원이 최초 계약을
                  체결하기 전 회원에게 왓챠 서비스 구독계약의 성격과 해지 및
                  환불 조건 등 주요 내용을 이 약관과 별개로 설명합니다.
                </p>
                <br />
                <p>
                  2항. 이 약관에서 사용되는 용어의 정의는 다음과 같습니다. 
                <br />
                  1)
                  회원: 왓챠피디아 약관 및 본 약관에 동의하고 계정을 생성한
                  자로서, 회사가 제공하는 서비스를 통하여 무료로 제공하는 정보를
                  지속적으로 이용할 수 있는 자를 말합니다. 단, 회원이 생성한
                  계정을 통해 가족 구성원이 함께 이용할 수 있는 서비스에 가입한
                  경우에는 그 가족 구성원(이하 “가족 구성원”)을 포함하는 의미로
                  사용될 수 있습니다. 
                <br />
                  2) 유료회원: 별도의 금액을 지불하고 월
                  정기 이용권 등을 결제하여 유료 서비스를 이용하는 회원을
                  의미합니다. 
                <br />
                  3) 유료 서비스: 회사가 제공하는 서비스 중 회원이
                  회사에 일정 금액을 결제하거나, 회원이 회사 또는 제3자와의 거래
                  내지 약정 조건을 수락하는 경우에 이용할 수 있는 회사의
                  서비스를 의미합니다. 단, 회사 또는 제3자로부터 사이트에
                  연결(링크)된 유료 콘텐츠 제공업체 및 회사와의 계약을 통하여
                  입점한 제휴 서비스는 회사의 유료 서비스 이용행위로 보지
                  않으며, 본 약관을 적용하지 아니합니다.
                </p>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 모달끝 -->
    <div class="top-menu">
      <a href="#">개인정보 처리방침 | </a>
      <a href="#">VIDIYO서비스 이용약관 | </a>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <b>VIDIO서비스 이용약관 |</b>
      </button>
      <a href="../customer">고객센터 | </a>
      
      <a href="#">채용정보 </a>      
    </div>
    <div class="center-menu">
      <span>고객센터(이용 및 결제 문의)</span> |
      <a href="#">cs@vidiyo.co.kr/02-345-9987(유료)</a> <br />
      <span>VIDIYO 기업용 서비스 문의</span> |
      <a href="#"
        >b2b-sales@vidiyo.com / 010-3729-0921 / 기업용 서비스 제안서 다운로드</a
      >
      <br />
      <span>제휴 및 대외 협력</span> |
      <a href="#">https://vidiyo.team/contact</a> <br />
      <span>B2B 이용권 구매 문의</span> |
      <a href="#">쿠프마케팅 (yyyo1004@coopnc .com)</a> <br />
    </div>
    <div class="bottom-menu">
      <p>주식회사 VIDIYO 대표 김철수 | 서울특별시 서초구 강남대로 97</p>
      <p>
        사업자등록번호 1111-33-22044 | 통신판매업 신고번호 제
        2023-서울서초-0524호
      </p>
      <p>호스팅 서비스 제공자 아마존 웹 서비시즈코리아 유한회사</p>
      <p>Copyright ©2023 by vidiyo, inc. All rights reserved.</p>
    </div>
    <div class="logo-group">
      <img src="../assets/image/facebook.png" alt="facebook" />
      <img src="../assets/image/twitter.png" alt="twitter" />
      <img src="../assets/image/instargram.png" alt="instargram" />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
*{
  color: #b3b3b3;
}
footer {
  background: var(--main-color1);
  font-size: var(--size5);
  padding: 40px 40px 100px 40px;
  position: relative;
  /* min-width: 1020px; */
}
.top-menu {
  margin-bottom: 30px;
  display: flex;
  line-height:1.5;
  font-weight: bold;
}
.center-menu {
  margin-bottom: 50px;
}
.center-menu > span {
  width: 160px;
  height: 14px;
  display: inline-block;
}
.center-menu > a {
  display: inline-block;
  width: 400px;
}
.logo-group {
  position: absolute;
  right: 40px;
  transform: translateY(-100px);
}
.logo-group img {
margin-left: 20px;
}
.btn {
  padding: 0;
  font-size: 12px;
}
.modal-header {
  border: none;
  margin: auto;
}
.btn-close {
  transform: translateX(400%);
}
.modal-dialog{
  background: red;
}

</style>