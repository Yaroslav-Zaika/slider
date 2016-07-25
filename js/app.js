$(window).load(function () {
	var settings = {
		directory: 'img'
	};
	
	var arrImg = [
			'fallow-deer-984573__180.jpg',
			'pine-273826__180.jpg',
			'fall-1072821__180.jpg',
			'creek-21749__180.jpg',
			'jackson-lake-80570__180.jpg',
			'mount-72366__180.jpg',
			'tit-modra-1131076__180.jpg',
			'kayak-1465191__180.jpg',
			'forest-1332640_960_720.jpg',
			'tree-1334702__180.jpg',
			'mountains-landscape-1081677_640.jpg',
			'mountain-91385_640.jpg',
			'warsaw-100294_640.jpg'

		];
	
	$('.main').slider(arrImg, settings);
});