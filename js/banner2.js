		var objulimgs = $(".box3_photos_1s ul");
		var objkzulimgs = $(".box3_ul_1s ul");
//		var objnerong = $(".box3_bgtq").children("a").children("h3");
		var numis =0;

		objulimgs.children().eq(0).css("display","block");
		objkzulimgs.children().eq(0).children("span").css("background","#ff6600");
		objkzulimgs.children().mousemove(function(){
			numis = $(this).index();
			$(this).children("span").css("background","#ff6600");
			$(this).siblings().children("span").css("background","#aaa6a0");
			objulimgs.children().eq(numis).fadeIn().siblings().fadeOut();
			bojnr = objulimgs.children().eq(numis).children().children("img").attr("alt");
			objnerong.text(bojnr);
		});
		var lbtimes = setInterval(show,3000);
		
		function show(){
			numis ++;
			if(numis > 4){
				numis = 0;
			}
			objulimgs.children().eq(numis).css("display","block").siblings().fadeOut();
			objkzulimgs.children().eq(numis).children("span").css("background","#ff6600");
			objkzulimgs.children().eq(numis).siblings().children("span").css("background","#aaa6a0")

		}