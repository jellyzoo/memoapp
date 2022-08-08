<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 모달창 -->
    <div>
      <transition name="fade" mode="out-in">
        <div class="black_bg" v-if="modalOpen == true">
          <div class="white_bg">
            <h1>모달창 입니다.</h1>
            <button @click="modalOpen = false">닫기</button>
          </div>
        </div>
      </transition>
      <button @click="modalOpen = true">모달창열기</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {},
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>
