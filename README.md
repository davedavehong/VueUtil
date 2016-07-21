# Vue.js的实践

Vue是个非常不错的数据渲染的框架，简洁易上手，省去了很多js方面的工作量。本工程根据官方教程，选择一些实际生产环境下经常需要实现的功能点来进行一些实践（和吐槽）。其实也发现Vue本身也会存在一些问题，而且有一些功能点不太明白能用来干嘛，但总体来说，这是一个非常不错的工具，尤其针对工程中有大量数据需要渲染的场景。

**版本**：`Vue.js v1.0.24`

**官网教程**：[起步 - vue.js](http://cn.vuejs.org/guide/)


* 起步实例
入门超级简单，如下代码，在js中绑定元素即可实现数据的**双向绑定**。这简洁程度真是太有诱惑了。

>   
    <div id="app">
    <p>{{ message }}</p>
    <input v-model="message"></div>
html部分

> 
    new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue.js!'
        }
    })
js部分

####这张图就能很好的展示Vue的作用

![vue-数据驱动](http://cn.vuejs.org/images/mvvm.png)

绑定点击事件用不了，

