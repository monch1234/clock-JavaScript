

setInterval(function f(){
	let secundes=document.querySelector("#secundes");
    let minutes=document.querySelector("#minutes");
    let hous=document.querySelector("#hous");

	let date = new Date()
	let sec = date.getSeconds()
	let min = date.getMinutes()
	let hours = date.getHours()

	let secDeg = sec * 6;
	let minDeg = min * 6;
	let hoursDeg = hours * 30;

	secundes.style='transform:rotate('+secDeg+'deg);'
	minutes.style='transform:rotate('+minDeg+'deg);'
	hous.style='transform:rotate('+hoursDeg+'deg);'
}, 1000)