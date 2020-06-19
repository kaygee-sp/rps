var formV = true;
var display = document.getElementById("display");

function selected(){
	// var sel = document.getElementById("rock");
	// alert("You have selected " + sel.value);
	var compChoice = "";
	var random = Math.random();

	if(random <= 0.33){
		compChoice = "Rock";
	}else if(random > 0.33 && random <= 0.67){
		compChoice = "Paper";
	}else{
		compChoice = "Scissor";
	}
	return compChoice;
}

function rock(evt){
	var rock = document.getElementById("rock");
	var choice = selected();
	if(choice === "Rock"){
		display.innerHTML = "You have clicked " + rock.value + " and the computer choice is " + choice + ". " + "<span>IT'S A TIE!</span>";
	}else if(choice === "Paper"){
		display.innerHTML = "You have clicked " + rock.value + " and the computer choice is " + choice + ". " + "<span>COMPUTER WINS!</span>";
	}else if(choice === "Scissor"){
		display.innerHTML = "You have clicked " + rock.value + " and the computer choice is " + choice + ". " + "<span>YOU WIN!</span>";
	}
	display.style.display = "block";
	preventSubmit(evt);
}

function paper(evt){
	var paper = document.getElementById("paper");
	var choice = selected();
	if(choice === "Rock"){
		display.innerHTML = "You have clicked " + paper.value + " and the computer choice is " + choice + ". " + "<span>YOU WIN!</span>";
	}else if(choice === "Paper"){
		display.innerHTML = "You have clicked " + paper.value + " and the computer choice is " + choice + ". " + "<span>IT'S A TIE!</span>";
	}else if(choice === "Scissor"){
		display.innerHTML = "You have clicked " + paper.value + " and the computer choice is " + choice + ". " + "<span>COMPUTER WINS!</span>";
	}
	display.style.display = "block";
	preventSubmit(evt);
}	

function scissor(evt){
	var scissor = document.getElementById("scissor");
	var choice = selected();
	if(choice === "Rock"){
		display.innerHTML = "You have clicked " + scissor.value + " and the computer choice is " + choice + ". " + "<span>YOU WIN!</span>";
	}else if(choice === "Paper"){
		display.innerHTML = "You have clicked " + scissor.value + " and the computer choice is " + choice + ". " + "<span>COMPUTER WINS!</span>";
	}else if(choice === "Scissor"){
		display.innerHTML = "You have clicked " + scissor.value + " and the computer choice is " + choice + ". " + "<span>IT'S A TIE!</span>";
	}
	display.style.display = "block";
	preventSubmit(evt);
}

function preventSubmit(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}else{
		evt.returnValue = false;
	}
	formV = false;
}

function createEventListener(){
	var form = document.getElementById("rock");
	if(form.addEventListener){
		form.addEventListener("click", rock, false);
	}else if(form.attachEvent){
		form.attachEvent("onclick", rock);
	}

	var form1 = document.getElementById("paper");
	if(form1.addEventListener){
		form1.addEventListener("click", paper, false);
	}else if(form1.attachEvent){
		form1.attachEvent("onclick", paper);
	}

	var form2 = document.getElementById("scissor");
	if(form2.addEventListener){
		form2.addEventListener("click", scissor, false);
	}else if(form2.attachEvent){
		form2.attachEvent("onclick", scissor);
	}
}

if(window.addEventListener){
	window.addEventListener("load", createEventListener, false);
}else if(window.attachEvent){
	window.attachEvent("onload", createEventListener);
}