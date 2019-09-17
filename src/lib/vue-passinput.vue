<template>
  <div class="pass-paybox" :id="`ids_${id}`">
    <div v-html="menuStyleText"></div>
    <input type="text"
      readonly
      onfocus="this.removeAttribute('readonly');"
      maxlength="1"
      autocomplete="new-password"
      @input="changeInput"
      @click="changePwd"
      v-model="pwdList[i]"
      @keyup="keyUp($event)"
      @keydown="oldPwdList = pwdList.length"
      class="pass-input shortInput"
      v-for="(v, i) in 6" :key="i">
  </div>
</template>
<script>
export default {
  name:'vuePassinput',
  data() {
    return {
      pwdList: [],
      nowFocus: null,
      isDelete: false,
      ipt: "",
      menuStyleText:''
    };
  },
  props: {
    "id": String, // 当一个页面有多个密码输入框时，用id来区分
    "paypassHave" : String,//如果为空则清空整个输入框
    "linecolor": String //颜色
  },
  watch: {
    paypassHave: {
      handler(newVal, oldVal) {
        if (newVal=='') {
          this.pwdList=[]
        }
      }
    }
  },
  mounted() {
    this.ipt = document.querySelectorAll(`#ids_${this.id} .shortInput`);
    this.menuStyleText = `<style>
      .pass-input{
        border: 1px solid ${this.linecolor ? this.linecolor : '#eeeeee'};
      }
      .pass-input:last-child{
        border-right: 1px solid ${this.linecolor ? this.linecolor + ' !important' : '#eeeeee !important'};
      }
    </style>`
  },
  methods: {
    keyUp(ev) {
      let index = this.pwdList.length;
      if (!index) return;
      if (ev.keyCode === 8) {
        this.isDelete = true;
        if (this.oldPwdList === this.pwdList.length) {
          if (index === this.pwdList.length) {
            this.pwdList.pop();
          }
          index--;
        } else {
          index > 0 && index--;
        }
        this.ipt[index].focus();
      } else if (
        this.isDelete &&
        index === this.pwdList.length &&
        /^\d$/.test(ev.key)
      ) {
        this.isDelete = false;
        this.pwdList.pop();
        this.pwdList.push(ev.key);
        this.ipt[this.pwdList.length] && this.ipt[this.pwdList.length].focus();
      }
      this.$emit("chagePass", this.pwdList.join(""));
    },
    changePwd() {
      let index = this.pwdList.length;
      index === 6 && index--;
      this.ipt[index].focus();
      if(this.pwdList.length!=6){
        this.ipt[index].type="text"
      }
    },
    changeInput() {
      let index = this.pwdList.length;
      let val = this.pwdList[index - 1];
      if (!/[0-9]/.test(val)) {
        this.pwdList.pop();
        return;
      }
      if (!val) {
        this.pwdList.pop();
        index--;
        if (index > 0) this.ipt[index - 1].focus();
      } else {
        if (index < 6) this.ipt[index].focus();
      }
      this.ipt[index-1].type="password"
    }
  }
};
</script>
<style lang="scss" scoped>
.pass-paybox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .pass-input {
    outline: none;
    color:#2b2b2b;
    background: #ffffff;
    width: 35px;
    height: 32px;
    border-right: none;
    text-align: center;
  }
  .pass-input:last-child {
  }
}
</style>