//Art and Design Center—D6

let map;

//boolean arrays to do question verification
let isQs = [true, false, false, false, false];
let check = [[true, false, false, false, false],[false, true, false, false, false],[false, false, true, false, false],[false, false, false, true, false],[false, false, false, false, true]];


var score = 0;
var checkNum = -1;



// styles for map to disable street names and points of interest
var styles = [
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];

function initMap() {
  var ans1 = document.getElementById("a1");  //document id's for text manipulation
  var ans2 = document.getElementById("a2");
  var ans3 = document.getElementById("a3");
  var ans4 = document.getElementById("a4");
  var ans5 = document.getElementById("a5");
  var que2 = document.getElementById("q2");
  var que3 = document.getElementById("q3");
  var que4 = document.getElementById("q4");
  var que5 = document.getElementById("q5");
  var scoreDoc = document.getElementById("score");
  
  
  
  //var lati = { lat: 34.241, lng: -118.5277 };
  var options = { //options for map object to make it a bit cleaner
    center: { lat: 34.241, lng: -118.5280 },
    zoom: 17,
    disableDefaultUI: true,
    gestureHandling: "none",
    keyboardShortcuts: false,
    styles
  };
  //glitch keeps saying "google is not defined" error for the line below, refreshing the project makes the error go away
  map = new google.maps.Map(document.getElementById("map"), options);

  const art = new google.maps.Rectangle({  // creates rectangle for art center
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.243936940896134,
          south: 34.24311162943209,
          east: -118.52957367180126,
          west: -118.5303710972476
        }
      });
  
  
  const sierra = new google.maps.Rectangle({ //creates rectangle for sierra
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.23847723534513,
          south: 34.23809779506968,
          east: -118.53002054761282,
          west: -118.53140886469002
        }
      });
  
  
  const liveOak = new google.maps.Rectangle({ //creates rectangle for live oak
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.23839570286823,
          south: 34.23815424083879,
          east: -118.52760426898395,
          west: -118.52882947777066
        }
      });
  
  const library = new google.maps.Rectangle({ //creates rectangle for library
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.24039880915861,
          south: 34.239474,
          east: -118.528606,
          west: -118.53005363413486
        }
      });
  
  const recreation = new google.maps.Rectangle({ //creates rectangle for recreation center
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        bounds: {
          north: 34.24062527410716,
          south: 34.23932077828689,
          east: -118.52468728558561,
          west: -118.52518419688917
        }
      });
  
  //sets all rectangles to be invisible
    art.setVisible(false);
    sierra.setVisible(false);
    liveOak.setVisible(false);
    library.setVisible(false);
    recreation.setVisible(false);
 
  
  map.addListener("dblclick", (event) => { //event saves the clicked coords
    //lati = JSON.stringify(event.latLng.toJSON(), null, 2)
    //console.log(lati)
    //console.log(art.getBounds().contains(event.latLng))
    if(checkNum < 4){ //gets next boolean array for next question verification, doesn't allow greater than 4 to avoid errors
      checkNum++;  
    }    
    isQs = check[checkNum]; //sets isQs array to next check array
    
    //boolean gates to make sure it is the question that it's supposed to be and doesn't let the user answer a different question out of order
    //if right sets rectangle to green and displays it and the next question
    //if wrong displays red rectangle and next question
      if (isQs[0] && !isQs[1] && !isQs[2] && !isQs[3] && !isQs[4]) { //art
        if(art.getBounds().contains(event.latLng)){ //checks if rectangle contains clicked coords
          art.strokeColor = "#00FF00"
          art.fillColor = "#00FF00"
          art.setVisible(true);
          ans1.innerHTML = "Your answer is correct!";
          que2.innerHTML = "Where is Sierra Hall?";
          ans1.style.color = "green";
          score++;
        }
        else{
          art.setVisible(true);
          ans1.innerHTML = "Sorry wrong location.";
          que2.innerHTML = "Where is Sierra Hall?";
          ans1.style.color = "red";
        }
      }
    
        //boolean gates to make sure it is the question that it's supposed to be and doesn't let the user answer a different question out of order
    //if right sets rectangle to green and displays it and the next question
    //if wrong displays red rectangle and next question
    if(!isQs[0] && isQs[1] && !isQs[2] && !isQs[3] && !isQs[4]){ //sierra
      if(sierra.getBounds().contains(event.latLng)){ //checks if rectangle contains clicked coords
          sierra.strokeColor = "#00FF00"
          sierra.fillColor = "#00FF00"
          sierra.setVisible(true);
          ans2.innerHTML = "Your answer is correct!"
          que3.innerHTML = "Where is Live Oak Hall?"
          ans2.style.color = "green";
          score++;
        }
        else{
          sierra.setVisible(true);
          ans2.innerHTML = "Sorry wrong location."
          que3.innerHTML = "Where is Live Oak Hall?"
          ans2.style.color = "red";
        }
    }
    
        //boolean gates to make sure it is the question that it's supposed to be and doesn't let the user answer a different question out of order
    //if right sets rectangle to green and displays it and the next question
    //if wrong displays red rectangle and next question
    if(!isQs[0] && !isQs[1] && isQs[2] && !isQs[3] && !isQs[4]){ //liveOak
      if(liveOak.getBounds().contains(event.latLng)){ //checks if rectangle contains clicked coords
          liveOak.strokeColor = "#00FF00"
          liveOak.fillColor = "#00FF00"
          liveOak.setVisible(true);
          ans3.innerHTML = "Your answer is correct!"
          que4.innerHTML = "Where is the University Library?"
          ans3.style.color = "green";
          score++;
        }
        else{
          liveOak.setVisible(true);
          ans3.innerHTML = "Sorry wrong location."
          que4.innerHTML = "Where is the University Library?"
          ans3.style.color = "red";
        }
    }
    
        //boolean gates to make sure it is the question that it's supposed to be and doesn't let the user answer a different question out of order
    //if right sets rectangle to green and displays it and the next question
    //if wrong displays red rectangle and next question
    if(!isQs[0] && !isQs[1] && !isQs[2] && isQs[3] && !isQs[4]){ //library
      if(library.getBounds().contains(event.latLng)){ //checks if rectangle contains clicked coords
          library.strokeColor = "#00FF00"
          library.fillColor = "#00FF00"
          library.setVisible(true);
          ans4.innerHTML = "Your answer is correct!"
          que5.innerHTML = "Where is the Student Recreation Center?"
          ans4.style.color = "green";
          score++;
        }
        else{
          library.setVisible(true);
          ans4.innerHTML = "Sorry wrong location."
          que5.innerHTML = "Where is the Student Recreation Center?"
          ans4.style.color = "red";
        }
    }
    
        //boolean gates to make sure it is the question that it's supposed to be and doesn't let the user answer a different question out of order
    //if right sets rectangle to green and displays it and the next question
    //if wrong displays red rectangle and next question
    if(!isQs[0] && !isQs[1] && !isQs[2] && !isQs[3] && isQs[4]){ //recreation
      if(recreation.getBounds().contains(event.latLng)){ //checks if rectangle contains clicked coords
          recreation.strokeColor = "#00FF00"
          recreation.fillColor = "#00FF00"
          recreation.setVisible(true);
          ans5.innerHTML = "Your answer is correct!"
          ans5.style.color = "green";
          score++;
          scoreDoc.innerHTML = score + " Correct, " + (5-score) + " Incorrect"
        }
        else{
          recreation.setVisible(true);
          ans5.innerHTML = "Sorry wrong location."
          scoreDoc.innerHTML = score + " Correct, " + (5-score) + " Incorrect"
          ans5.style.color = "red";
        }
    }
  });
  
  
  
}



//https://mapstyle.withgoogle.com/
//https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds
//https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng
