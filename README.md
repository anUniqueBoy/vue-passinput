# vue-passinput
vue写的支付密码输入框组件，仿京东，可以清空密码框，获取密码框输入的内容，以及密码框颜色

安装：npm install --save vue-passinput

使用：

1.在main.js引用

import vuePassinput from 'vue-passinput'
Vue.use(vuePassinput)

2.在组件中使用

参数：
id:必传（为了区别其他密码框）
paypassHave：输入的内容，为空时则可清空密码输入框组件
linecolor：非必填 密码输入框的颜色值，不填时默认为#eeeeee

方法：
chagePass：监听密码输入框组件的输入值

<vuePassinput id="paypass" :paypassHave="paypassHave" v-on:chagePass="chagePass" linecolor="#333333"></vuePassinput>

这个密码输入框解决了浏览器记住密码的问题
