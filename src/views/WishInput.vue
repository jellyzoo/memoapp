<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-focus
      v-model="newWishItem"
      v-on:keyup.enter="addWish"
      placeholder="해야할 일을 입력하세요."
    />

    <span class="addContainer" v-on:click="addWish">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>팝업 타이틀</h3>
      </template>
      <template v-slot:footer>
        <span @click="showModal = false">
          할 일을 입력하세요.
          <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  data() {
    return {
      newWishItem: "",

      showModal: false,
    };
  },

  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    addWish() {
      if (this.newWishItem !== "") {
        const value = this.newWishItem && this.newWishItem.trim();
        const key = "vue-wish-" + new Date().getTime();
        this.$emit("addWish", key, value, new Date().getTime());

        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newWishItem = "";
    },
  },

  components: {
    Modal: Modal,
  },
};
</script>

<style lang="css" scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin-bottom: 25px;
}
.inputBox input {
  border-style: none;
  font-size: 1.2em;
  font-weight: bold;
  width: 12em;
  color: #2f3b52;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #ff4c4d, #b30000);
  display: inline-block;
  width: 3em;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
