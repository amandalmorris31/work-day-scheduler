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

	//blocks represent diff hours 
		//divs hour, (userinput), color styling based on currentTime, 
		//btn onclick to save to local storage

//code
//time variable via momentjs (currentTime)
//1.a get the data (console.log it) 

console.log(moment().format('dddd MMMM Do YYYY,HH'));
console.log(moment().format('dddd MMMM Do YYYY,HH').split(","));
var day=moment().format('dddd MMMM Do YYYY,HH').split(",")[0];
console.log("day: "+day);
var currentTime=moment().format('dddd MMMM Do YYYY,HH').split(",")[1];
console.log("current hour: "+currentTime);

//1.b.dynamically create the currentdate in front end
$("#currentDay").text(day);
//document.querySelector("#currentDay").textContent=day;

var hourArray=[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
// for (var i = 0; i < hourArray.length; i++) {}

//2. dynamically create one block/element to the page
{/* <div class="container">
		<div class="row">
			<div class="input-group-prepend col-sm-12">
				<span class="input-group-text col-sm-2">HOUR</span>
				<textarea class="form-control col-sm-8" aria-label="With textarea"></textarea>
				<button class="btn btn-outline-secondary col-sm-2" type="button" id="button-addon2">Submit</button>
			</div>
		</div>
</div> */}

for(var i=0; i<hourArray.length; i++){
	
//var d1= document.createElement("div");
var d1=$("<div>");
//<div></div>
d1.attr("class", "time col-sm-12");
//<div class="container"></div>

var d2=$("<div>");
//<div></div>
d2.attr("class", "row col-sm-12 col-lg-12");
//<div class="row col-sm-12 col-lg-12"></div>
// d2.text("This is the row!");

var d3=$("<div>");
//<div></div>
d3.attr("class", "input-group-prepend col-sm-12");
//<div class="input-group-prepend col-sm-12"></div>

var span=$("<span>");
//<span></span>
span.attr("class","input-group-text");
//<span class="input-group-text"></span>
//am
//if (hourArray <= 11){"AM"};
if (hourArray[i] <= 11){
	//"9AM"="9" + "AM"
	span.text(hourArray[i]+"AM");
}
//pm
else {
	//if (hourArray[i]>12) hourArray[i]-12
	if (hourArray[i]>12){
		//hourArray[i]-12
		span.text((hourArray[i]-12)+"PM");
	}
	//else
	else{
	span.text(hourArray[i]+"PM");
	}
}

//<span class="input-group-text">HOUR</span>
var textarea= $("<textarea>");
//<textarea></textarea>

// textarea.attr("class", "form-control col-sm-8 aria-label With textarea");


//if current
//if currentTime=hourarray, 
//add class=present
if (parseInt(currentTime)==hourArray[i])
{
	//class="form-control present"
	textarea.attr("class","form-control present");
}

//if past
else if (parseInt(currentTime) > hourArray[i])
{
	//class="form-control past"
	textarea.attr("class", "form-control past");
}
//if future
else if (parseInt(currentTime) < hourArray[i])
   //class="form-control future"
   textarea.attr("class", "form-control future");

// textarea.attr("class","form-control");
//<textarea class="form-control"></textarea>

//<textarea class="form-control" aria-label="With textarea"></textarea>

var button= $("<button>");
//<button></button>
button.attr("class", "btn btn-outline-secondary saveBtn");
//<button class="btn btn-outline-secondary"></button>
button.attr("id", "button-addon2");
button.html("<i class='fas fa-save'></i>");
//<button class="btn btn-outline-secondary" id="button-addon2"></button>


//append to html
$(".container").append(d1);
$(d1).append(d2);
$(d2).append(d3);
$(d3).append(span);
$(d3).append(textarea);
$(d3).append(button);
	
}

	//2.a run a for loop to create the rest of the hour blocks


		//2.b (need to style the colors for present, future, past)
			//currenttime -hourarray[i]=0 current time, add class current
			//currenttime -hourarray[i] > 1 future, add class future
			//currenttime -hourarray[i] <0 past,  add class past


//3. localstorage
	//3.a set data to local storage
	//3.b get the data in to local storage


