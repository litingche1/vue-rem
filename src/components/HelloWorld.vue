<template>
  <div class="hello">
    <div class="header">
      <ul class="header-content">
        <li class="header-item">推荐</li>
        <li class="header-item">新闻</li>
        <li class="header-item">娱乐</li>
        <li class="header-item">体育</li>
        <li class="header-item">图片</li>
        <li class="header-item">财经</li>
      </ul>
    </div>
    <div class="banner-content">
        <img src="../assets/a.png" alt="" class="banner">
        <p class="banner-title">2017网易时尚跨界书店</p>
    </div>
    <div class="news-content">
      <ul>
        <li class="news-item">
          <div class="item-inner">
            <img src="../assets/a.png" alt="" class="news-img">
            <p class="news-title">天津市人民政府副秘书长，办公厅党组成员杜强被查</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../assets/a.png" alt="" class="news-img">
            <p class="news-title">天津市人民政府副秘书长，办公厅党组成员杜强被查</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../assets/a.png" alt="" class="news-img">
            <p class="news-title">天津市人民政府副秘书长，办公厅党组成员杜强被查</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
        <li class="news-item">
          <div class="item-inner">
            <img src="../assets/a.png" alt="" class="news-img">
            <p class="news-title">天津市人民政府副秘书长，办公厅党组成员杜强被查</p>
            <span class="time">1小时前</span>
            <span class="num">99</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss'>
.header {
  height: px2rem(40px);
  width: 100%;
  background:$df;
  // background: red;
  padding-left: px2rem(23px);
  box-sizing: border-box;
  .header-content{
    height: px2rem(40px);
  width: 100%;
  }
  .header-item {
    color: #ffcdce;
    font-size: px2rem(16px);
    margin-right: px2rem(20px);
    float: left;
    line-height: px2rem(40px);
    &:nth-child(2) {
      color: #fff;
      font-size: px2rem(17px);
    }
  }
}
.banner-content{
  position:relative;
  .banner{
  display:block;
  width:100%;
  height:px2rem(190px);
  }
  .banner-title{
    position:absolute;
    left:px2rem(15px);
    bottom:px2rem(15px);
    font-size: px2rem(16px);
    color:#fff;
  }
}
.news-content{
  .news-item{
    width:100%;
    height:px2rem(90px);
    padding-left: px2rem(15px);
    padding-right: px2rem(15px);
    box-sizing: border-box;
  }
  .item-inner{
    position:relative;
    overflow: hidden;
    height: 100%;
    border-bottom:px2rem(1px) solid #e5e5e5;
    
  }
  .news-img{float: left;
    display: block;
    
    width:px2rem(95px);
    height:px2rem(70px);
    margin-top:px2rem(10px);
    margin-right:px2rem(15px) ;
  }
  .news-title{
    // width:calc(100% - 105px);
    // margin-left: px2rem(105px);
    // float: left;
    text-align: left;
    color:#404040;
    font-size:px2rem(17px);
    margin-top: px2rem(16px);
    line-height: px2rem(20px)

  }
  .time{
    position:absolute;
    left: px2rem(115px);
    bottom: px2rem(14px);
    color:#888;
    font-size:px2rem(12px);
  }
  .num{
    position: absolute;
    right: px2rem(4px);
     color:#888;
    font-size:px2rem(12px);
    bottom:px2rem(14px);
    &::before{
      content:'';
      display: block;
   position:absolute;
   background: url('../assets/logo.png');
   background-size: contain;
   width:px2rem(13px);
   height:px2rem(12px);
  //  top:px2rem(0.5px);
   left:px2rem(-23px);
    }
  }
}
h3 {
  margin: 40px 0 0;
  p {
    color: red;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
