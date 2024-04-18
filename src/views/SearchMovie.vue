<template>
  <div class="wrap">
    <div class="btn-wrap">
      <div class="btnGroup">
        <button type="button" class="on" @click="isActive">인기</button>
        <button type="button" @click="isActive">영화</button>
        <button type="button" @click="isActive">인물</button>
      </div>
    </div>
    <div class="popular-list c1">
      <div
        class="list"
        v-for="item in items"
        :key="item"
        @click="$router.push('/detail')"
      >
        <div class="poster-inner">
          <img :src="item.img" />
          <div class="text-overlay">
            <h2>{{ item.title }}</h2>
            <p>{{ item.duration }}</p>
            <p>{{ item.genre }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="movie-list c1">
      <div class="list" v-for="movie in movies" :key="movie">
        <div class="poster-inner">
        <img :src="movie.img" />
        <div class="text-overlay">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.duration }}</p>
            <p>{{ movie.genre }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="person-list c1">
      <div class="list2" v-for="person in people" :key="person">
        <img :src="person.img" />
        <h4>{{ person.name }}</h4>
        <p>{{ person.movie }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMovie",
  components: {},
  data() {
    return {
      items: [
        {
          img: require("../assets/image/Rectangle98.png"),
          title: "이프온리",
          duration: "1시간 35분",
          genre: "코미디 • 죽음",
        },
      ],
      movies: [
        {
          img: require("../assets/image/Rectangle90.png"),
          title: "장화홍련",
          duration: "1시간 35분",
          genre: "호러",
        },
        
      ],
      people: [
        {
          name: "한효주",
          img: require("../assets/image/person1.jpg"),
          movie: '광해 왕이된 남자'
        },
      ],
    };
  },

  methods: {
    isActive(e) {
      const btns = document.querySelectorAll(".btnGroup>button");
      const list = document.querySelectorAll(".c1");

      const targetEl = e.target;
      for (let i = 0; i < btns.length; i++) {
        if (btns[i] == targetEl) {
          btns[i].className = "on";
          list[i].style.display = "flex";
        } else {
          btns[i].className = "";
          list[i].style.display = "none";
        }
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  font-family: 'Noto sans KR';
  padding: 56px 0 0 40px;
  color: #fff;
  min-height: 523px;
  box-sizing: border-box;
}
.btnGroup {
  display: flex;
}
button {
  outline: 0;
  width: 70px;
  padding-bottom: 16px;
  color: #7c7b84;
  text-align: center;
  font-size: var(--size4);
  border: 0;
  background-color: inherit;
  font-family: 'Noto sans KR';
}
button:hover {
  color: white;
}
button.on {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.5s ease;
}
.list {
  padding: 0 6px;
  margin-bottom: 10px;
}
.poster-inner {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 190px;
  height: 280px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.c1 {
  display: flex;
  flex-wrap: wrap;
  margin-top: 96px;
  flex-direction: row;
}
.person-list > .list2 > img {
  width: 192px;
  height: 192px;
  border-radius: 50%;
  margin-right: 10px;
}
.movie-list,
.person-list {
  display: none;
}
.list2 > p,.list2 > h4 {
  color: white;
  font-size: var(--size4);
  letter-spacing: -0.96px;
  font-family: 'Noto sans KR';
  text-align: center;
  margin-top: 20px;
}
.list2 > p{
  margin-bottom: 204px;
}
.list:hover {
  transform: scale(1.1);
  cursor: pointer;
  margin: 0 10px;
  z-index: 50;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
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
.poster-inner:hover .text-overlay {
  opacity: 1;
}
.text-overlay h2,
.text-overlay p {
  margin: 0;
}
.text-overlay h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}
.text-overlay p {
  font-size: 14px;
  color: #ededed;
}
</style>