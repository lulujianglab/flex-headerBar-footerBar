document.documentElement.style.fontSize = window.innerWidth / 10 + 'px'

// 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    // 分页器
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}) 

var app = new Vue({
    el: '#app',
    data: {
        
        cards: [
            {name: '徐小平', introduction: '真格基金创始人'},
            {name: '徐小平', introduction: '真格基金创始人'},
            {name: '徐小平', introduction: '真格基金创始人'},
            {name: '徐小平', introduction: '真格基金创始人'},
            {name: '徐小平', introduction: '真格基金创始人'},
            {name: '徐小平', introduction: '真格基金创始人'}
        ]
    }
  })