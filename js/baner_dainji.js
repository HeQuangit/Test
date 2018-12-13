		var objulimg = $(".box3_photos ul");
		var objkzulimg = $(".box3_ul ul");
//		var objnerong = $(".box3_bgtq").children("a").children("h3");
		var numi = 0;
//		var bojnr = objulimg.children().eq(0).children().children("img").attr("alt");
//		objnerong.text(bojnr);
		objulimg.children().eq(0).css("display","block");
		objkzulimg.children().eq(0).children("span").css("background","#ff6600");
		objkzulimg.children().mousemove(function(){
			numi = $(this).index();
			$(this).children("span").css("background","#ff6600");
			$(this).siblings().children("span").css("background","#aaa6a0");
			objulimg.children().eq(numi).fadeIn().siblings().fadeOut();
//			bojnr = objulimg.children().eq(numi).children().children("img").attr("alt");
//			objnerong.text(bojnr);
		});
		var lbtimes = setInterval(show,3000);
		
		function show(){
			numi ++;
			if(numi > 4){
				numi = 0;
			}
			objulimg.children().eq(numi).css("display","block").siblings().fadeOut();
			objkzulimg.children().eq(numi).children("span").css("background","#ff6600");
			objkzulimg.children().eq(numi).siblings().children("span").css("background","#aaa6a0")
//			bojnr = objulimg.children().eq(numi).children().children("img").attr("alt");
//			objnerong.text(bojnr);
		}