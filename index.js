// //digital clock be set on it. by using new Date()

function startTime() {
    const today = new Date();
    let h = today.getHours()> 12 ? today.getHours() - 12 : today.getHours();
    var am_pm = today.getHours() >= 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("nhour").innerHTML =  h +"<br>Hours";
    document.getElementById("nmin").innerHTML =   m + "<br>Min"; 
    document.getElementById("nsec").innerHTML =   s + "<br>Secs";
    document.getElementById("am_pm").innerHTML = am_pm;
 
  }
  
  setInterval(startTime, 1000);

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


// 
//div creates under party Time!!

function displayValue() {
  const today = new Date();
  let h = today.getHours();

  let waketime = document.getElementById("wake").value;
  let lunchtime = document.getElementById("lunch").value;
  let naptime = document.getElementById("nap").value;
  let nighttime = document.getElementById("night").value;

  var insideValue1 = document.getElementById("wake");
  var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

  var insideValue2 = document.getElementById("lunch");
  var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

  var insideValue3 = document.getElementById("nap");
  var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

  var insideValue4 = document.getElementById("night");
  var invalue4 = insideValue4.options[insideValue4.selectedIndex].text;

  if (waketime == "none") {
    document.getElementById("wake1").innerHTML = "";
  } else {
    document.getElementById("wake1").innerHTML =
      "Wake up time : " + invalue1;
  }

  if (lunchtime == "none") {
    document.getElementById("lunch1").innerHTML = "";
  } else {
    document.getElementById("lunch1").innerHTML =
      "Lunch time : " + invalue2;
  }

  if (naptime == "none") {
    document.getElementById("nap1").innerHTML = "";
  } else {
    document.getElementById("nap1").innerHTML = 
      "Nap time : " + invalue3;
  }
  if (nighttime == "none") {
    document.getElementById("night1").innerHTML = "";
  } else {
    document.getElementById("night1").innerHTML = "Night time : " + invalue4;
  }

// ========================================

  if (h===parseInt(waketime.value)) {
    let image = document.getElementById("image");
    image.src = "wakeup.png";
    document.getElementById("grab").innerText =
      "Let's have some breakfast";
  }

  if (h===parseInt(lunchtime.value))  {
    let image = document.getElementById("image");
    image.src = "lunch.png";
    document.getElementById("grab").innerHTML = "Let's have lunch";
  }
  if (h===parseInt(naptime.value))  {
    let image = document.getElementById("image");
    image.src = "defaul.png";
    document.getElementById("grab").innerHTML =
      "Let's have some dinner";
  }
  if (h===parseInt(nighttime.value)) {
    let image = document.getElementById("image");
    image.src = "night.png";
    document.getElementById("message").innerHTML =
      "Let's have some dinner";
  }


  
}


   