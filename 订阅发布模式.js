<body>
  <input type="button" value="登录" id="btn">
</body>
<script>
/*
  核心思想是把要做的功能放到函数里面，把函数放到一个数组里面，然后把数组存在对象里面
*/
let obj = {}
obj['loginSuccess'] = []; // 使用一个数组，把所有的和登录成功相关的函数全都放到里面存起来

// 1期项目，要把数据存储到本地
function saveData(){
  console.log('模拟了存储的过程，总共200行');
  let a = 10;
}
obj['loginSuccess'].push(saveData);

// 2期，产品要求我在登录成功的时候，修改用户的头像
function modifyUserHeadImg(){
  console.log('修改了用户的头像，总共50行代码');
  let a = 20;
}
obj['loginSuccess'].push(modifyUserHeadImg);

// 3 期，当前的网站有了一个商城的功能，有了购物车，需要在登录成功之后，加载购物车
function loadCartData(){
  console.log('加载购物车的代码，总共400行');
}
obj['loginSuccess'].push(loadCartData);

// 当我们登录成功的时候，根据一个指定的键，找到对象里面的数组，把数组里面的每个函数依次调用
btn.onclick = function(){
  let arr = obj['loginSuccess'];
  arr.forEach(e=>{
    e();
  });
}

/*
  订阅发布模式
    - 把代码解耦
      - 把代码之间的关联性降低
      - 如果某个功能的代码出问题，只需要关注该功能的代码即可，而不会，修改了这个地方的代码，可能会影响别的代码
      - 提高了代码的可维护性
      - 并且封装之后，使用起来会更加简单
*/

</script>
