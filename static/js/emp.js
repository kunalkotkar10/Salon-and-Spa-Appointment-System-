function GetFormattedDate(i) {
    var todayTime = new Date();
    var month = String(todayTime.getMonth() + 1);
    var day = String(todayTime.getDate() + i);
    var year = String(todayTime.getFullYear());
    return day + "/" + month + "/" + year;
  }

  function getdate() {
    document.getElementById('showdate').style.display = "block";
    document.getElementById('notice').style.display = "none";

    var d1 = GetFormattedDate(1);
    var d2 = GetFormattedDate(2);
    var d3 = GetFormattedDate(3);
    var d4 = GetFormattedDate(4);

    document.getElementById('datelabel1').value = d1;
    document.getElementById('date1').value = d1;

    document.getElementById('datelabel2').value = d2;
    document.getElementById('date2').value = d2;

    document.getElementById('datelabel3').value = d3;
    document.getElementById('date3').value = d3;

    document.getElementById('datelabel4').value = d4;
    document.getElementById('date4').value = d4; 
  }

  function gettable(d){
    document.getElementById('table').style.display = "block";
    document.getElementById('appdate').innerHTML = d;
    
  }