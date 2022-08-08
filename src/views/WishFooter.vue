<template lang="html">
  <div class="buttonContainer">
    <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearWish">모든 일정 삭제</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearWish() {
      const isAllRemover = confirm("정말 모든 일정을 삭제하시겠습니까?");
      if (isAllRemover) {
        this.$emit("removeAllOfChild");
      }
    },
  },
};
</script>

<style lang="css" scoped>
.buttonContainer {
  margin: 0 auto;
  cursor: pointer;
}
.clearAllContainer {
  width: 7.5em;
  height: 50px;
  line-height: 50px;
  background: linear-gradient(to right, #ff4c4d, #b30000);
  border-radius: 5px;
  margin: 25px auto 0px;
  padding: 0px 35px;
}
.clearAllBtn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -1px;
  color: white;
  display: block;
}
</style>
