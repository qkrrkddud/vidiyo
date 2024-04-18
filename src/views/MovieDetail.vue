<template>
  <div class="wrap">
    <h1>길 정거</h1>
    <div class="content">
      <div class="image-container">
        <div class="poster" v-for="image in images" :key="image" @click="$router.push('/detail')">
          <div class="poster-inner">
            <img :src="image.img" alt="">
            <div class="text-overlay">
              <h2>{{ image.title }}</h2>
              <p>{{ image.duration }}</p>
              <p>{{ image.genre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      images:[
        {
          img: require("../assets/image/poster1.jpg"),
          title: "이프온리",
          duration: "1시간 35분",
          genre: "코미디 • 죽음",
        },
        {
          img: require("../assets/image/poster2.jpg"),
          title: "지니어스 독",
          duration: "1시간 30분",
          genre: "코미디 • SF",
        },
        {
          img: require("../assets/image/poster3.jpg"),
          title: "틴 스피릿",
          duration: "1시간 33분",
          genre: "음악 • 드라마",
        },
        {
          img: require("../assets/image/poster4.jpg"),
          title: "내가 널 사랑할 수 없는 10가지 이유",
          duration: "1시간 37분",
          genre: "코미디 • 로맨스",
        },
        {
          img: require("../assets/image/poster5.jpg"),
          title: "크리스마스 바운티",
          duration: "1시간 30분",
          genre: "액션 • 코미디",
        },
        {
          img: require("../assets/image/poster6.jpg"),
          title: "크리스마스 큐피드",
          duration: "1시간 25분",
          genre: "판타지 • 코미디",
        },
        {
          img: require("../assets/image/poster6.jpg"),
          title: "크리스마스 큐피드",
          duration: "1시간 25분",
          genre: "판타지 • 코미디",
        },
        {
          img: require("../assets/image/poster6.jpg"),
          title: "크리스마스 큐피드",
          duration: "1시간 25분",
          genre: "판타지 • 코미디",
        },
        ]
    }
  }
}
</script>

<style scoped>
  .wrap{
    padding: 56px 0 0 40px;
    color: #fff;
    min-height: 523px;
    box-sizing: border-box;
  }
  h1{
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 2.25rem;
  }
  .image-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .poster-inner{
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    width: 190px;
    height: 280px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .poster img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: transform 0.5s ease;
  }
 
  .text-overlay{
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .poster:hover{
    transform: scale(1.1);
    cursor: pointer;
    margin: 0 10px;
    z-index: 50;
  }
  .poster-inner:hover .text-overlay{
    opacity: 1;
  }
  .text-overlay h2,.text-overlay p{
    margin: 0; 
  }
  .text-overlay h2{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .text-overlay p{
    font-size: 14px;
    color: #ededed;
  }
</style>