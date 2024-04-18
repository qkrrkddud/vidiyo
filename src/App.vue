<template>
  <div class="">
    <div class="exip">
      <app-header />
      <SideBar />
      <search-main />
      <AppMain />
      <app-footer />
    </div>
  </div> 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue"
import AppMain from "./components/AppMain.vue";
import AppFooter from './components/AppFooter.vue';

export default {
  components: { AppHeader, SideBar, AppMain, AppFooter },
};
</script>
<style>
@import "./assets/css/font.css";
@import "./assets/css/reset.css";

.exip{
  display: flex;
  flex-direction: column;
  padding: 56px 0 0 240px;
  overflow:hidden;
}
</style>
