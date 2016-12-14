$(function(){

    var imgPlacemark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABeCAYAAABb2fjjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODA4M0VCODNDNjJCRDdDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQ0JFRTI3QUE0MzgxMUU2QjU0RUM2RTRDNThGN0FENSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQ0JFRTI3OUE0MzgxMUU2QjU0RUM2RTRDNThGN0FENSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzA5Mjg0MTktODFjMi0yYjRhLTk2ZmEtYjc4ZmU1NzEyYjRlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MWRmYjkwZGMtYTJhNi0xMWU2LWEwOGItOTY1ZWNl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'

    var mapContainer = $('.js-map');

    if (mapContainer.length){
        ymaps.ready(initMap);
    }


    function initMap(){
        var mapCenter = mapContainer.data('center');

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
                            balloonContent: 'г. Екатеринбург, ул. Примерная, д. 40, оф. 120'
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: imgPlacemark,
                            // Размеры метки.
                            iconImageSize: [81, 94],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-40, -90]
                        });

                    myMap.geoObjects.add(myPlacemark);
                    myMap.behaviors.disable('scrollZoom');
				}
            );
    }

});
