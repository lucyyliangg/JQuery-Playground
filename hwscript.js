const app = {
	initialize: function() {

	$('#text1').click("changeText", function(){
		$("#text1").text("You clicked me!");
	});

	$('#text2').mousedown(function(){
		console.log("hi");
			$("#text2").text("Hi there!");
		
	});

	$('#text3').hover(function(){
	console.log("hi");
		$("#text3").text("You hovered!");

	});

	$('#button1').click(function(){
		$("#message").text(randomMessage());

	});

	$('#button2').click(function(){
		$("body").css("background-color", changeColor());

	});

	function randomMessage(){
		var x = Math.floor(Math.random()*3);
		console.log(x);
		var message;

		if(x == 0){
			message = "Have a nice day! :)";
		}
		else if(x == 1){
			message = "You look great today!";
		}
		else {
			message = "You're doing great!";
		}
		return message;
	}

	function changeColor(){
		var x = Math.floor(Math.random()*3);
		console.log(x);
		var colorvalue;

		if(x == 0){
			colorvalue = "lightblue";
		}
		else if(x == 1){
			colorvalue = "#CCCCFF";
		}
		else if (x == 2){
			colorvalue = "#DE3163";
		}
		return colorvalue;
	}
}
}