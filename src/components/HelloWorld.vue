
<template>
  <h1>{{ msg }}</h1>
  <p>count:{{count}}</p>
  <p>doubleCount:{{doubleCount}}</p>
  <p>{{msg2}}</p>
  <p ref="desc"></p>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

</template>

<script>
import {computed, onMounted, onUnmounted, reactive, ref, toRef, toRefs, watch} from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    // composition Api 的使用
    //对象响应式 （引用数据类型）
   const {count,doubleCount} = useCount();
   //单值响应式 （基本数据类型）
   const msg2 = ref("helloa");
   //使用元素引用
   const desc = ref(null);
   //监听器
   watch(count,(val,oldVal)=>{
     const p = desc.value;
     p.textContent = `desc value from ${oldVal} to ${val}`;
   })
    return{
      count,
      doubleCount,
      desc,
      msg2
    }
  }
}
function useCount(){
   const a =reactive({
      count:1,
      doubleCount:computed(()=>{
        return a.count *2;
      })
    });
    let timer;
    onMounted(()=>{
        timer = setInterval(()=>{
      a.count++;
    },1000);
    });
    onUnmounted(()=>{
      clearInterval(timer);
    });
    return toRefs(a);
}
</script>