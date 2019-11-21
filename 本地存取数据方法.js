

 存
 localStorage.setItem(键,值);

//  注意： 值只能是字符串
//             如果你存的不是字符串，会自动的帮你先转换为字符串，在存储进去
//             如果是复杂类型，存进去的不是我们想要存的 —— 因为它的转换规则不是我们想要的
//             如果是复杂类型，我们在存进去之前，需要自己把复杂类型转换为们想要的字符串 —— JSON格式
      取
        localStorage.getItem(键);


        // 演示本地存储只能存字符串
        let person = {
            name : 'xx',
            age : yy,
            weight : zzz
          }
          localStorage.setItem('person', JSON.stringify(person))
        

     /*      js里面封装了把对象转换为JSON格式的API

          JSON.stringify(复杂类型)
            会返回满足JSON格式要求的字符串
      
        js里面还封装了反向转换的API
          把满足JSON格式的字符串，转换为原来的对象
      
          JSON.parse(满足JSON格式的字符串);
            返回一个复杂类型
              可能是数组，可能是对象 */
      

          let time = formatDate();

        //   let id = 得到数组里面的最大id，然后在+1
          let id = 0;
          arr.forEach(function(e){
            if(id < e.id){
              id = e.id;
            }
            id++;


            let obj = {
                id:id,
                content: content,
                time: time
              };

          let arr = JSON.parse(data);
      // 得到按钮所对应的id
      let id = e.target.dataset.id;


      利用h5里面提供的新的方法实现简化
      arr = arr.filter(function(e){
        return e.id != id;
      }

      // 把新数据覆盖回本地
      let json = JSON.stringify(arr);
      localStorage.setItem('键',json);
    

      
  /* 演示把JSON格式字符串转换为原来的数据 */
      let str = '{ "name":"xx", "age":数字,"gender": y }';
      // 把str转换为对象
      JSON.parse(str);
      
