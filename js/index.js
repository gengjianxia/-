$(function(){
	//导航
	$('.leftNav>li').click(function(){
		$(this).find($('.showList')).stop().toggle(500);
	})
	$('body').mouseup(function(){
		$('.showList').hide(500);
	})
	
	//全选
	$('#qx').click(function(){
		if(this.checked){
			$('.list_item_box :checkbox').prop("checked",true);
		}else{
			$('.list_item_box :checkbox').prop("checked",false);
		}
	})
	
	//反选
	$('#fx').click(function(){
		if($('.list_item_box :checkbox').checked){
			$('.list_item_box :checkbox').prop("checked",true);
		}else{
			$('.list_item_box :checkbox').prop("checked",false);
		}
	})
	//不选
	$('#bx').click(function(){
		$('.list_item_box :checkbox').prop("checked",false);
	})
	
	
	
	
	//视频
	$('.comTitle_tabs>li').click(function(){
		$(this).addClass('active').siblings().removeClass();
		var index = $('.comTitle_tabs>li').index(this);
		$('.video').eq(index).show().siblings().hide();
		$('.comTitle').show();
		$(' .tabs').show();
		$('.hr_10').show();
		$('.hr_5').show();
	})

	//专栏
//	$('.comTitle_tabs>li:last-child').click(function(){
//		$(this).addClass('active');
//		$('.tabs_item>.comList').show();
//	})

	//多个
	function change(obj1,obj2){
		obj1.click(function(){
			$(this).addClass('active').siblings().removeClass();
			var index = obj1.index(this);
			obj2.eq(index).show().siblings().hide();
			$('.hr_15').show();
		})
	}
	function change2(obj1,obj2){
		obj1.click(function(){
			$(this).addClass('active').siblings().addClass('contNav_item').removeClass('active');
			var index = obj1.index(this);
			obj2.eq(index).show().siblings().hide();
			$('.hr_15').show();
		})
	}
	
	change($('.tab_title>li'),$('.smList>ul'));//教育
	change($('.leftBox1>.comTitle>.comTitle_tabs>li'),$('.leftBox1>.tabs>.tabs_item'));//体育
	change($('.leftBox2>.comTitle>.comTitle_tabs>li'),$('.leftBox2>.tabs>.tabs_item'));//汽车
	change($('.leftBox3>.comTitle>.comTitle_tabs>li'),$('.leftBox3>.tabs>.tabs_item'));//娱乐
	change($('.leftBox4>.comTitle>.comTitle_tabs>li'),$('.leftBox4>.tabs>.tabs_item'));//财经
	change($('.leftBox5>.comTitle>.comTitle_tabs>li'),$('.leftBox5>.tabs>.tabs_item'));//小说
	change($('.comWidth>.comTitle>.comTitle_tabs>li'),$('.comWidth>.tabs>.tabs_item'));//猜你喜欢
	change($('.day>a'),$('.Day>.tabs_item'));//今日
	change($('.ComTitle>.comTitle_tabs>li'),$('.Tabs>.tabs_item'));//科技
	change($('.ComTitle1>.comTitle_tabs>li'),$('.Tabs1>.tabs_item'));//手机
	change2($('.ContNav1>.contNav>.contNav_item'),$('.ContNav1>.tabs>.tabs_item'));//游戏
	change2($('.ContNav2>.contNav>.contNav_item'),$('.ContNav2>.tabs>.tabs_item'));//应用中心


})
