<template>
  <div id="warp">
    <a class="icon" @click="$router.push('/'), closeSearch()">
      <img src="../assets/image/vidiyo logo 5.png" alt="" />
    </a>
    <div class="menu">
      <ul class="gnb" @click="urlFunc">
        <li class="svg1" @click="$router.push('/'), closeSearch()">
          <span class="material-icons">home</span>
          <span class="menu">홈</span>
        </li>
        <li class="svg2" @click="$router.push('/Eval'), closeSearch()">
          <span class="material-icons">star_border</span>
          <span class="menu">평가</span>
        </li>
        <li class="svg3" @click="$router.push('/search'), searchView()">
          <span class="material-icons">search</span>
          <span class="menu">검색</span>
        </li>
        <li class="svg4" @click="$router.push('/storage'),closeSearch()">
          <span class="material-icons">inbox</span>
          <span class="menu">보관함</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    urlFunc() {
      var url = window.location.href;
      console.log(url);
    },
    searchView() {
      this.$store.commit("searchView");
    },
    closeSearch() {
      this.$store.commit("closeSearch");
    },
  },
};
</script>

<style scoped>
#warp {
  background-color: var(--sub-color2);
  color: var(--text-color3);
  width: 240px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: 5010;
}
.icon {
  display: block;
  margin: 24px 0 0 16px;
  cursor: pointer;
}
.icon img {
}
.gnb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 3.375rem;
}
.gnb > li {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  cursor: pointer;
  color: var(--text-color1);
}
.gnb > li:hover {
  color: var(--text-color3);
}
li img {
  margin-right: 1rem;
}
.material-icons{
  color: white;
}
li .menu{
  margin-left: 1rem;
}

</style>
