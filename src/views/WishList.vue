<template lang="html">
  <section>
    <transition-group name="list" tag="ul">
      <li
        v-for="(wishItem, index) in propsData"
        :key="wishItem.key"
        class="shadow"
      >
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ wishItem.value }}
        &nbsp;<span class="textMuted">{{
          formatDate(wishItem.createdDate)
        }}</span>
        <span
          class="editBtn"
          type="button"
          @click="editWish(wishItem.key, index)"
        >
          <i class="far fa-edit" aria-hidden="true"></i>
        </span>
        <span
          class="removeBtn"
          type="button"
          @click="removeWish(wishItem.key, index)"
        >
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>

    <modal v-if="editModal" @close="editModal = false">
      <template v-slot:header style="color: #ffaa00">
        <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> 내용을
        수정합니다.
      </template>

      <template v-slot:footer>
        <span>
          <input
            type="text"
            v-model="currentWish.value"
            class="modal1"
            readonly
          /><br />
          <input
            type="text"
            v-model="editWishObj.text"
            v-on:keypress.enter="editWishAction()"
            onfocus="this.select()"
            class="modal2"
            autofocus
          /><br />
          <button type="button" @click="editWishAction()">수정</button>
          <button
            type="button"
            @click="editModal = false"
            style="margin-left: 35px"
          >
            취소
          </button>
        </span>
      </template>
    </modal>
  </section>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  props: ["propsData"],
  data() {
    return {
      editModal: false,
      currentWish: "",
      editWishObj: {
        key: "",
        index: "",
        text: "def",
      },
    };
  },

  methods: {
    removeWish(keyOfWishItem, index) {
      this.$emit("removeWish", keyOfWishItem, index);
    },

    editWish(keyOfWishItem, index) {
      this.editWishObj.index = index;
      this.currentWish = this.propsData[index];
      this.editWishObj.text = this.currentWish.value;
      this.editWishObj.key = keyOfWishItem;
      this.editModal = !this.editModal;
    },

    editWishAction(keyOfWishItem, index, editText) {
      const obj = this.editWishObj;
      this.$emit(
        "editWish",
        obj.key,
        obj.index,
        obj.text,
        new Date().getTime()
      );
      this.editModal = false;
    },

    formatDate(date) {
      const d = new Date(date);
      let month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hour = "" + d.getHours(),
        minute = "" + d.getMinutes(),
        second = "" + d.getSeconds();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      if (hour.length < 2) hour = "0" + hour;
      if (minute.length < 2) minute = "0" + minute;
      if (second.length < 2) second = "0" + second;
      return (
        [year, month, day].join("-") + " " + [hour, minute, second].join(":")
      );
    },
  },

  components: {
    Modal: Modal,
  },
};
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5em 0;
  padding: 0 0.9em;
  background: #fefefe;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.checkBtn {
  line-height: 50px;
  color: #ff8000;
  margin-right: 5px;
}
.editBtn {
  margin-left: auto;
  color: forestgreen;
  cursor: pointer;
}
.removeBtn {
  margin-left: 10px;
  color: #de4343;
  cursor: pointer;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-move {
  transition: transform 1s;
}
.textMuted {
  color: gray;
  font-size: 0.6em;
}
input {
  border-style: groove;
  width: 275px;
  padding: 5px 10px;
  border-color: #efefef;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 14px;
}
input.modal1,
input.modal2 {
  border-style: groove;
  width: 275px;
  padding: 5px 10px;
  border-color: #efefef;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 14px;
}
input.modal1 {
  color: #999999;
}
input.modal2 {
  margin-bottom: 15px;
}
button {
  padding: 5px 15px;
  border-color: #efefef;
  border-radius: 5px;
  margin-top: 15px;
  font-size: 14px;
}
</style>
