<template>
  <div class="warp">
    <div class="evalTitle">
      <h2>보관함</h2>
    </div>
    
    <div class="trueView" v-if="login">
    <section class="content">
      <div class="subTitle">
        <h2>감상중인 콘텐츠</h2>
      </div>
      <div class="container-fulid">
        <ul class="gnb">
          <li class="imgGroup" v-for="item in category" :key="item">
            <a href="#">
              <img :src="item.img" class="imgStall" @click="$router.push('/detail')"/>
              <div class="texDec">
                <!-- <h1>{{ item.title }}</h1>
                <p>{{ item.time }}</p>
                <span>{{ item.tag }}</span> -->
              </div>
            </a>
            <div class="movieName">
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content">
      <div class="subTitle">
        <h2>나의 시청 콘텐츠</h2>
      </div>
      <div class="container-fulid">
        <ul class="gnb">
          <li class="imgGroup" v-for="item in comment" :key="item">
            <a href="#">
              <img :src="item.img" class="imgStall"  @click="$router.push('/detail')"/>
            </a>
            <div class="movieName">
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="comment">
      <div class="commentTitle">
        <h2>보고싶어요 한 콘텐츠</h2>
      </div>
      <div class="container-fulid" v-if="heart.length!==0">
        <ul class="gnb" >
          <li class="imgGroup" v-for="item in heart" :key="item">
              <img :src="item.img" class="imgStall"  @click="$router.push('/detail')"/>
            <div class="movieName">
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="container-fulid" v-else>
       <div class="row">
        <div class="col-md-6 offset-md-3 middle">
          <img src="../assets/image/Group111.png">
          <p>보고 싶어요 한 컨텐츠는 여기 보여줘요</p>
        </div>
       </div>
      </div>
    </section>
    </div>

    <div class="falseView" v-else>
      <h4>나의 컨텐츠를<br> 
        한 곳에서 관리해보세요</h4>
      <p>보관함 사용을 위해서는 로그인이 필요해요</p>
      <button type="button" @click="$router.push('/login')">로그인하기</button>
    </div>

    



  </div>
</template>

<script>
export default {
  data(){
    return{
      category: [
        {
          img: require('../assets/image/Rectangle98.png'),
          title: '이프온리',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle90.png'),
          title: '장화홍련',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle511.png'),
          title: '유전',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle512.png'),
          title: '판의미로',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle513.png'),
          title: '살인의 추억',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle514.png'),
          title: '데어 윌 비 블러드',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle515.png'),
          title: '에이아이',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle516.png'),
          title: '알포인트',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
      ],
      comment: [
        {
          img: require('../assets/image/Rectangle517.png'),
          title: '겟아웃',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
        {
          img: require('../assets/image/Rectangle49.png'),
          title: '광해',
          time: '1시간 30분',
          tag: '드라마, 로맨스'
        },
      
      ],
      heart: [
        // {
        //   img: require('../assets/image/Rectangle518.png'),
        //   title: '연애혁명',
        // }
      ],
       login: true,

    }
  },
  methods: {

  },
  created(){
    console.log(this.comment)
  }
};
</script>

<style scoped>
.warp {
  color: white;
  padding: 56px 40px 0;

}
.evalTitle {
  margin-bottom: 70px;
}
/* .content{
  max-width: 1680px;
} */
.subTitle {
  margin-bottom: 16px;
}
.gnb {
  max-width: 1600px;
  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(auto-fill, 10.625rem);
  gap: 10px;
  justify-content: space-between;
  /* grid-row-gap: 10px; */
}
.texDec{
  display: none;
}
.imgGroup{
  height: 276px;
  position: relative;
}
/* .imgGroup:hover {
  transform: scale(1.2);
  opacity: 0.5;
}

.imgGroup:hover > a > .texDec{
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
} */
.texDec h1{
  
  font-size: 18px;
}
/* .imgGroup:hover > .movieName{
  display: none;
} */

.imgGroup > a{
  display: block;
}
.imgStall{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px;

}

.movieName{
  color: white;
  padding-top: 8px;
  box-sizing: border-box;
  font-size: 0.75rem;
}
.container-fulid{
  margin-bottom: 60px;
  position: relative;
}

.commentTitle{
  margin-bottom: 16px;
}
.row{
  /* width: 100%;
  height: 60vh;
  display: block;
  text-align: center;
  line-height: 60vh; */
  text-align: center;
  height: 40vh;
  position: relative;
}
.middle > img{
  margin-bottom: 20px;
}
.middle{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.falseView{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  text-align: center;
  margin: 120px 0px;
}
.falseView h4{
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  margin-top: 8px;
  margin-bottom: 6px;
  white-space: pre-wrap;
}
.falseView p{
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 20px;
  color: rgb(186, 186, 193);
  margin-bottom: 32px;
}
.falseView button{
  color: rgb(255, 255, 255);
  background: var(--button-color1);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  width: 240px;
  padding: 8px 0px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 0;
  outline: 0;
}
/* @media (max-width: 1024px){
  .gnb{
  grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 576px){
  .gnb{
  grid-template-columns: repeat(2, 1fr);
  }
} */

</style>
