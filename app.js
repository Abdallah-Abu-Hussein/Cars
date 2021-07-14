alert("Welcome To My Website "+ name)
var intrested = prompt("Hi, are you intrested in cars ? Type y for Yes  or n for No  ")
if(intrested == 'y'){
  alert("you are in the right palce !!")
}
else if (intrested == 'n'){
  alert("sorry to waste your time ")
}

var intrested2 = prompt("do want to see the first car in history ? type y for yes or n for No")


if(intrested2 = 'y'){
document.write(
  "<div>" +"<h3>" + 'First car in history' + "</h3>"
 +"<img  src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Capture_d%E2%80%99%C3%A9cran_2016-10-14_%C3%A0_21.26.28.png/330px-Capture_d%E2%80%99%C3%A9cran_2016-10-14_%C3%A0_21.26.28.png />" + "</div>")
}
else{
 alert("sorry to waste your time")
}