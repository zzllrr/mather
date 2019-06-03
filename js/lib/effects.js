/*
 * ZIG - zzllrr Imager Geek <http://goo.gl/n8SMk>
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 * 基于第三方特效，并作适当修改

 */


//页面下雪 snow()	https://www.jb51.net/article/129477.htm?pc
function snow() {
      //1、定义一片雪花模板
      var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
      }).html("❄");

      //获取页面的宽度，利用这个数来算出，雪花开始时left的值
      var documentWidth = $(document).width();

      //获取页面的高度 相当于雪花下落结束时Y轴的位置
      var documentHieght = $(document).height()*0.8;

      //定义生成一片雪花的毫秒数
      var millisec = 500;
      //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
      setInterval(function() {
        //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
        var startLeft = Math.random() * documentWidth;

        //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
        var endLeft = Math.random() * documentWidth;

        //随机生成雪花大小
        var flakeSize = 5 + 20 * Math.random();

        //随机生成雪花下落持续时间
        var durationTime = 4000 + 7000 * Math.random();

        //随机生成雪花下落 开始 时的透明度
        var startOpacity = 0.7 + 0.3 * Math.random();

        //随机生成雪花下落 结束 时的透明度
        var endOpacity = 0.2 + 0.2 * Math.random();

        //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中
        flake.clone().appendTo($("body")).css({
          "left": startLeft,
          "opacity": startOpacity,
          "font-size": flakeSize,
          "top": "-25px",
        }).animate({ //执行动画
          "left": endLeft,
          "opacity": endOpacity,
          "top": documentHieght
        }, durationTime, function() {
          //4、当雪花落下后，删除雪花。
          $(this).remove(); 
        });
      }, millisec);
}

