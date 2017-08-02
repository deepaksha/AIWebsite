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

            var brooklyn = {
                lat: 26.849684,
                lng: 75.769188
            };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 18,
                scrollwheel: false,
                streetViewControl: false,
                mapTypeControl: false,
                center: brooklyn, // Brooklyn.
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
                }
            });

            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: 'Manasrovar',
                position: brooklyn
            });

            map.mapTypes.set(customMapTypeId, customMapType);
            map.setMapTypeId(customMapTypeId);
        }



    });