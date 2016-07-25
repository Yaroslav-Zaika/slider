;(function ($) {
	$.fn.slider = function (arrImg, settings) {
		if (!arrImg || !arrImg.length) {
			throw new Error('no array or array is empty');
		};
		if(settings.obj && !settings.src){
			throw new Error('no settings src');
		};
		if ($(this).length) {
			$(this).append('<div class="container-slider"><div class="slider-block"><div class="slider"></div><div id="prev" class="prev-arrow nav"></div><div id="next" class="next-arrow nav"></div></div><div class="scrollbar"><div class="wrapper"></div></div></div>');
		} else {
			throw new Error("no selector");
		};
		
		var slider = $('.slider');
		var wrapper = $('.wrapper');
		slider.hide();
		wrapper.hide();
		var options = $.extend({
			animateTime: 500,
			directory: '',
			obj: false,
			src: '',
			alt: ''
		}, settings);
		var index = 0;
		var time = options.animateTime;
		var widthBlock = $('.slider-block').width();
		addImg(arrImg);

		function addImg(arrImg) {
			var data = arrImg;
			var src;
			var alt;
			var objParam;
			var counter = 0;
			for (var i = 0; i < data.length; i++) {
				src = options.obj ? data[i][options.src] || '' : data[i];
				alt = options.obj ? data[i][options.alt] || '' : '';
				if (src) {
					slider.append('<img class="img' + i + '" src="' + options.directory + '/' + src + '" alt="' + alt + '"/>');
					wrapper.append('<img class="image" id="image' + i + '" src="' + options.directory + '/' + src + '" alt="' + alt + '"/>');
				};
			};
			
			$('.slider img').each(function (key, val){
				$(this).on('load', function() {
					counter++;
					ifLoad(counter);
                });
				$(this).on('error', function (){
					counter++;
					ifLoad(counter);
				});
			});
		};
		
		function ifLoad (counter){
			if($('.slider img').length === counter){
				nav();
				setMargin();
				scroll();
			}
		};
		
		function nav() {
			slider.show();
			$('.slider-block .nav').on('click', function (e) {
				if ($('.slider:animated').length) return false;
				if (e.target.id === 'prev') {
					if (index > 0) {
						index = index - 1;
						animate(e, index);
					} else {
						return false;
					}
				} else if (e.target.id === 'next') {
					if (index < $('.slider img').length - 1) {
						index = index + 1;
						animate(e, index);
					} else {
						return false;
					}
				};
			});
		};

		function animate(e, index) {
			if ($('.slider:animated').length) return false;
			var img = $('.slider img').eq(index);
			var margin = parseInt(slider.css('marginLeft'), 10);
			if (e.target.id === 'next') {
				if (img.length) {
					margin = margin ? margin - widthBlock : -widthBlock;
					slider.animate({
						marginLeft: margin
					}, time);
				}
			} else if (e.target.id === 'prev') {
				if (img.length && margin) {
					slider.animate({
						marginLeft: margin + widthBlock
					}, time);
				}
			}
		};

		function setMargin() {
			var widthBlock = $('.slider-block').width();
			var sliderImg = $('.slider img');
			var width;
			var param;
			for (var i = 0; i < sliderImg.length; i++) {
				width = sliderImg.eq(i)[0].clientWidth;
				param = (widthBlock - width) / 2;
				$('.img' + i).css({
					marginLeft: param,
					marginRight: param
				});
			}
		};

		function scroll() {
			wrapper.show();
			var scrollbar = $('.scrollbar');
			var imgQuantity = $('.wrapper img').length;
			var imgFullWidth = parseInt($('.wrapper img').eq(0).outerWidth(true), 10);
			var maxScroll = imgQuantity * imgFullWidth;
			wrapper.css('width', maxScroll);
			scrollbar.niceScroll();
			$('.wrapper .image').on('click', function (e) {
				var imgID = e.target.id;
				index = parseInt(imgID.substr(5), 10);
				slider.animate({
					marginLeft: -widthBlock * index
				}, 0);
			});
		};
	};
})(jQuery);