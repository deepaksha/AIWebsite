angular.module('ContactController', [])
    .controller('ContactCtrl', function($scope) {


        $scope.initMap = function() {
            var customMapType = new google.maps.StyledMapType([{
                    stylers: [{
                            'saturation': -100
                        },
                        {
                            'lightness': 50
                        },
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    elementType: 'labels',
                    stylers: [{
                        visibility: 'on'
                    }]
                },
                {
                    featureType: 'road',
                    stylers: [{
                        color: '#bbb'
                    }]
                }
            ], {
                name: 'Manasrovar'
            });

            var image = new google.maps.MarkerImage(
                '../resource/img/widgets/gmap-pin.png',
                new google.maps.Size(48, 54),
                new google.maps.Point(0, 0),
                new google.maps.Point(24, 54)
            );

            var customMapTypeId = 'custom_style';



            var locations = [
                ['111/119 Ramtrith Marg, Manasrovar', 26.847145, 75.771820],
                ['Shop No. 120 Mansarover Plaza Madan Marg , Manasrovar', 26.854518, 75.766643]
            ];

            var map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(26.85300, 75.776895),
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
                },
                zoom: 15,
                scrollwheel: false,
                streetViewControl: false,
                mapTypeControl: false
            });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: image
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i][0]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }

            map.mapTypes.set(customMapTypeId, customMapType);
            map.setMapTypeId(customMapTypeId);
        }



    });