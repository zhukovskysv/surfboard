(function () {
  let myMap;

  const init = () => {
    myMap = new ymaps.Map("map", {
      center: [55.74, 37.61],
      zoom: 14,
      controls: []
    });
    coords = [
      [55.749539, 37.603591]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/marker.svg',
      iconImageSize: [70, 80],
      iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
      myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
  };

  ymaps.ready(init);
})();
