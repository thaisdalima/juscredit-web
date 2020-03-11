
export const mapStyleOptions: google.maps.MapTypeStyle[] = [
    {
        featureType: "all",
        elementType: "all",
        stylers: [

            { saturation: -100 }
        ]
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            { color: "#FBFBFB" }
        ]
    },
    {
        featureType: "landscape",
        elementType: "all",
        stylers: [
            { color: "#FDFDFD" }
        ]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { color: "#EFEFEF" }
        ]
    }
    ,
    {
        featureType: "poi",
        elementType: "all",
        stylers: [
            { color: "#FDFDFD" }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#000000" }
        ]
    }
    , {
        featureType: 'water',
        elementType: 'geometry.stroke',
        stylers: [
            { color: '#000000' }
        ]


    }
];

export const mapDefaultOptions = (center: google.maps.LatLng): google.maps.MapOptions => ({
    zoom: 5,
    center,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControlOptions: {
        mapTypeIds: ['organisMap']
    }
})
