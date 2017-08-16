/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function supremeFunction() {
    document.getElementById("supremeDropdown").classList.toggle("show");
}

function ovoFunction() {
    document.getElementById("ovoDropdown").classList.toggle("show");
}

function bapeFunction() {
    document.getElementById("bapeDropdown").classList.toggle("show");
}


function stussyFunction() {
    document.getElementById("stussyDropdown").classList.toggle("show");
}

function kithFunction() {
    document.getElementById("kithDropdown").classList.toggle("show");
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//interactive map attempt 1// 

$( 'click').click(function() {
    map.flyTo({
        center: [-73.562230, 41.023896],
        zoom: 17,
        interactive: false,
    });
});

function supremeNY(){
      map.flyTo({
        center: [-73.9986952, 40.7240792],
        zoom: 17,
        interactive: false,
    });
};

function supremeCali(){
        map.flyTo({
        center: [-118.3623863, 33.5752806],
        zoom: 17,
        interactive: false,
    });
}


function supremeLondon(){
        map.flyTo({
        center: [-0.136132,51.5129652],
        zoom: 17,
        interactive: false,
    });
}

function supremeParis(){
        map.flyTo({
        center: [2.3578278,48.8592722],
        zoom: 17,
        interactive: false,
    });
}

function supremeOsaka(){
        map.flyTo({
        center: [135.4935748,34.6711319],
        zoom: 19,
        interactive: false,
    });
}

function ovoToronto(){
        map.flyTo({
        center: [-79.4143981,43.6508853],
        zoom: 17,
        interactive: false,
    });
}

function ovoNY(){
        map.flyTo({
        center: [-73.9946066,40.7259475],
        zoom: 17,
        interactive: false,
    });
}

function ovoCali(){
        map.flyTo({
        center: [-118.3459678,34.0745819],
        zoom: 19,
        interactive: false,
    });
}

function ovoCali(){
        map.flyTo({
        center: [-118.3459678,34.0745819],
        zoom: 19,
        interactive: false,
    });
}

function bapeLondon(){
        map.flyTo({
        center: [-0.1541546,51.5147824],
        zoom: 18,
        interactive: false,
    });
}


function bapeHK(){
        map.flyTo({
        center: [114.0340567,22.2864971],
        zoom: 17,
        interactive: false,
    });
}

function stussySeattle(){
        map.flyTo({
        center: [-122.3308528,47.6137693],
        zoom: 19,
        interactive: false,
    });
}

function stussyToronto(){
        map.flyTo({
        center: [-79.3993736,43.6514935],
        zoom: 18,
        interactive: false,
    });
}

function stussySeoul(){
        map.flyTo({
        center: [127.0336373,37.52598],
        zoom: 18,
        interactive: false,
    });
}

function kithNY(){
        map.flyTo({
        center: [-73.9976008,40.7264924],
        zoom: 18,
        interactive: false,
    });
}

function kithMiami(){
        map.flyTo({
        center: [-80.1312193,25.7953902],
        zoom: 18,
        interactive: false,
    });
}