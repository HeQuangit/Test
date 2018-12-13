		var objulimg2s = $(".box3_photos_2s ul");
		var objkzulimg2s = $(".box3_ul_2s ul");
		var numi2s =0;
		objulimg2s.children().eq(0).css("display","block");
		objkzulimg2s.children().eq(0).children("span").css("background","#ff6600");
		objkzulimg2s.children().mousemove(function(){
			numi2s = $(this).index();
			$(this).children("span").css("background","#ff6600");
			$(this).siblings().children("span").css("background","#aaa6a0");
			objulimg2s.children().eq(numi2s).fadeIn().siblings().fadeOut();
			bojnr = objulimg2s.children().eq(numi2s).children().children("img").attr("alt");
			objnerong.text(bojnr);
		});
		var lbtimes = setInterval(show,3000);
		
		function show(){
			numi2s ++;
			if(numi2s > 4){
				numi2s = 0;
			}
			objulimg2s.children().eq(numi2s).css("display","block").siblings().fadeOut();
			objkzulimg2s.children().eq(numi2s).children("span").css("background","#ff6600");
			objkzulimg2s.children().eq(numi2s).siblings().children("span").css("background","#aaa6a0")
		}