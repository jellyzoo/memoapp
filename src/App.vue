<template>
  <div id="app">
    <WishHeader></WishHeader>
    <WishInput v-on:addWish="addWish"></WishInput>
    <WishList v-bind:propsData="wishItems" @removeWish="removeWish" @editWish="editWish"></WishList>
    <WishFooter v-on:removeAllOfChild="removeAllOfParents"></WishFooter>
  </div>
</template>
<script>
import WishHeader from "./views/WishHeader.vue";
import WishInput from "./views/WishInput.vue";
import WishList from "./views/WishList.vue";
import WishFooter from "./views/WishFooter.vue";

export default {
  data() {
    return {
      wishItems: []
    };
  },
  created() {
    if (localStorage.getItem("vue-wish")) {
      this.wishItems = JSON.parse(localStorage.getItem("vue-wish"));
      //JSON문자열의 구문을 분석해 결과에서 javascript값이나 객체를 생성
      this.wishItems.sort(function(a, b) {
        return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
      });
    }
  },
  methods: {
    addWish(key, value, date) {
      this.wishItems.push({
        key,
        value,
        createdDate: date, //생성된 날짜
        modifiedDate: date //수정된 날짜
      });
      localStorage.setItem("vue-wish", JSON.stringify(this.wishItems));
      //Storage.setItem():스토리지의 키값을 전달할때 지정된 스토리지객체에 추가하거나 이미 존재하는 경우 업데이트
      //JSON.stringify(): 자바스크립트 값이나 객체를 json문자열로 변환
    },
    removeAllOfParents() {
      //모두삭제
      this.wishItems = [];
      localStorage.setItem("vue-wish", JSON.stringify(this.wishItems));
    },
    removeWish(keyOfWishItem, index) {
      this.wishItems.splice(index, 1);
      localStorage.setItem("vue-wish", JSON.stringify(this.wishItems));
    },
    editWish(keyOfWishItem, index, editText, modifiedDate) {
      const item = this.wishItems[index];
      this.wishItems.splice(index, 1, {
        key: keyOfWishItem,
        value: editText,
        createdDate: item.createdDate,
        modifiedDate: modifiedDate
      });
      localStorage.setItem("vue-wish", JSON.stringify(this.wishItems));
    }
  },

  components: {
    WishHeader: WishHeader,
    WishInput: WishInput,
    WishList: WishList,
    WishFooter: WishFooter
  }
};
</script>

<style></style>
