/*
 * zzllrr Mather effects
 * modified from 3-rd party Open Source JS programs
 * zzllrr@gmail
 * Released under MIT License
 * 基于第三方特效，并作适当修改
 */


//页面下雪 snow()	https://www.jb51.net/article/129477.htm?pc
function snow() {
	$('#Caps > .snow').remove();
      //1、定义一片雪花模板
      var flake = $("<div class=snow></div>").css({
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
      localStorage.timeids=(localStorage.timeids||'')+' '+setInterval(function() {
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
        flake.clone().appendTo($('#Caps')).css({
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



function create_canvas(cl) {
    const s = document.createElement("canvas");

    s.width = innerWidth;
    s.height = innerHeight;
    s.style.position = "absolute";
    s.style.top = 0;
    s.style.left = 0;
    $('#Caps').append(s);
    $('#Caps canvas').last().addClass(cl||'effects');
    return s.getContext("2d");
}
//勾股树 https://github.com/gumienny/canvas-webgl-etc
function Pythagorean_Tree(){ 
	
    const MAX_LIMIT = 12;

    const min   = Math.min;
    const max   = Math.max;
    const abs   = Math.abs;
    const floor = Math.floor;
    const pi    = Math.PI;

	$('#Caps > .Pythagorean_Tree').remove();
    const c = create_canvas('Pythagorean_Tree');

	

    let limit = 7;
    let cos_ratio = 0;
    let sin_ratio = 0;
    let global_angle = 0.2 * pi;
    
    const rgb_1 = [Random(256)-1,Random(256)-1,Random(256)-1];//[71,  242, 232];
    const rgb_2 = [Random(256)-1,Random(256)-1,Random(256)-1];//[247, 131, 254];
    let colors = get_gradient(rgb_1, rgb_2, limit);

    function set_angle(y) {
        return (pi / 2) * (y / innerHeight);
    }

    function get_gradient(from, to, steps = limit) {
        const colors = [];

        steps = max(steps, 2);

        for (let i = 0; i < steps; i++) {
            colors[i] = "rgb("
                + abs(from[0] + i * floor((to[0] - from[0]) / steps)) + ","
                + abs(from[1] + i * floor((to[1] - from[1]) / steps)) + ","
                + abs(from[2] + i * floor((to[2] - from[2]) / steps)) + ")";
        }

        return colors;
    }

    function rec(params) {
        let {left, right, angle, level} = params;

        c.rotate(angle);

        if (left >= 1) {
            c.fillStyle = colors[level - 1];
            c.fillRect(-left / 2, -left - right / 2, left, left);
        }

        if (level < limit) {
            c.translate(0, -left - right / 2);
            c.save();

            right = left * sin_ratio;
            left = left * cos_ratio;

            rec({"angle": -global_angle, left, right, "level": level + 1});
            rec({"angle": pi / 2 - global_angle, "right": left, "left": right, "level": level + 1});

        } else {
            c.restore();
        }
    }

    function tree() {

	    let width = innerWidth;
	    let height = innerHeight;

        cos_ratio = Math.cos(global_angle);
        sin_ratio = Math.sin(global_angle);

        c.save();

        var ctx=$('#caps')[0].getContext('2d');
        var imgD = ctx.getImageData(0,0,innerWidth,innerHeight);
        c.putImageData(imgD, 0, 0);
        
        /*
        c.fillStyle = "black";
        c.fillRect(0, 0, width, height);
        */
        c.translate(width / 2, height);
        c.save();
        rec({"angle": 0, "left": height / 5, "right": 0, "level": 1});
        c.restore();
    }

    
    ["touchmove", "touchstart"].forEach(event_name => {
        c.canvas.addEventListener(event_name, evt => {
            evt.preventDefault();
            global_angle = set_angle(evt.changedTouches[0].pageY - c.canvas.getBoundingClientRect().top);

            tree();
        } );
    } );

    c.canvas.addEventListener("mousemove", evt => {
        evt.preventDefault();
        global_angle = set_angle(evt.clientY - c.canvas.getBoundingClientRect().top);
        tree();
    });

    window.addEventListener("keydown", evt => {
        let c = evt.keyCode;

        if (c === 38 || c === 39) {
            limit = min(++limit, MAX_LIMIT);
        } else if (c === 37 || c === 40) {
            limit = max(--limit, 1);
        }

        colors = get_gradient(rgb_1, rgb_2, limit);
        tree();
    });

    window.addEventListener("resize", () => {
        c.canvas.width  = innerWidth;
        c.canvas.height = innerHeight;
        tree();
    });

    tree();

}

//旋转环 https://github.com/gumienny/canvas-webgl-etc
function ring(){

    const R       = 70;
    const RR      = 170;
    const AMOUNT  = 90;
    const PI      = Math.PI;
    const FPS     = 30;
    const COLOR_1 = RandomColor();//"#ff0b1d";
    const COLOR_2 = RandomColor();//"#310050";
    const SIDES   = 8;
    const BEND    = 3;
    const X       = 0.95;


    let angle     = 0;

	$('#Caps > .ring').remove();
    function draw_slice(ctx, i) {
        ctx.save();
        ctx.rotate(i / AMOUNT * PI * 2);
        ctx.translate(RR, 0);
        ctx.rotate(angle + BEND * (i / AMOUNT) * (PI / 3));

        ctx.fillStyle = (i % 2 == 0) ? COLOR_1 : COLOR_2;
        ctx.beginPath();
        ctx.moveTo(R, 0);
        ctx.lineTo(R * X, 0);
        for (let j = 1; j < SIDES; j++) {
            ctx.lineTo(R * Math.cos(j / SIDES * PI * 2), R * Math.sin(j / SIDES * PI * 2));
            ctx.lineTo(R * X * Math.cos(j / SIDES * PI * 2), R * X * Math.sin(j / SIDES * PI * 2));
        }

        ctx.globalCompositeOperation = i >= AMOUNT + 2 ? "destination-out" : "source-over";
        ctx.fill();
        ctx.restore();
    }

    const c = create_canvas('ring');
    const m = create_canvas('ring');

    function draw(){
    	const WIDTH   = innerWidth;
    	const HEIGHT  = innerHeight;
    	/*
    	var imgD = ctx.getImageData(0,0,innerWidth,innerHeight);
        c.putImageData(imgD, 0, 0);
        */
       // c.fillRect(0, 0, WIDTH, HEIGHT);
        m.clearRect(0, 0, WIDTH, HEIGHT);

        c.save();
        m.save();

        c.translate(WIDTH / 2, HEIGHT / 2);
        m.translate(WIDTH / 2, HEIGHT / 2);

        for (let i = 0; i < AMOUNT + 15; i++) {
            if (i < AMOUNT - 15) {
                draw_slice(c, i);
            } else {
                draw_slice(m, i);
            }
        }
        
        c.restore();
        m.restore();
    }

    let fps, fpsInterval, startTime, now, then, elapsed;

    function animate() {
        requestAnimationFrame(animate);

        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            angle += 0.04;
            draw();
        }
    }

    fpsInterval = 1000 / FPS;
    then = Date.now();
    startTime = then;
    
    var ctx=$('#caps')[0].getContext('2d');
    var imgD = ctx.getImageData(0,0,innerWidth,innerHeight);
    c.putImageData(imgD, 0, 0);
    
    animate();

    window.addEventListener("resize", () => {
	    var imgD = ctx.getImageData(0,0,innerWidth,innerHeight);
	    c.putImageData(imgD, 0, 0);
    });
}