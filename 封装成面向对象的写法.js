
<script>
/*
  核心思想：
    把逻辑封装到函数里面，把函数存到数组里面，把数组存到对象身上，使用一个特殊的键获取

  封装
    面向对象
      - 特征
        -
      - 行为
        - 添加函数的
        - 调用多个函数
*/

// 现在没有必要每次使用都new，所以可以不使用构造函数或者是类的方式创建
let Events = {
  // 这个添加函数的功能，叫订阅
  // 往数组里面添加方法的过程中，有键和函数是可变的，作为参数
  add:function(key,fn){
    // 我们要把所有的函数放到同一个数组，但是该数组又是依赖于一个键的，到底有没有这个数组，不知道，需要判断，
    // 判断这个键的数组是否存在，如果存在，就往里面添加函数即可，如果没有存在，就创建一个新的数组
    if(!(this[key] instanceof Array)){
      this[key] = [];
    }
    this[key].push(fn);
  },
  // 一次性全部把函数调用的功能，叫发布
  // 在调用的时候，需要把每个函数拿出来调用，但是函数放在了数组里面，数组放在this身上，根据一个指定的键获取
  trigger:function(key){
    // 遍历数组，把数组里面的每个函数，取出来，调用
    for(let i = 0; i < this[key].length; i++){
      this[key][i]();
    }
  }
};

// 1期项目的代码
Events.add('login',function(){
  console.log('200行代码,用于存储用户数据的');
});
// 2期 ，产品要求加入更改用户头像的功能
Events.add('login',function(){
  console.log('修改用户头像的50行代码');
});
// 3期项目，加载购物车
Events.add('login',function(){
  console.log('加载购物车的代码，总共400行');
});

// 获取元素，注册点击
let btn = document.querySelector('#btn');
btn.onclick = function(){
  Events.trigger('login');
}

</script>
