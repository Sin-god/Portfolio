window.onload = init;

var movies = [];
var resultLine = '<div class="result_line">{result}</div>';

function init(){
	const numberButton = document.getElementById("numberButton");
	const yearButton = document.getElementById("yearButton");
	const directorButton = document.getElementById("directorButton");
	const enterButton = document.getElementById("enterButton");

	numberButton.addEventListener("click", getMovieByNumber);
	yearButton.addEventListener("click", getMoviesByYear);
	directorButton.addEventListener("click", getMoviesByDirector);
	enterButton.addEventListener("click", enterMovie);
	
	movies[0] = {
		Name: "Kill Bill vol.1",
		Year: 2004,
		Director: "Quentin Tarantino"
	};
	movies[1] = {
		Name: "Almost Famous",
		Year: 2000,
		Director: "Cameron Crowe"
	};
	movies[2] = {
		Name: "Dead Man",
		Year: 1995,
		Director: "Jim Jarmush"
	};
	movies[3] = {
		Name: "Batman v Superman: Dawn of Justice",
		Year: 2016,
		Director: "Zack Snyder"
	};
	
	movies[4] = {
		Name: "Pulp Fiction",
		Year: 1994,
		Director: "Quentin Tarantino"
	};
}

function getMovieByNumber(){
	let number = parseInt(document.getElementById("numberInput").value);
	
	if (number < 0 || number > movies.length - 1)
	{
		alert('Помилка');
		return;
	}
	
	let result = resultLine.replace('{result}', `<div>${movies[number].Name}</div>
				  <div>${movies[number].Year}</div>
				  <div>${movies[number].Director}</div>`);
				  
	document.getElementById("result").innerHTML = result;
}

function getMoviesByYear(){
	let year = parseInt(document.getElementById("yearInput").value);
	
	let result = '';
	
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].Year >= year){
			result += resultLine.replace('{result}', `<div>${movies[i].Name}</div>
				  <div>${movies[i].Year}</div>
				  <div>${movies[i].Director}</div>`);
		}
	}
	
	document.getElementById("result").innerHTML = result;
}

function getMoviesByDirector(){
	let director = document.getElementById("directorInput").value;
	
	let result = '';
	
	for (let i = 0; i < movies.length; i++) {
		if (movies[i].Director == director){
			result += resultLine.replace('{result}', `<div>${movies[i].Name}</div>
				  <div>${movies[i].Year}</div>
				  <div>${movies[i].Director}</div>`);
		}
	}
	
	document.getElementById("result").innerHTML = result;
}

function enterMovie(){
	movies[movies.length] = {
		Name: document.getElementById("enterNameInput").value,
		Year: parseInt(document.getElementById("enterYearInput").value),
		Director: document.getElementById("enterDirectorInput").value
	};
	
	alert('Фільм успішно додано');
}