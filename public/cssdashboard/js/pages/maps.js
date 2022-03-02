mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFydmV5NDY5MDQiLCJhIjoiY2tvend3OXl1MHkzODJ3bXdxNGJ4MXJtayJ9.61QXAUAsuOnuAst-SIiTYg";
var map = new mapboxgl.Map({
    container: "map", // container ID
    //style: "mapbox://styles/harvey46904/cksrqd3ny2ftk17qu6zmudsv2", // style URL
    style: "mapbox://styles/harvey46904/cktpy9qja235v18o3p0v4xb3b",
    center: [-77.27785543324444, 1.2141190103046995], // starting position
    zoom: 13, // starting zoom
    pitch: 60
});

function color(valor) {


    if(valor<=0 && valor>=10){
        return "#ffffff"
    }
    if(valor<=11 && valor>=15){
        return "#ffffff"
    }
    if(valor<=16 && valor>=20){
        return "#38c74d"
    }
    if(valor<=21 && valor>=25){
        return "#ffe600"
    }
    if(valor<=26 && valor>=30){
        return "#ff0000"
    }
    if(valor<=30 && valor>=35){
        return "#ff8800" 
    } 
}
let history="";
map.on('click', 'points1', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 1")
    $(".valor").text("25.47")
    $(".pm").text("25.42")
    $(".tem").text("14.66")
    $(".atm").text("559.70")
    $(".hum").text("89.08")
    $(".vel").text("5.47")
    history="bg-orange";
    $(".color_escala").addClass("bg-orange")
    toggleSidebar('right')
});

map.on('click', 'points2', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 2")
			
    $(".valor").text("21.33")
    $(".pm").text("15.42")
    $(".tem").text("16.67")
    $(".atm").text("551.92")
    $(".hum").text("69.05")
    $(".vel").text("6.88")
    history="bg-orange";
    $(".color_escala").addClass("bg-orange")
    toggleSidebar('right')
});

map.on('click', 'points3', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 3")
$(".valor").text("15.19")
$(".pm").text("15.83")
$(".tem").text("17.03")
$(".atm").text("551.04")
$(".hum").text("68.71")
$(".vel").text("2.18")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points4', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 4")
    $(".valor").text("20.16")
    $(".pm").text("8.33")
    $(".tem").text("17.11")
    $(".atm").text("563.23")
    $(".hum").text("67.88")
    $(".vel").text("3.78")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points5', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 5")
    $(".valor").text("25.47")
    $(".pm").text("31.67")
    $(".tem").text("14.04")
    $(".atm").text("564.19")
    $(".hum").text("69.40")
    $(".vel").text("6.88")
    history="bg-warning";
    $(".color_escala").addClass("bg-warning")
    toggleSidebar('right')
});

map.on('click', 'points6', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 6")
    $(".valor").text("23.48")
    $(".pm").text("37.50")
    $(".tem").text("13.40")
    $(".atm").text("562.99")
    $(".hum").text("90.35")
    $(".vel").text("5.17")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points7', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 7")
    $(".valor").text("22.79")
    $(".pm").text("14.61")
    $(".tem").text("14.04")
    $(".atm").text("556.87")
    $(".hum").text("80.06")
    $(".vel").text("2.90")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points8', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 8")
    $(".valor").text("21.58")
    $(".pm").text("15.00")
    $(".tem").text("15.45")
    $(".atm").text("551.62")
    $(".hum").text("80.36")
    $(".vel").text("3.35")
    history="bg-warning";
    $(".color_escala").addClass("bg-warning")
    toggleSidebar('right')
});

map.on('click', 'points9', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 9")
    $(".valor").text("25.10")
    $(".pm").text("2.90")
    $(".tem").text("14.41")
    $(".atm").text("556.96")
    $(".hum").text("75.09")
    $(".vel").text("5.09")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points10', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 10")

    $(".valor").text("24.61")
    $(".pm").text("13.30")
    $(".tem").text("16.98")
    $(".atm").text("551.62")
    $(".hum").text("67.72")
    $(".vel").text("5.18")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points11', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 11")

    $(".valor").text("26.81")
    $(".pm").text("32.10")
    $(".tem").text("17.12")
    $(".atm").text("560.55")
    $(".hum").text("70.25")
    $(".vel").text("3.33")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});

map.on('click', 'points12', e => {
    $(".color_escala").removeClass(history)
    $(".titulo").text("Comuna 12")


    $(".valor").text("24.17")
    $(".pm").text("6.67")
    $(".tem").text("16.59")
    $(".atm").text("553.00")
    $(".hum").text("63.35")
    $(".vel").text("8.60")
    history="bg-success";
    $(".color_escala").addClass("bg-success")
    toggleSidebar('right')
});





function etiquetas(){
    map.loadImage(
        "./cssdashboard/js/pages/imgs/3.png",
        (error, image) => {
            if (error) throw error;

            
                
            // Add the image to the map style.
            map.addImage("3", image);

            // Add a data source containing one point feature.
            map.addSource("point", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.25754652871831,1.2032577963865378,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points3",
                type: "symbol",
                source: "point", // reference the data source
                layout: {
                    "icon-image": "3", // reference the image
                    "icon-size": 0.50,
                },
            });

           
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/4.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("4", image);

            // Add a data source containing one point feature.
            map.addSource("point4", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.26446752829463,1.1949434824833247,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points4",
                type: "symbol",
                source: "point4", // reference the data source
                layout: {
                    "icon-image": "4", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/1.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("1", image);

            // Add a data source containing one point feature.
            map.addSource("point1", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.27892507516128,1.2148606329918152,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points1",
                type: "symbol",
                source: "point1", // reference the data source
                layout: {
                    "icon-image": "1", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/2.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("2", image);

            // Add a data source containing one point feature.
            map.addSource("point2", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.27530815446823,1.2041618053711858,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points2",
                type: "symbol",
                source: "point2", // reference the data source
                layout: {
                    "icon-image": "2", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );
    
    map.loadImage(
        "./cssdashboard/js/pages/imgs/5.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("5", image);

            // Add a data source containing one point feature.
            map.addSource("point5", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.27524270802985,1.1907136418273438,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points5",
                type: "symbol",
                source: "point5", // reference the data source
                layout: {
                    "icon-image": "5", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/6.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("6", image);

            // Add a data source containing one point feature.
            map.addSource("point6", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.28819550892678,1.2027803403332769,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points6",
                type: "symbol",
                source: "point6", // reference the data source
                layout: {
                    "icon-image": "6", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/7.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("7", image);

            // Add a data source containing one point feature.
            map.addSource("point7", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.29470969607678,1.2091758800992238,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points7",
                type: "symbol",
                source: "point7", // reference the data source
                layout: {
                    "icon-image": "7", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/8.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("8", image);

            // Add a data source containing one point feature.
            map.addSource("point8", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.29171214936804,1.2238251876996031,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points8",
                type: "symbol",
                source: "point8", // reference the data source
                layout: {
                    "icon-image": "8", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/9.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("9", image);

            // Add a data source containing one point feature.
            map.addSource("point9", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.2872478693165,1.228966303039826,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points9",
                type: "symbol",
                source: "point9", // reference the data source
                layout: {
                    "icon-image": "9", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/10.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("10", image);

            // Add a data source containing one point feature.
            map.addSource("point10", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.27008276832049,1.2281802867481701,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points10",
                type: "symbol",
                source: "point10", // reference the data source
                layout: {
                    "icon-image": "10", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/11.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("11", image);

            // Add a data source containing one point feature.
            map.addSource("point11", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.26805564714999,1.2148627338185918,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points11",
                type: "symbol",
                source: "point11", // reference the data source
                layout: {
                    "icon-image": "11", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

    map.loadImage(
        "./cssdashboard/js/pages/imgs/12.png",
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage("12", image);

            // Add a data source containing one point feature.
            map.addSource("point12", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [
                                    -77.25425472847894,1.2111608706651964,
                                ],
                            },
                        },
                    ],
                },
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                id: "points12",
                type: "symbol",
                source: "point12", // reference the data source
                layout: {
                    "icon-image": "12", // reference the image
                    "icon-size": 0.50,
                },
            });
        }
    );

}

var linecsm = 1;
var opacitynum = 0.4;

function comuna3(valor) {
    var paint = "#ffe600"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_3", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_3.
                coordinates: [
                    [
                        [-77.24566167905618, 1.200015296810875],
                        [-77.24578588444842, 1.200446088973024],
                        [-77.24590089038526, 1.2005626027417264],
                        [-77.24616806606366, 1.2005338549917184],
                        [-77.24635061266247, 1.2005984590707328],
                        [-77.24634637512145, 1.2007479427443855],
                        [-77.24614580714814, 1.2008715054249137],
                        [-77.24605863957788, 1.2009784199975257],
                        [-77.24615115523943, 1.2010525574811481],
                        [-77.24640469046273, 1.20108574280448],
                        [-77.24640610291596, 1.2010836245901118],
                        [-77.24669000593849, 1.2010808003053626],
                        [-77.24686771276839, 1.2012168181256868],
                        [-77.24694451319459, 1.2014478743608947],
                        [-77.24706609948987, 1.2016216440522243],
                        [-77.24720185531453, 1.2016129697142617],
                        [-77.24731631972168, 1.2014474166651468],
                        [-77.24737604711777, 1.2011071474641994],
                        [-77.2474636980615, 1.2008620012092308],
                        [-77.24758463396478, 1.2008608919489347],
                        [-77.24768116078599, 1.2010993828414627],
                        [-77.2477011321763, 1.201489840165408],
                        [-77.247771031051, 1.2017216750115551],
                        [-77.24794689183648, 1.2017412261534872],
                        [-77.24815057543816, 1.2016980300437865],
                        [-77.24829459414656, 1.2017823653042683],
                        [-77.2482843070963, 1.201983947137208],
                        [-77.24828224968559, 1.2019860040951755],
                        [-77.24806745855784, 1.2021899863592154],
                        [-77.2479522435911, 1.2024635616594708],
                        [-77.24806136389725, 1.2026590693238433],
                        [-77.2480605579645, 1.202654460040037],
                        [-77.24825804963035, 1.2027771957091034],
                        [-77.24856427235738, 1.2028603903029165],
                        [-77.24886166364377, 1.2030146376393418],
                        [-77.2490336367166, 1.2032009931683945],
                        [-77.2492155952628, 1.203520459645361],
                        [-77.24942813243962, 1.2038066131720058],
                        [-77.24934159185506, 1.204209708665914],
                        [-77.2493271689176, 1.2045214089237106],
                        [-77.2493399107529, 1.2052130057410864],
                        [-77.24909360071797, 1.2053250408134204],
                        [-77.24909360071797, 1.2053250408134204],
                        [-77.24889433864746, 1.2057854656516724],
                        [-77.24907794684287, 1.2058815263336555],
                        [-77.2492631818206, 1.206145123553597],
                        [-77.24962824325951, 1.2064222390691413],
                        [-77.24967015732932, 1.206561472616258],
                        [-77.24947545779071, 1.206726389813909],
                        [-77.2495160199839, 1.20691969423072],
                        [-77.24985944833657, 1.2070859631860458],
                        [-77.25023667889775, 1.2070535203559842],
                        [-77.25054224900731, 1.206942674385246],
                        [-77.25082686295815, 1.2069988575569113],
                        [-77.25129363598137, 1.2075815995552404],
                        [-77.25157622056224, 1.2075369904682987],
                        [-77.2520508006877, 1.2072855594033456],
                        [-77.25234944455406, 1.207297471704564],
                        [-77.25252420831936, 1.207069201977859],
                        [-77.2528399106044, 1.2069170221486871],
                        [-77.25306259350793, 1.2066831160423845],
                        [-77.25322044465042, 1.2066577527341593],
                        [-77.25345440259417, 1.2067902055616173],
                        [-77.25389935355844, 1.2068578419949745],
                        [-77.25409948625668, 1.207069202870926],
                        [-77.25488310442859, 1.2072721092951042],
                        [-77.25580642609361, 1.2070212951940107],
                        [-77.25644389674835, 1.207037358893885],
                        [-77.2570177502663, 1.2065796671817424],
                        [-77.25625450929289, 1.2061495192400145],
                        [-77.25781384785466, 1.2059842998620525],
                        [-77.2580807998367, 1.2057216433944546],
                        [-77.25874259945101, 1.2052164157411767],
                        [-77.2596409140782, 1.2050300156186324],
                        [-77.26095024998983, 1.2051613438893582],
                        [-77.26177652958256, 1.204924104015788],
                        [-77.26262822383126, 1.2051189798695532],
                        [-77.26316636512797, 1.2053943455816238],
                        [-77.26336975711479, 1.2055976925508958],
                        [-77.26345450377545, 1.2059196585555014],
                        [-77.26336551978142, 1.2061399510621271],
                        [-77.26316212779545, 1.2063771891268829],
                        [-77.26726512939007, 1.205745715980001],
                        [-77.26720394853203, 1.2051622738721477],
                        [-77.26782234940055, 1.2039785986046638],
                        [-77.26911098037618, 1.2044028102179993],
                        [-77.26935456306114, 1.2036408004211836],
                        [-77.26808950338409, 1.2031458871123988],
                        [-77.26689516247933, 1.2024074442922057],
                        [-77.26515079778937, 1.2012212235592727],
                        [-77.2650172201885, 1.2014097622523394],
                        [-77.26158349218224, 1.200844146549997],
                        [-77.26045986883156, 1.200506347978731],
                        [-77.25842445163778, 1.199395642786186],
                        [-77.25733141255284, 1.1988138453870931],
                        [-77.25683621170316, 1.198490958981239],
                        [-77.25488710931427, 1.1996702950024911],
                        [-77.2545482614857, 1.1996844105666327],
                        [-77.2539157395716, 1.2002186900514715],
                        [-77.25272711328773, 1.2002723581704657],
                        [-77.25192958339386, 1.1998200125627534],
                        [-77.2507793069197, 1.1999810287274784],
                        [-77.25057225588944, 1.2005177099166673],
                        [-77.25060293011649, 1.2010160566405688],
                        [-77.24945264661619, 1.2010620578721927],
                        [-77.24931461259575, 1.2003490386972118],
                        [-77.24879813977304, 1.199055049849349],
                        [-77.24824600369294, 1.1997144012327396],
                        [-77.24760184493334, 1.198970714196193],
                        [-77.24660493573435, 1.1986947077097625],
                        [-77.24576640360704, 1.199616385385724],
                        [-77.24529095309339, 1.199601051634076],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_3",
        type: "fill",
        source: "comuna_3", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline",
        type: "line",
        source: "comuna_3",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });
    etiquetas();
}
function comuna4(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_4", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_4.
                coordinates: [
                    [
                        [-77.2616107232925, 1.2008223375850804],
                        [-77.26502835412367, 1.2014385171400193],
                        [-77.26515380519908, 1.2012134080612924],
                        [-77.26809259719766, 1.2031051183645332],
                        //
                        [-77.26949190818982, 1.2037100283653075],
                        [-77.27022002260674, 1.201436149403051],
                        [-77.26684252563666, 1.1990220614492273],
                        [-77.2670317668244, 1.1979078793649904],
                        [-77.2674523046332, 1.1968147198086427],
                        [-77.26770463956711, 1.1957215603722915],
                        [-77.26854571518516, 1.1953852033641255],
                        [-77.2691554788995, 1.1945232869559845],
                        [-77.2691134251184, 1.1937244386458588],
                        [-77.26940780158475, 1.192841500769532],
                        [-77.27016476964104, 1.1918114062232092],
                        [-77.27005026721378, 1.1913533411383384],
                        [-77.26989881158141, 1.1904258757647312],
                        [-77.27001240330583, 1.1897634003069015],
                        [-77.2701846771082, 1.1888415918291173],
                        [-77.26987785380857, 1.188517792486138],
                        [-77.26950284755321, 1.187938361989083],
                        [-77.26718690440532, 1.1861493237557852],
                        [-77.2657520725071, 1.1853807729565062],
                        [-77.26444526228033, 1.183689944819335],
                        [-77.26321900380458, 1.1863525156092294],
                        [-77.26321900380458, 1.1863525156092294],
                        [-77.26225311988003, 1.1864826831060498],
                        [-77.26127639395543, 1.1862060034135737],
                        [-77.26005548654962, 1.1861083517514857],
                        [-77.25963223864858, 1.1867593627708288],
                        [-77.25945317222931, 1.1873289972869117],
                        [-77.25994153517905, 1.1879962830436028],
                        [-77.26095082006515, 1.1890867210357356],
                        [-77.2611461652503, 1.1892657488893121],
                        [-77.26235423428932, 1.1904242049539562],
                        [-77.26308823565137, 1.1912373821487705],
                        [-77.2624873111231, 1.1920699691013539],
                        [-77.2621936253633, 1.1922068597347533],
                        [-77.26232573286893, 1.192423469134738],
                        [-77.26216739872348, 1.192658471879227],
                        [-77.26184505640936, 1.1925528087691646],
                        [-77.26185034070983, 1.1924682782773175],
                        [-77.26192960521342, 1.1922569520376953],
                        [-77.26163106639808, 1.1921741425068433],
                        [-77.26146196879046, 1.1919258341461187],
                        [-77.26135099848563, 1.1916986583929514],
                        [-77.2610308804729, 1.1924106738898388],
                        [-77.26064512655597, 1.193044652525586],
                        [-77.26043375454714, 1.1928597421051705],
                        [-77.26029636274109, 1.192648415895576],
                        [-77.26021181393742, 1.1926431327403435],
                        [-77.26022238253785, 1.1927804947785887],
                        [-77.26036505864386, 1.1930499356808468],
                        [-77.26047602894869, 1.1932189966253048],
                        [-77.26070325636118, 1.1937103270802112],
                        [-77.26143248979258, 1.1939692015852899],
                        [-77.26182352800953, 1.1941910939987679],
                        [-77.26183939254076, 1.194642449440508],
                        [-77.25851055484281, 1.1993707554950959],
                        [-77.25935541883382, 1.1999149088799044],
                        [-77.26049177536117, 1.2004661565902666],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_4",
        type: "fill",
        source: "comuna_4", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline1",
        type: "line",
        source: "comuna_4",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });
}
function comuna2(valor) {
    var paint = "#ff8800" ;
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_2", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_2.
                coordinates: [
                    [
                        [-77.26923814113832, 1.204451708177345],
                        [-77.26786169082243, 1.2040176402610285],
                        [-77.26713537415009, 1.2051697319537311],
                        [-77.26727126038492, 1.2057631166617],
                        [-77.26888079071284, 1.2058439796711014],
                        [-77.26876755742342, 1.206790076716402],
                        [-77.26865421712819, 1.2070359749680364],
                        [-77.26876882584259, 1.207201484149934],
                        [-77.26885478237779, 1.2072810558675542],
                        [-77.26896620751643, 1.2072460443123987],
                        [-77.26904261332584, 1.2070932666092915],
                        [-77.2692113428215, 1.2070327920992412],
                        [-77.26940550666507, 1.2070391557277134],
                        [-77.26955198538798, 1.2071983012802718],
                        [-77.26997220035332, 1.207316064602935],
                        [-77.27044973666148, 1.2073065159964216],
                        [-77.27091452139996, 1.2072142135153143],
                        [-77.27322155603122, 1.2104768455259176],
                        [-77.2761829729244, 1.2083827738983643],
                        [-77.2811127826659, 1.206664790587098],
                        [-77.28235168901182, 1.2089936550876672],
                        [-77.28383621051739, 1.2084456460383706],
                        [-77.28595203110706, 1.2059862361636675],
                        [-77.28244525791001, 1.2031061580177749],
                        [-77.27854455473135, 1.1996629623065047],
                        [-77.27656520368384, 1.1983159286700271],
                        [-77.27305002599212, 1.1995580493529872],
                        [-77.27020392983059, 1.2014265152786976],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_2",
        type: "fill",
        source: "comuna_2", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline2",
        type: "line",
        source: "comuna_2",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna5(valor) {
    var paint = "#ffe600"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_5", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_5.
                coordinates: [
                    [
                        [-77.27656520368384, 1.1983159286700271],
                        [-77.27305002599212, 1.1995580493529872],
                        [-77.27020392983059, 1.2014265152786976],

                        [-77.26678856066718, 1.198964048133874],
                        [-77.26702380049329, 1.1978893625569071],
                        [-77.26742016302114, 1.196799603601562],
                        [-77.26773483189118, 1.1957442261961546],
                        [-77.26860925060555, 1.1953465909885352],
                        [-77.26912766330884, 1.1945689304878613],
                        [-77.26913438354836, 1.1937115862637455],
                        [-77.26942105268847, 1.1928425029574754],
                        [-77.27017160356621, 1.1918003475730217],
                        [-77.26992856591318, 1.1903883221355471],
                        [-77.27038696792647, 1.188271082804775],
                        [-77.2716650204951, 1.1847365209224137],
                        [-77.27543654856572, 1.1809559317450748],
                        [-77.27961588618928, 1.178293883009772],

                        [-77.28108234242382, 1.1787804520519245],
                        [-77.28215270106921, 1.178607850090259],
                        [-77.28257278806421, 1.1789645607986614],
                        [-77.28209515490533, 1.1789415472051985],
                        [-77.28200175717899, 1.1790944112065773],
                        [-77.28219447089214, 1.1795538766530314],
                        [-77.28247748238493, 1.1799289536015465],
                        [-77.28286580277069, 1.1800276581522269],
                        [-77.28262887453809, 1.1806725242020093],
                        [-77.28108296635588, 1.1831115636972385],
                        [-77.28180304857204, 1.1838192892422512],
                        [-77.28187627723241, 1.1837338740390067],
                        [-77.28213257754356, 1.183331202331857],
                        [-77.28212037276694, 1.1829407327403345],
                        [-77.28374159518194, 1.1840136672132502],
                        [-77.28318017545308, 1.184477349667091],
                        [-77.28337123153716, 1.1861674906418784],
                        [-77.28504495976176, 1.1862233567813973],
                        [-77.28608496686758, 1.1865575731181366],
                        [-77.28654925575472, 1.1872074381025044],
                        [-77.28372845115035, 1.191455982466124],
                        [-77.2869313262446, 1.1913296026293096],
                        [-77.28849448627602, 1.1919304525683287],
                        //cordenadas 5 y 6
                        [-77.28810073978076, 1.19281207250269],
                        [-77.28744497080385, 1.1931689326762864],
                        [-77.2869884227822, 1.1932104280430877],
                        [-77.28650697423609, 1.1939988384061735],
                        [-77.28566874511864, 1.1947140914780903],
                        [-77.28450662536227, 1.1962660161073302],
                        [-77.2843927291101, 1.1980529083364218],
                        [-77.28379376898465, 1.1982400424511752],
                        [-77.28323224386725, 1.1984521277667142],
                        [-77.28282045878143, 1.1982649936654468],
                        //[-77.28220902032007,1.1981901400219641],
                        [-77.28233086338287, 1.1981340356267367],
                        [-77.2819478064863, 1.198709531731538],
                        [-77.28145959711946, 1.1995562842253662],
                        [-77.28078408656631, 1.2004885951524074],
                        [-77.28000806739738, 1.2009611559625029],

                        // 5
                        [-77.27869183766882, 1.1997833118409034],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_5",
        type: "fill",
        source: "comuna_5", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline3",
        type: "line",
        source: "comuna_5",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna6(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_6", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_6.
                coordinates: [
                    [
                        //cordenadas 6 y
                        [-77.28068061810603, 1.201606702438454],
                        [-77.28983523372182, 1.2088649404767864],
                        //cordendas  6 y limite de 7
                        [-77.29331105409926, 1.206142122772988],
                        [-77.29775000567525, 1.2036382525227793],
                        [-77.29829435845988, 1.2030193211757165],
                        [-77.29994581786963, 1.2018803537051497],
                        [-77.29784872893458, 1.2003474193461017],
                        [-77.29651360672545, 1.2009256308778191],
                        [-77.29521278757585, 1.1987537499836094],
                        [-77.29343581265664, 1.1981750907687996],

                        [-77.29208447331916, 1.1971972505975117],
                        [-77.29133306656297, 1.1976743912090058],

                        [-77.29063746652469, 1.196998493771872],

                        [-77.29266629101113, 1.195837366743973],
                        [-77.29258971863345, 1.195745919735927],
                        [-77.29051583087954, 1.1968221605677343],

                        [-77.29003120726725, 1.1954000435331267],
                        [-77.29041223078269, 1.1943750028271864],
                        [-77.29210376427261, 1.1933400976576962],
                        [-77.29243444509359, 1.1928199019323529],
                        [-77.29234278878056, 1.1927116043053871],
                        [-77.29191783678243, 1.1928532242767034],
                        [-77.291559543922, 1.1930448277568217],
                        [-77.29097627647377, 1.1925699843253312],
                        [-77.28932646283613, 1.193711274541485],
                        //cordenadas 5 y 6

                        [-77.28810073978076, 1.19281207250269],
                        [-77.28744497080385, 1.1931689326762864],
                        [-77.2869884227822, 1.1932104280430877],
                        [-77.28650697423609, 1.1939988384061735],
                        [-77.28566874511864, 1.1947140914780903],
                        [-77.28450662536227, 1.1962660161073302],
                        [-77.2843927291101, 1.1980529083364218],
                        [-77.28379376898465, 1.1982400424511752],
                        [-77.28323224386725, 1.1984521277667142],
                        [-77.28282045878143, 1.1982649936654468],
                        // [-77.28220902032007,1.1981901400219641],
                        [-77.28233086338287, 1.1981340356267367],
                        [-77.2819478064863, 1.198709531731538],
                        [-77.28145959711946, 1.1995562842253662],
                        [-77.28078408656631, 1.2004885951524074],
                        [-77.28000806739738, 1.2009611559625029],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_6",
        type: "fill",
        source: "comuna_6", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline4",
        type: "line",
        source: "comuna_6",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna7(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_7", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_7.
                coordinates: [
                    [
                        //cordendas  6 y limite de 7

                        [-77.29565387173318, 1.2135588294861464],
                        [-77.29419662851018, 1.2134488752703874],
                        [-77.29254807196435, 1.214110462722644],
                        [-77.29085905360182, 1.214622628330261],
                        [-77.28707254371159, 1.220916996231395],
                        [-77.28339835752826, 1.218169357350348],
                        [-77.28449540268247, 1.2169851914926966],
                        [-77.28426018558798, 1.216814822470056],
                        [-77.28415317794668, 1.2165939532788599],
                        [-77.28414627422802, 1.2164386546175336],
                        [-77.28459506814261, 1.2158524422429338],
                        [-77.2840669354008, 1.2154210576186415],
                        [-77.28380804597799, 1.214699781168008],
                        [-77.28400480196291, 1.2146238573263446],
                        [-77.2846641071165, 1.2140130155305826],
                        [-77.28489423570494, 1.2138128077425279],
                        [-77.2855017619346, 1.2129017213324147],
                        [-77.28626370408358, 1.212222318626786],
                        [-77.28848229086378, 1.2101403029424347],
                        [-77.28556280320106, 1.206444588694211],
                        [-77.28596309518161, 1.2060087124525296],
                        [-77.28980200609777, 1.2089430430933703],
                        [-77.29331105409926, 1.206142122772988],
                        [-77.29775000567525, 1.2036382525227793],
                        [-77.29829435845988, 1.2030193211757165],
                        [-77.30101732277234, 1.2014329240669923],
                        [-77.30248786818919, 1.2016437925721277],
                        [-77.30306788411036, 1.2017199395275213],
                        [-77.30523915601935, 1.2000692419970704],
                        [-77.30644480445983, 1.1995930408731965],
                        [-77.30604292164634, 1.2009770001604068],
                        [-77.30647457355718, 1.2025841778090864],
                        [-77.30751649196225, 1.2032389536167187],
                        [-77.30776789422987, 1.205445471432995],
                        [-77.30639851575472, 1.2086002955633433],
                        [-77.30391287112343, 1.2082635548478748],
                        [-77.30339191192121, 1.2091564290463737],
                        [-77.30285606816972, 1.2103469275217265],
                        [-77.30294537546172, 1.2110314639086255],
                        [-77.30272404858601, 1.211570406914504],
                        [-77.30167609964792, 1.2118835320709138],
                        [-77.30177892715017, 1.2126812277199548],
                        [-77.29841746506253, 1.2121721576011737],
                        //cordenadas 5 y 6
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_7",
        type: "fill",
        source: "comuna_7", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline5",
        type: "line",
        source: "comuna_7",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna1(valor) {
    var paint = "#ff8800" ;
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_1", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_1.
                coordinates: [
                    [
                        [-77.28303524810565, 1.2179352987522805],
                        [-77.27735178236424, 1.221070248222702],
                        [-77.27731186147014, 1.2206327546572595],
                        [-77.27745171381798, 1.2199009886142704],
                        [-77.27753448376501, 1.219661295508871],
                        [-77.27738261082555, 1.2192327869965425],
                        [-77.27708829639289, 1.2187387461157329],
                        [-77.27710747720636, 1.218478167580784],
                        [-77.27699440711399, 1.2182495093283023],
                        [-77.27682480197512, 1.2181518799557978],
                        [-77.27654469651901, 1.2181852794776233],
                        [-77.27614638142097, 1.2183933841852763],
                        [-77.27600761358019, 1.2183882457982236],
                        [-77.2751369928776, 1.2176162691907138],
                        [-77.27471740931549, 1.2176011919191154],
                        [-77.27449605246198, 1.2176074259160004],
                        [-77.27449605246198, 1.2176074259160004],
                        [-77.2742996372254, 1.2175326179581987],
                        [-77.27414998752164, 1.2174048210254114],
                        [-77.27414998752164, 1.2172926090800615],
                        [-77.27426222479932, 1.2171274081517112],
                        [-77.27482964670185, 1.216736282631942],
                        [-77.27491382466008, 1.2165710816694997],
                        [-77.27506909152066, 1.2158625017493705],
                        [-77.27505973841397, 1.2157035347336063],
                        [-77.2749334843964, 1.2152659491804911],
                        [-77.27444660087963, 1.21508735389871],
                        [-77.27400308201038, 1.214817934663131],
                        [-77.27392237655289, 1.2145714682763042],
                        [-77.27390272685739, 1.2142428036449218],
                        [-77.2738100931694, 1.2140631907669643],
                        [-77.27358833373478, 1.2139733843240492],
                        [-77.27322902730896, 1.2139397069075955],
                        [-77.27312797237698, 1.2138919972327784],
                        [-77.27306621658482, 1.213816223041519],
                        [-77.2731400343755, 1.2136826846960957],
                        [-77.27403549335855, 1.212950200705393],
                        [-77.27406075707194, 1.2128168432136448],
                        [-77.27398496587239, 1.2127663270666744],
                        [-77.2734572345596, 1.2129094561471447],
                        [-77.27337302211617, 1.2128252625716271],
                        [-77.27296886893811, 1.2118492532871272],
                        [-77.2727736617116, 1.2109078858748887],
                        [-77.27323639048092, 1.2104833319351513],
                        [-77.27619354836912, 1.2083992414463438],
                        [-77.28113588652371, 1.2066537263073371],
                        [-77.28234243554891, 1.2090105950542522],
                        [-77.2838269480763, 1.2084578782053228],
                        [-77.28558831211012, 1.206472502964516],
                        [-77.28844918342571, 1.210097087576358],
                        [-77.28548140195153, 1.2128963954487517],
                        [-77.28487306254681, 1.213809967142808],
                        [-77.28400939525153, 1.2146166512681162],
                        [-77.28380500919252, 1.214712009996262],
                        [-77.28405708348726, 1.2154085524007456],
                        [-77.28459116124003, 1.2158726077405504],
                        [-77.28414071872612, 1.216468627613267],
                        [-77.28414071872612, 1.2165878259407776],
                        [-77.28424655273841, 1.2168246721310965],
                        [-77.28449258957033, 1.2169925010060325],
                        [-77.28338733621581, 1.218191579830176],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_1",
        type: "fill",
        source: "comuna_1", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline6",
        type: "line",
        source: "comuna_1",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna10(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_11", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_11.
                coordinates: [
                    [
                        [-77.26711508071304, 1.2337617838699657],
                        [-77.26695649189651, 1.2354118621456536],
                        [-77.26827104573323, 1.2366131385814896],
                        [-77.26849449973628, 1.2365410664529293],
                        [-77.27120164780587, 1.2376483403366194],
                        [-77.27146836334816, 1.236761898071336],
                        [-77.27263297439174, 1.230003872796118],
                        [-77.2736672479723, 1.2262614022046137],
                        [-77.2757744581811, 1.2265840870757074],
                        [-77.2756735394006, 1.2253300905023536],
                        [-77.27549631255795, 1.2237589239835387],
                        [-77.2739392704708, 1.2238814410095387],
                        [-77.27399693903902, 1.222540160085913],
                        [-77.27400844824479, 1.2208879524067413],
                        [-77.27470856153212, 1.2205041979054556],
                        [-77.27533570348362, 1.2195024396280871],
                        [-77.27708829639289, 1.2187387461157329],
                        [-77.27710747720636, 1.218478167580784],
                        [-77.27699440711399, 1.2182495093283023],
                        [-77.27682480197512, 1.2181518799557978],
                        [-77.27654469651901, 1.2181852794776233],
                        [-77.27614638142097, 1.2183933841852763],
                        [-77.27495470328176, 1.2175427568810306],
                        [-77.27416438602393, 1.2178676737602103],
                        [-77.27419725733546, 1.2194962843252313],
                        [-77.27179071546635, 1.220325258281136],
                        [-77.26972085790271, 1.2225873237366045],
                        [-77.26936100524136, 1.223401824753708],
                        [-77.26808596838777, 1.2247634254231627],
                        [-77.26804033206196, 1.2242919577535787],
                        [-77.26575851591303, 1.2235467344618627],
                        [-77.26572809169585, 1.2245657131549024],
                        [-77.2654340072844, 1.225903991902726],
                        [-77.2643195932838, 1.2307133577142224],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_11",
        type: "fill",
        source: "comuna_11", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline7",
        type: "line",
        source: "comuna_11",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

  
}
function comuna8(valor) {
    var paint = "#ffe600"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_8", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_8.
                coordinates: [
                    [
                        [-77.29834825654473, 1.2121940586109048],
                        [-77.29570902012182, 1.2135592917846907],
                        [-77.29417405587003, 1.2134693910486334],
                        [-77.29208388018179, 1.2142683211433933],
                        [-77.29099561066323, 1.2145603812779626],
                        [-77.28722853762793, 1.2210922368682162],
                        [-77.28910603031358, 1.2225088498557284],
                        [-77.29270108074684, 1.2271234355328744],
                        [-77.29285236747342, 1.2285492119596029],
                        [-77.2939156808925, 1.2298086759850548],
                        [-77.29473550562312, 1.2304837293246038],
                        [-77.29531584472932, 1.2316942417097891],
                        [-77.30655333040352, 1.2396137912350156],
                        [-77.30695365857059, 1.2388281456656784],
                        [-77.30775431490417, 1.2379832058308722],
                        [-77.30782844974999, 1.2379683823219523],
                        [-77.30809533519448, 1.237953558814226],
                        [-77.30823370715973, 1.2380992992226112],
                        [-77.31299607921676, 1.2340113409624394],
                        [-77.3121422276281, 1.2320374115835477],
                        [-77.31181523535736, 1.2318653501701107],
                        [-77.31233153894237, 1.2302651784889633],
                        [-77.31272737169132, 1.2293360461043505],
                        [-77.31326088539669, 1.228613387359772],
                        [-77.3133297258749, 1.2282864702444982],
                        [-77.31350182706967, 1.2277186667381415],
                        [-77.3134329865922, 1.2275982235552476],
                        [-77.31281342228908, 1.2281144085883966],
                        [-77.31245200977924, 1.2286477996854615],
                        [-77.31205617703029, 1.2289230982741515],
                        [-77.31077510255511, 1.2298842950616091],
                        [-77.30999910690377, 1.229758486916424],
                        [-77.31010397118109, 1.2297375188915538],
                        [-77.30985229691584, 1.2296326787644887],
                        [-77.30922311125278, 1.2293181583595612],
                        [-77.30867781701119, 1.2297375188915538],
                        [-77.30723068998589, 1.2300101032016926],
                        [-77.3064966400454, 1.229339126387714],
                        [-77.30544799727363, 1.2279971722523157],
                        [-77.30578685870478, 1.2275630585941002],
                        [-77.30573574218977, 1.2263365435148046],
                        [-77.30629802385351, 1.2256210761247672],
                        [-77.30646823117951, 1.2252019831288834],

                        [-77.305815794453, 1.225507026422818],
                        [-77.30509867932778, 1.2256862641904434],
                        [-77.30496422024225, 1.2252531062321452],
                        [-77.3045907227812, 1.2247153928076955],
                        [-77.304276984914, 1.2244166630813709],
                        [-77.30375408846828, 1.2242075522522526],

                        [-77.299628586023, 1.2230570203687705],
                        [-77.29857132014286, 1.222641760512147],
                        [-77.29874123787386, 1.2219622442447644],

                        [-77.29821260493378, 1.2218112406060726],
                        [-77.29815596569011, 1.2217546142394298],
                        [-77.29613583267007, 1.2229815185821167],
                        [-77.29511633630347, 1.2207919687435265],

                        [-77.29475762109439, 1.2188477954050967],
                        [-77.30490155833462, 1.2163720840392074],
                        [-77.30633722790407, 1.2150217915611137],
                        [-77.30713540930458, 1.2137499525306623],
                        [-77.30606681131172, 1.212169108739019],
                        [-77.30266522796569, 1.2115884805103292],
                        [-77.30170282877475, 1.211870499952326],
                        [-77.3017692011328, 1.2126999687241806],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_8",
        type: "fill",
        source: "comuna_8", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline8",
        type: "line",
        source: "comuna_8",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

  
}
function comuna9(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_9", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_9.
                coordinates: [
                    [
                        [-77.29279819498151, 1.227099295206969],
                        [-77.28911620658266, 1.2225818785076825],
                        [-77.28301612528298, 1.2179493408192599],
                        [-77.27737279472228, 1.2210960750589805],
                        [-77.2773050677643, 1.2207325707757661],
                        [-77.27753798825972, 1.2196642721958284],
                        [-77.27721107364476, 1.2189773423373964],
                        [-77.277080755871, 1.2187341381685286],
                        [-77.27530384373955, 1.2194902365596363],
                        [-77.27471431730288, 1.2205064846896931],
                        [-77.27399532987278, 1.2208767542246903],
                        [-77.27398948734321, 1.2227705596344975],
                        [-77.27394605082111, 1.2238666170890156],
                        [-77.27547945397009, 1.223736329266842],
                        [-77.27572536139468, 1.2254695326647465],
                        [-77.27577780020164, 1.2266071857308702],
                        [-77.27366526823766, 1.2262699927042462],
                        [-77.27257985159059, 1.2300393375107035],
                        [-77.27154527108326, 1.236615928384964],
                        [-77.27131520176329, 1.2394123641892065],
                        [-77.272505798532, 1.2364974845929595],
                        [-77.27292608301326, 1.235302578639292],
                        [-77.27372535358609, 1.234409868921034],
                        [-77.27452529683467, 1.233290208042078],
                        [-77.2755616508885, 1.2318887516721446],
                        [-77.27742011441649, 1.229700993099371],
                        [-77.27906650901599, 1.2293111473128704],
                        [-77.28160109017563, 1.2313686660987315],
                        [-77.28161883621749, 1.231537132777774],
                        [-77.28221009031836, 1.231804691222635],
                        [-77.28222474007742, 1.2322982107368574],
                        [-77.28226830616939, 1.2326031028284916],
                        [-77.28256081807825, 1.2334866681847672],
                        [-77.28239900116677, 1.2340653406426583],
                        [-77.28176419007298, 1.234432455027644],
                        [-77.28167705788962, 1.23476223600359],
                        [-77.28249857743265, 1.2353533534252392],
                        [-77.28278486889178, 1.2352724637742512],
                        [-77.28288444853001, 1.2351729072764073],
                        [-77.2830898315334, 1.2341835643774886],
                        [-77.28350059753984, 1.234345343744323],
                        [-77.28426951254704, 1.2358123987458356],
                        [-77.28551982903514, 1.2347341902141125],
                        [-77.28644519869448, 1.2345349260971261],
                        [-77.28650214451977, 1.2346060918554969],
                        [-77.28658756325774, 1.2341221646651093],
                        [-77.29021785961368, 1.2345491592494682],
                        [-77.29075884495353, 1.2336524705450813],
                        [-77.29132821339687, 1.233524398003965],
                        [-77.29164141543544, 1.2348338481371144],
                        [-77.29175592173175, 1.23501052915897],
                        [-77.29315109444929, 1.2367612059303639],
                        [-77.29580875487034, 1.2399551883561486],
                        [-77.29523004100332, 1.2426360208911404],
                        [-77.29640921222108, 1.2460328822276665],
                        [-77.29567409975982, 1.2511774476285211],
                        [-77.29549032164459, 1.2526013880565188],
                        [-77.30151941226927, 1.2535406841517869],
                        [-77.30702656693529, 1.2507237429419575],
                        [-77.3085634473075, 1.243169203879475],
                        [-77.30797500107087, 1.2426621925316397],
                        [-77.30810914003962, 1.238370751585606],
                        [-77.30797500107087, 1.23786784789489],
                        [-77.30703602829146, 1.2388066013750176],
                        [-77.30656654190136, 1.2396783007357186],
                        [-77.29994258320994, 1.23479719808617],
                        [-77.29518985670313, 1.231677133367299],
                        [-77.29475508883053, 1.2305571874676247],
                        [-77.29398815527395, 1.229835648805846],
                        [-77.29290382163555, 1.2286661630772642],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_9",
        type: "fill",
        source: "comuna_9", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline9",
        type: "line",
        source: "comuna_9",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

    
}
function comuna12(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_12", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_12.
                coordinates: [
                    [
                        [-77.26315038158873, 1.2087522910740205],
                        [-77.26321767105497, 1.2098500745134402],
                        [-77.2641148611296, 1.2104779663040546],
                        [-77.26402514211907, 1.2106947388529363],
                        [-77.26422700989389, 1.2108591869810112],
                        [-77.26384383166783, 1.2117983967569046],
                        [-77.2642774735545, 1.2118507211409906],
                        [-77.26435971598107, 1.212658011513298],
                        [-77.26428897900257, 1.2133402391090584],
                        [-77.26470766772076, 1.213721459383109],

                        [-77.26497710484824, 1.2159213432084783],
                        [-77.26511915994894, 1.2167959064508977],
                        [-77.26488740635926, 1.2172144934231994],
                        [-77.26437900144413, 1.2179470329009092],
                        [-77.26391207317221, 1.2214919577663181],
                        [-77.26256726171482, 1.2235423646554011],
                        [-77.26105296247636, 1.2224076384438973],
                        [-77.26164589320047, 1.2217761819926096],
                        [-77.26176190138585, 1.2215184446221912],
                        [-77.26187582337406, 1.2191075799049713],
                        [-77.26061823321993, 1.218587470829661],
                        [-77.25932925338469, 1.2178142577291453],
                        [-77.25767935919612, 1.2175694068679235],
                        [-77.25689308149691, 1.2183039593848122],
                        [-77.25689308149691, 1.2183039593848122],
                        [-77.2560258721918, 1.2188121991125058],
                        [-77.25502374286066, 1.2184973154195688],
                        [-77.25336307037207, 1.217201997744823],

                        [-77.25204586360519, 1.2146473045439734],
                        [-77.25276263656917, 1.2135591158793773],
                        [-77.25312102352473, 1.21273633789869],
                        [-77.25148837399513, 1.2125372788888313],
                        [-77.24836283366187, 1.2097185769713548],
                        [-77.24282993733499, 1.2139410149652434],
                        [-77.24161856451803, 1.2152866907990614],
                        [-77.23946500370141, 1.2168342140149804],
                        [-77.23915094274889, 1.215757676219468],
                        [-77.23712093727329, 1.214833870617909],
                        [-77.23708726216523, 1.211682122088007],

                        [-77.2432399770783, 1.2089117834784702],
                        [-77.24332582503644, 1.2086972113457364],
                        [-77.24225272555594, 1.2087401257738293],
                        [-77.24255319341069, 1.2080534948439663],
                        [-77.24349752095372, 1.207238120390116],
                        [-77.2423760725917, 1.2037769961906974],
                        [-77.24302420821033, 1.2022264420865554],
                        [-77.24326512937989, 1.2009121843394155],
                        [-77.24354290178798, 1.1995236270104215],
                        [-77.2453839634469, 1.1996625902066569],
                        [-77.24566167905618, 1.200015296810875],
                        [-77.24578588444842, 1.200446088973024],
                        [-77.24590089038526, 1.2005626027417264],
                        [-77.24616806606366, 1.2005338549917184],
                        [-77.24635061266247, 1.2005984590707328],
                        [-77.24634637512145, 1.2007479427443855],
                        [-77.24614580714814, 1.2008715054249137],
                        [-77.24605863957788, 1.2009784199975257],
                        [-77.24615115523943, 1.2010525574811481],
                        [-77.24640469046273, 1.20108574280448],
                        [-77.24640610291596, 1.2010836245901118],
                        [-77.24669000593849, 1.2010808003053626],
                        [-77.24686771276839, 1.2012168181256868],
                        [-77.24694451319459, 1.2014478743608947],
                        [-77.24706609948987, 1.2016216440522243],
                        [-77.24720185531453, 1.2016129697142617],
                        [-77.24731631972168, 1.2014474166651468],
                        [-77.24737604711777, 1.2011071474641994],
                        [-77.2474636980615, 1.2008620012092308],
                        [-77.24758463396478, 1.2008608919489347],
                        [-77.24768116078599, 1.2010993828414627],
                        [-77.2477011321763, 1.201489840165408],
                        [-77.247771031051, 1.2017216750115551],
                        [-77.24794689183648, 1.2017412261534872],

                        [-77.24815057543816, 1.2016980300437865],
                        [-77.24829459414656, 1.2017823653042683],
                        [-77.2482843070963, 1.201983947137208],
                        [-77.24828224968559, 1.2019860040951755],
                        [-77.24806745855784, 1.2021899863592154],
                        [-77.2479522435911, 1.2024635616594708],
                        [-77.24806136389725, 1.2026590693238433],
                        [-77.2480605579645, 1.202654460040037],
                        [-77.24825804963035, 1.2027771957091034],
                        [-77.24856427235738, 1.2028603903029165],
                        [-77.24886166364377, 1.2030146376393418],
                        [-77.2490336367166, 1.2032009931683945],
                        [-77.2492155952628, 1.203520459645361],
                        [-77.24942813243962, 1.2038066131720058],
                        [-77.24934159185506, 1.204209708665914],
                        [-77.2493271689176, 1.2045214089237106],
                        [-77.2493399107529, 1.2052130057410864],
                        [-77.24909360071797, 1.2053250408134204],
                        [-77.24909360071797, 1.2053250408134204],

                        [-77.24889433864746, 1.2057854656516724],
                        [-77.24907794684287, 1.2058815263336555],
                        [-77.2492631818206, 1.206145123553597],
                        [-77.24962824325951, 1.2064222390691413],
                        [-77.24967015732932, 1.206561472616258],
                        [-77.24947545779071, 1.206726389813909],
                        [-77.2495160199839, 1.20691969423072],
                        [-77.24985944833657, 1.2070859631860458],
                        [-77.25023667889775, 1.2070535203559842],
                        [-77.25054224900731, 1.206942674385246],
                        [-77.25082686295815, 1.2069988575569113],
                        [-77.25129363598137, 1.2075815995552404],
                        [-77.25157622056224, 1.2075369904682987],
                        [-77.2520508006877, 1.2072855594033456],
                        [-77.25234944455406, 1.207297471704564],
                        [-77.25252420831936, 1.207069201977859],
                        [-77.2528399106044, 1.2069170221486871],
                        [-77.25306259350793, 1.2066831160423845],
                        [-77.25322044465042, 1.2066577527341593],
                        [-77.25345440259417, 1.2067902055616173],
                        [-77.25389935355844, 1.2068578419949745],
                        [-77.25409948625668, 1.207069202870926],
                        [-77.25488310442859, 1.2072721092951042],
                        [-77.25580642609361, 1.2070212951940107],

                        [-77.25644389674835, 1.207037358893885],
                        [-77.2570177502663, 1.2065796671817424],
                        [-77.25625450929289, 1.2061495192400145],
                        [-77.25781384785466, 1.2059842998620525],
                        [-77.2580807998367, 1.2057216433944546],
                        [-77.25874259945101, 1.2052164157411767],
                        [-77.2596409140782, 1.2050300156186324],
                        [-77.26095024998983, 1.2051613438893582],
                        [-77.26177652958256, 1.204924104015788],
                        [-77.26262822383126, 1.2051189798695532],
                        [-77.26316636512797, 1.2053943455816238],
                        [-77.26336975711479, 1.2055976925508958],
                        [-77.26345450377545, 1.2059196585555014],
                        [-77.26336551978142, 1.2061399510621271],
                        [-77.26316212779545, 1.2063771891268829],
                        [-77.26726512939007, 1.205745715980001],
                        [-77.26884385651533, 1.205902333251899],
                        [-77.26877823759423, 1.2065915863414602],
                        [-77.26865593759084, 1.2070325057702291],

                        //rio
                        [-77.26858914846343, 1.2066011840370834],
                        [-77.2684173876271, 1.2065577815826032],
                        [-77.26828148894316, 1.206640812363048],
                        [-77.2680902991093, 1.2071809765851356],
                        [-77.267931750645, 1.2072602332209783],
                        [-77.26745320153213, 1.2073058313971217],
                        [-77.26701074497203, 1.2076107498919413],
                        [-77.26654543673459, 1.2080603120605247],
                        [-77.26649447472852, 1.2080905050553525],
                        [-77.26643973775879, 1.2081999546582551],
                        [-77.26632837633701, 1.2082244864650704],
                        [-77.26633026381882, 1.208235808837955],
                        [-77.26623588973325, 1.2081791969755784],
                        [-77.26609621608566, 1.2080376673145423],
                        [-77.26583196864561, 1.2079848295727231],
                        [-77.2658376058024, 1.2079848297443192],
                        [-77.26564319518513, 1.2080301192383587],
                        [-77.26544500960495, 1.2078659448207958],
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_12",
        type: "fill",
        source: "comuna_12", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline10",
        type: "line",
        source: "comuna_12",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });

   
}
function comuna11(valor) {
    var paint = "#38c74d"
    // Add a data source containing GeoJSON data.
    map.addSource("comuna_111", {
        type: "geojson",
        data: {
            type: "Feature",
            geometry: {
                type: "Polygon",
                // These coordinates outline comuna_111.
                coordinates: [
                    [
                        //rio
                        [-77.26858914846343, 1.2066011840370834],
                        [-77.2684173876271, 1.2065577815826032],
                        [-77.26828148894316, 1.206640812363048],
                        [-77.2680902991093, 1.2071809765851356],
                        [-77.267931750645, 1.2072602332209783],
                        [-77.26745320153213, 1.2073058313971217],
                        [-77.26701074497203, 1.2076107498919413],
                        [-77.26654543673459, 1.2080603120605247],

                        [-77.26649447472852, 1.2080905050553525],
                        [-77.26643973775879, 1.2081999546582551],
                        [-77.26632837633701, 1.2082244864650704],
                        [-77.26633026381882, 1.208235808837955],

                        [-77.26623588973325, 1.2081791969755784],
                        [-77.26609621608566, 1.2080376673145423],
                        [-77.26583196864561, 1.2079848295727231],
                        [-77.2658376058024, 1.2079848297443192],
                        [-77.26564319518513, 1.2080301192383587],
                        [-77.26544500960495, 1.2078659448207958],
                        [-77.26320943470944, 1.2087650631980722],
                        [-77.263281244567, 1.2098868261397229],
                        [-77.2641788561449, 1.2104521953006042],
                        [-77.2640515030235, 1.2107175123613274],
                        [-77.26423102533874, 1.2108162275896746],
                        [-77.26385402805965, 1.2117493113511273],
                        [-77.26427590550202, 1.2118211042178473],

                        [-77.26439599182567, 1.2126301418208811],

                        [-77.26428199245947, 1.2133737967141656],
                        [-77.26467888316103, 1.2138795308201225],
                        [-77.26479143181814, 1.2147696850823166],
                        [-77.26509248485183, 1.2168114116448692],

                        [-77.26442331755061, 1.217852379653067],
                        [-77.26397368278066, 1.2214952123176914],
                        [-77.26376201064335, 1.2244329437253043],
                        [-77.26464824028312, 1.224752232815348],
                        [-77.26500752256982, 1.2248480195353721],
                        [-77.26507937902687, 1.2250316107388386],
                        [-77.2650999565974, 1.2251533901979599],
                        [-77.26509197254694, 1.2257360926035261],
                        [-77.2654113345792, 1.2259835415319742],
                        [-77.2653793983759, 1.225688199260503],
                        [-77.2654432707825, 1.225289088030351],
                        [-77.26563488800156, 1.2249219056461556],
                        [-77.26570674445867, 1.2247383144351858],
                        [-77.26576831750754, 1.2235733682214374],
                        [-77.2680646618096, 1.2242738966817228],
                        [-77.26801321430082, 1.2243694221734245],
                        [-77.26813087908465, 1.2249001878115422],

                        [-77.26938388380694, 1.2233739879488041],
                        [-77.26973001259853, 1.222609636911372],
                        [-77.27182851626424, 1.2203351732126464],
                        [-77.27410754390394, 1.2195099513673568],
                        [-77.27414515845527, 1.2178860779617793],
                        [-77.27414067658424, 1.217571322692251],
                        [-77.27422408641621, 1.2170037258312192],
                        [-77.27433020584522, 1.216949878469336],
                        [-77.27474900585207, 1.2166950142129451],
                        [-77.27497728401403, 1.2159479180445203],
                        [-77.27500391172134, 1.2155752140689486],
                        [-77.27492938083793, 1.2152661525090593],
                        [-77.27484198755747, 1.2151564817605305],
                        [-77.27444547092182, 1.2150882227260382],
                        [-77.2740112632016, 1.2148226740463173],
                        [-77.27392723318599, 1.2145758913456461],
                        [-77.27391147935282, 1.2142477231453626],
                        [-77.2738064418337, 1.2140718248019198],
                        [-77.27380118995751, 1.214063948756987],
                        [-77.2732488992844, 1.2139471839913085],
                        [-77.27312022832336, 1.2138946770190273],
                        [-77.27307296143931, 1.2138132912093482],
                        [-77.2731333580129, 1.2136925251647313],
                        [-77.2740258911353, 1.212957384364671],
                        [-77.27406746773687, 1.212822250483626],
                        [-77.27397997231492, 1.2127755967121914],
                        [-77.27345791629659, 1.2129184738848693],
                        [-77.27337917041677, 1.2128309980650585],
                        [-77.27306877290698, 1.2121243940801918],
                        [-77.27277242300107, 1.210904958796263],
                        [-77.27321238243121, 1.2105017238961437],
                        [-77.27092552915809, 1.2072256615540056],
                        [-77.27041199754024, 1.2073246531616917],
                        [-77.26998110898262, 1.2073246531616917],
                        [-77.26955835039877, 1.207210858809134],
                        [-77.26942420584749, 1.2070442313544447],
                        [-77.26922328843841, 1.207039300901215],
                        [-77.26897688303802, 1.2072414104213465],
                        [-77.2688660140575, 1.2072900738036623],
                        [-77.26873351210509, 1.2071900435177128],
                        [-77.26865509258187, 1.2070305357570135],
                        //
                    ],
                ],
            },
        },
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        id: "comuna_111",
        type: "fill",
        source: "comuna_111", // reference the data source
        layout: {},
        paint: {
            "fill-color": paint, // blue color fill
            "fill-opacity": opacitynum,
        },
    });
    // Add a black outline around the polygon.
    map.addLayer({
        id: "outline13",
        type: "line",
        source: "comuna_111",
        layout: {},
        paint: {
            "line-color": "#000",
            "line-width": linecsm,
        },
    });
}
