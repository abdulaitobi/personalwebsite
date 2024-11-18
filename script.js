document.getElementById("darkmode").addEventListener("click", function(){
    document.getElementById("lightmode").style.display = "block";
    document.getElementById("darkmode").style.display = "none";
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.color = "lightgray";
    });
    document.body.style.backgroundColor = "black";
});

document.getElementById("lightmode").addEventListener("click", function(){
    document.getElementById("darkmode").style.display = "block";
    document.getElementById("lightmode").style.display = "none";
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.color = "black";
    });
    document.body.style.backgroundColor = "white";
});