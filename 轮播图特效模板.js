<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./swiper/css/swiper.css">
    <style>
        * {
          margin: 0;
          padding: 0;
        }
    
        img {
          width: 100%;
        }
        .swiper-container {
          width: 600px;
        }
      </style>
    </head>
    
</head>
<body>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#">
              <img src="./images/1.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="./images/5.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="./images/3.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="./images/4.jpg" alt="">
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>

    
</body>
<script src="./swiper/js/swiper.js"></script>

<script>
/* 第三步： 初始化swiper */
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环滚动
    // 设置分页器的容器
    pagination: {
      el: '.swiper-pagination',
    },
    // 配置左右按钮的选择器
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 自动切换
    // autoplay : true,
    autoplay: {
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // 切换特效
    effect : 'cube'
  })

  
</script>
</html>