<template>
 <div id="warp">
  <div class="homeTitle">
    <h2>홈</h2>
  </div>


  <a href="#" class="imageLink">
    <div class="movieTitle">
      <div class="movieImage">
        <div class="image"></div>
        <div class="video">
            <video src="../assets/image/leave.mp4" autoplay loop muted height="520" id="video10"></video>
        </div>
      </div>
      <div class="movieText">
        <div class="bgi"></div>
        <p>"나는요...완전히 붕괴되었어요"</p>                                                                         
        <p>당신의 고백을 들은 순간, 내 사랑이 시작되었어요</p>
      </div>
    </div>
  </a>

  <hr type="regular">

  <section class="contants">
    <div class="gnb">
      <swiper
    ref="{swiperRef}"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="10"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :slidesOffsetBefore ="0"
    :autoHeight="true"
    
    class="mySwiper"
    
  >
      <swiper-slide v-for="item in items" :key="item">
        <div class="allFor">
          <div class="textGroup">
            <a href="#">
              <span>{{ item.span }}</span>
              <h2>{{ item.h2 }}</h2>
              <p>{{ item.p }}</p> 
            </a>
          </div>
          <figure>
            <img :src="item.img" />
          </figure>
        </div>
      </swiper-slide>
    
        <!-- <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure2.png" alt="">
            </figure>
          </div>
        </swiper-slide>
    
        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure3.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="allFor">
            <div class="textGroup">
              <span>NEW</span>
              <h2>새로 올라온 컨텐츠</h2>
              <p>라방, 본아페티, 그놈들 등</p> 
            </div>
            <figure>
              <img src="../assets/image/figure1.png" alt="">
            </figure>
          </div>
        </swiper-slide>
     -->
      
    </swiper>
  </div>
  </section>
  <hr type="regular">

  
  <section class="tagContents">
    <div class="tagGnb">
      <div class="onlyTxt">
        <h2>직장인에게 방학따위 없엉 힝</h2>
        <a href="#">더보기</a>
      </div>
      <swiper
    ref="{swiperRef}"
    :slidesPerView="8"
    :centeredSlides="false"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :autoHeight="true"
    
    
    class="mySwiper"
    
  >
      <swiper-slide v-for="image in category" :key="image" class="about">
        <div class="onlyImage">
            <img :src="image.img" @click="$router.push('/detail')"/>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </section> 

  <section class="tagContents">
    <div class="tagGnb">
      <div class="onlyTxt">
        <h2>새로 올라온 콘텐츠</h2>
        <a href="#">더보기</a>
      </div>
      <swiper
    ref="{swiperRef}"
    :slidesPerView="8"
    :centeredSlides="false"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :autoHeight="true"
    
    
    class="mySwiper"
    
  >
      <swiper-slide v-for="image in category" :key="image" class="about">
        <div class="onlyImage">
            <img :src="image.img" />
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </section> 

  <section class="personContents">
    <div class="perGnb">
      <div class="onlyTxt">
        <h2>아티스트</h2>
      </div>
      <swiper
    ref="{swiperRef}"
    :slidesPerView="8"
    :centeredSlides="false"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :spaceBetween="10"
    class="mySwiper"
  >
      <swiper-slide v-for="personImg in person" :key="personImg" class="about">
        <div class="personImage" @click="$router.push('/movie')">
            <div class="personImg">
             <img :src="personImg.img" />
            </div>
            <h4>{{ personImg.name }}</h4>
            <p>{{ personImg.movie }}</p>
        </div>
      </swiper-slide>
      </swiper>
    </div>
  </section> 



 

</div>
</template>
<!-- <div class="homeTitleImage">
  <img src="../assets/image/image18.png" alt="">
</div> -->

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import '../assets/css/root.css';

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data(){
    return{
      items: [
        {
          span : 'NEW',
          h2 : '새로 올라온 컨텐츠',
          p : '라방, 본아페티, 그놈들 등',
          img : require('../assets/image/figure1.png'),
        },
        {
          span : '추천영화',
          h2 : '트와일라잇 시리즈',
          p : '얼음보다 차갑고 빛보다 빠른 그들이 온다!', 
          img : require('../assets/image/figure2.png'),
        },
        {
          span : '추천리스트',
          h2 : '죽기전에 봐야 할 명작',
          p : '영화 평론가들이 뽑은 21세기 가장 위대한 명작', 
          img : require('../assets/image/figure3.png')
        },
        {
          span : '추천리스트',
          h2 : '죽기전에 봐야 할 명작',
          p : '영화 평론가들이 뽑은 21세기 가장 위대한 명작', 
          img : require('../assets/image/figure3.png')
        },
      ],
      category: [
        {
          img: require('../assets/image/Rectangle49.png'),
        },
        {
          img: require('../assets/image/Rectangle90.png'),
        },
        {
          img: require('../assets/image/Rectangle511.png'),
        },
        {
          img: require('../assets/image/Rectangle512.png'),
        },
        {
          img: require('../assets/image/Rectangle513.png'),
        },
        {
          img: require('../assets/image/Rectangle514.png'),
        },
        {
          img: require('../assets/image/Rectangle515.png'),
        },
        {
          img: require('../assets/image/Rectangle516.png'),
        },
        {
          img: require('../assets/image/Rectangle517.png'),
        },
        {
          img: require('../assets/image/Rectangle518.png'),
        },
      ],
      person: [
        {
          img: require('../assets/image/person1.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person2.jpg'),
          name: '이병현',
          movie: '미스터 선샤인',
        },
        {
          img: require('../assets/image/person3.jpg'),
          name: '이와이 슌지',
          movie: '러브레터',
        },
        {
          img: require('../assets/image/person4.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person5.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person6.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person7.jpg'),
          name: '신카이 마코토',
          movie: '시간을 달리는 소녀',
        },
        {
          img: require('../assets/image/person8.jpg'),
          name: '한효주',
          movie: '시간을 달리는 소녀',
        },
        {
          img: require('../assets/image/person9.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
        {
          img: require('../assets/image/person10.jpg'),
          name: '한효주',
          movie: '광해 왕이된 남자',
        },
      ],
    }
  }
};
</script>

<style scoped>
  #warp{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 56px 40px 0;
  }

  h2{
    color: var(--text-color3);
    display: block;
    margin-bottom: 20px;

  }
  hr{
    width: 100%;
    height: 1px;
    padding: 0;
    margin: 1rem 0;
    color: #eee;
  }
  .movieTitle{
    margin-top: -10px;
    position: relative;
    width: calc(100% + 80px);
    margin-left: -40px;
    position: relative;
    aspect-ratio: 3.6 / 1.15;
  }
  .movieTitle:hover .video{
    display: block;
  }
  .movieTitle:hover .movieText{
    display: none;
  }
  .video{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: none;
  }
  video{
    width: 100%;
    object-fit: cover;
  }
  .movieImage{
    position: absolute;
    bottom: 0;
    left: 0;
    aspect-ratio: 16 / 5;
    width: 100%;
  }
  .image{
    background: url(../assets/image/image18.png) center center/cover;
    width: 100%;
    height: 100%;
    position: relative;
  }


  .movieText{
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 40px;
    color: white;
    gap: 10px;
    flex-direction: column;
    width: 500px;
  }
  .movieText h1{
  }
  .movieText p{
    font-size: 18px;
    white-space: pre-wrap;
    letter-spacing: 0;
    line-height: 1;
  }
  .bgi{
    background: url(../assets/image/fontImage.png) left bottom / contain no-repeat;
    z-index: 1;
    width: 70%;
    height: 160px;
  }


  .contants{
    width: 100%;
    margin: 40px 0;
  }  
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: space-between;
}

.swiper-slide img {
  width: 100%;
}

.swiper {
  width: 100%;
  margin: 20px auto;
}
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
.swiper-button-prev::after{
  width: 10px;
  height: 10px;
}

.textGroup{
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--text-color3);
  margin-bottom: 5px;
}

.textGroup span{
  font-size: var(--size5);
  font-weight: bold;
  margin-bottom: 1px;
}

.textGroup h2{
  font-size: var(--size3);
  margin-bottom: 1px;
}
.textGroup p{
  font-size: var(--size4);
  font-weight:lighter;
}

.tagContents{
  margin: 32px 0;
}
.swiper-button-prev::after{
  position: fixed;
  left: 0;
  top: 0;
}

.tagGnb h2{
  font-size: 18px;
  font-weight: bold;
}
.onlyTxt{
  display: flex;
  justify-content: space-between;
}

.onlyImage{
  border-radius: 2%;
  overflow: hidden;
  cursor: pointer;
}
.tagGnb > .swiper{
  margin: 5px auto;
}
.person{
  /* border-radius: 50%; */

}

.personImage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  cursor: pointer;
}
.personImage > .personImg{
  border-radius: 50%;
  overflow: hidden;
}
.personImg > img{
  width: 100%;
}
.personImage h4{
  font-size: 18px;
  padding: 4px 0;
}
.personImage p{
  font-size: 14px;
}
.perGnb > .onlyTxt > h2{
  font-size: 18px;
  font-weight: bold;
}
@media (max-width: 1024px){}
@media (max-width: 568px){}

</style>