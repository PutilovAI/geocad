$(function(){

    var imgPlacemark = 'data:image/png;base64,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'

    var mapContainer = $('.js-map');

    if (mapContainer.length){
        ymaps.ready(initMap);
    }


    function initMap(){
        var mapCenter = mapContainer.data('center');
        var mapTextBalloon = mapCenter;

        mapCenter = ymaps.geocode(mapCenter);

			mapCenter.then(
				function (res) {
					var CenterGeoObject = res.geoObjects.get(0),
						centerCoords = CenterGeoObject.geometry.getCoordinates();

                    var myMap = new ymaps.Map(mapContainer[0], {
                            center: centerCoords,
                            zoom: mapContainer.data('zoom') || 5,
                    		controls: ['zoomControl']
                        });

                    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            balloonContent: mapTextBalloon
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: imgPlacemark,
                            // Размеры метки.
                            iconImageSize: [44, 51],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-20, -40]
                        });

                    myMap.geoObjects.add(myPlacemark);
                    myMap.behaviors.disable('scrollZoom');
				}
            );
    }

});
