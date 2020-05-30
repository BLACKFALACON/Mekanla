

filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* ------------------------------------*/

 addEventListener("load", function()
  {
  setTimeout(hideURLbar, 0);
  }, false);

  function hideURLbar() 
  {
    window.scrollTo(0, 1);
  }


  /* -------------------------  MENÜ  -----------*/

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
 
/* -------------------- sube------------------------------- */
var coll = document.getElementsByClassName("collapsible");
var i;
var time=new Date().getHours();
var durum;
for (i = 0; i < coll.length; i++) 
{
  coll[i].addEventListener("click", 
   function()
   {
    this.classList.toggle("activee");
    var content = this.nextElementSibling;
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    } 
    else 
    {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

if (time >7 &&  time <24)
{
 durum = "Şuan Açık";
 document.getElementById('drm').style.color='green';
}
else
{
 durum = "Şuan Kapalı ";
 document.getElementById('drm').style.color='red'
}
 document.getElementById("drm").innerHTML =durum;


