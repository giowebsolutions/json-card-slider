
var btnNext = document.getElementById('btnNext')
var btnPrevious = document.getElementById('btnPrevious')
var panel = document.getElementById('panel')
var counter = 0;
let maxCards;
requestJSON()


btnNext.addEventListener('click', () => {
  increaseCounter()
  requestJSON()
})

btnPrevious.addEventListener('click', () => {
  decreaseCounter()  
  requestJSON()
})

function increaseCounter(){
  if(counter >= 0 && counter < maxCards){
    counter = counter + 1
  } else{
    counter = 0
  }
  console.log(counter, maxCards)
}

function decreaseCounter(){
  if(counter > 0 && counter <= maxCards){
    counter = counter - 1
  } else{
    counter = maxCards
  }
  console.log(counter,maxCards)
}

function requestJSON(){
  var request = new XMLHttpRequest()
  request.open('GET', '/ajax.json')
  request.onload = function() {
    var response = JSON.parse(request.responseText)
    maxCards = response.length - 1
    
    buildCard(response, counter)
  }  
  request.send()
}


function buildCard(data, counter){
console.log('build number' + counter)
  var htmlString = ""
  htmlString += 
  `<div class="card">
      <img src="${data[counter].img}" alt="${data[counter].alt}">
      <ul>
        <li><strong>Name</strong><span>${data[counter].name}</span></li>
        <li><strong>Position</strong><span>${data[counter].position}</span></li>
        <li><strong>Mobile</strong><span>${data[counter].mobile}</span></li>
        <li><strong>Phone</strong><span>${data[counter].phone}</span></li>
        <li><span class="no-margin">${data[counter].description}</span></li>
      </ul>
    </div>
  `
  
  panel.innerHTML = htmlString
}