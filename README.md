# Slider jQuery plugin

### Зависимости
[jquery.nicescroll]

### Подключение

```javascript
	<script src='slider/lib/jquery.nicescroll.min.js'></script>
	<script src='slider/js/jquery.slider.min.js'></script>
	<link rel="stylesheet" href="slider/css/slider.css">
```
### Использование

Запуск осуществляется вызовом jQuery-метода, который принимает два аргумента:
 - массив с данными об изображениях
 - объект настроек
```sh
    $('.main').slider(arrImg, settings);
```

### Примеры входящих данных
 1. Массив строк, содержащих URL изображений. 
```javascript
    var arrImg = [
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg'
	];
```
  2. Массив объектов.
```javascript
    var arrImg = [
		{
			src: '1.jpg'
		},
		{
			src: '2.jpg'
		},
		{
			src: '3.jpg'
		},
		{
			src: '4.jpg'
		}
	];
```
### Настройки.

 - **animateTime** - Время анимации. По умолчанию 500мс.
 - 	**directory** - Абсолютный или относительный путь к директории с изображениями. Используется когда путь URL изображений не являются полным.
 - 	**obj** - Тип входящих данных (объекты/строки). По умолчанию false.
 - 	**src** - Название свойства объекта в массиве данных, в котором находится URL изображения. Обязательное свойство при obj === true.
 - 	**alt** - Название свойства объекта в массиве данных, в котором находится содержимое атрибута alt. Используется при obj === true.

##### Пример объекта настроек

```javascript
    var settings = {
		animateTime: 600,
		directory: 'images/',
		obj: true,
		src: 'imgURL',
		alt: 'imgName'
	}
```
### Version
0.0.1

License
----

MIT


[//]: #
   [jquery.nicescroll]: <https://github.com/inuyaksa/jquery.nicescroll>
