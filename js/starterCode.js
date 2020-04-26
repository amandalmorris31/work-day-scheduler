<script>
{/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
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
//1.b.dynamically create the currentdate in front end
var hourarray=[9,10,11,12,13,14,15,16,17,18,18,20,21,22,23,24];

//2. dynamically create one block to the page
	//2.a run a for loop to create the rest of the nine
		//2.b (need to style the colors for present, future, past)
			//currenttime -hourarray[i]=0 current time, add class current
			//currenttime -hourarray[i] > 1 future, add class future
			//currenttime -hourarray[i] <0 past,  add class past

//3. localstorage
	//3.a set data to local storage
	//3.b get the data into local storage


    
</script>
