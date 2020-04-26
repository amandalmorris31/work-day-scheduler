
{/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past (grey), present (pinkish), or future (green)
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */}

//design

//NEED:
	//date via momentjs

	//blocks represents diff hours 
		//divs hour, (userinput), color styling based on currenttime, 
		//btn onclick to save to localstorage

//code
//time variable via momentjs (currenttime)
//1.a get the data (console.log it) 

console.log(moment().format('dddd MMMM Do YYYY,HH'));
console.log(moment().format('dddd MMMM Do YYYY,HH').split(","));
var day=moment().format('dddd MMMM Do YYYY,HH').split(",")[0];
console.log("day: "+day);
var currenttime=moment().format('dddd MMMM Do YYYY,HH').split(",")[1];
console.log("current hour: "+currenttime);

//1.b.dynamically create the currentdate in front end
$("#currentDay").text(day);
//document.querySelector("#currentDay").textContent=day;

var hourArray=[9,10,11,12,13,14,15,16,17,18,18,20,21,22,23,24];

// for (var i = 0; i < hourArray.length; i++) {}

//2. dynamically create one block/element to the page
// <div class="input-group">
//   <div class="input-group-prepend">
//     <span class="input-group-text">HOUR</span>
//   </div>
//   <textarea class="form-control" aria-label="With textarea"></textarea>
//   <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
// </div>

//var d1= document.createElement("div");
var d1=$("<div>");
//<div></div>
d1.attr("class", "input-group");
//<div class="input-group"></div>
d1.text("THIS IS Div1!");

var d2=$("<div>");
//<div></div>
d2.attr("class", "input-group-prepend");
//<div class="input-group-prepend"></div>
// d2.text("This is Div2!");

var span=$("<span>");
//<span></span>
span.attr("class","input-group-text");
//<span class="input-group-text"></span>
span.text("HOUR");
//<span class="input-group-text">HOUR</span>

var textarea= $("<textarea>");
//<textarea></textarea>
textarea.attr("class","form-control");
//<textarea class="form-control"></textarea>
textarea.attr("aria-label","With textarea");
//<textarea class="form-control" aria-label="With textarea"></textarea>

var saveBtn= $("<button>");
//<button></button>
saveBtn.attr("class", "btn btn-outline-secondary");
//<button class="btn btn-outline-secondary"></button>

//append button to textarea?
textarea.append("button");

var img =$('<img id="saveTask">'); //Equivalent: $(document.createElement('img'))
// img.attr('src', responseObject.imgurl)
img.appendTo('#button-addon2');//<i class="fas fa-save"></i>in font awesome



//append to html
$(".container").append(d1);
$(d1).append(d2);
$(d2).append(span);
$(span).append(textarea);
$(textarea).append(saveBtn);

	//2.a run a for loop to create the rest of the nine


		//2.b (need to style the colors for present, future, past)
			//currenttime -hourarray[i]=0 current time, add class current
			//currenttime -hourarray[i] > 1 future, add class future
			//currenttime -hourarray[i] <0 past,  add class past




//3. localstorage
	//3.a set data to local storage
	//3.b get the data in to local storage
