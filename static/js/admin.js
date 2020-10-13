
function gethistory1() {
    if (document.getElementById('hist-home').checked || document.getElementById('hist-shop').checked){
      
      if(document.getElementById('histdate').value)
      {
        document.getElementById('histtable').style.display = "block";
      }

      else{
        alert('Choose the date');
      }
        
    }

    else{
      alert("Select the Type : Home or Shop")
    }
    
  }

  function gethistory2() {
    if (document.getElementById('hist-home').checked || document.getElementById('hist-shop').checked){

      if(document.getElementById('histcust').value)
      {
        document.getElementById('histtable').style.display = "block";
      }

      else{
        alert('Enter the Customer Name');
      }
  
      
    }

    else{
      alert("Select the Type : Home or Shop")
    }
  }

  function gethistory3() {
    if (document.getElementById('hist-home').checked || document.getElementById('hist-shop').checked){
  
      if(document.getElementById('histemp').value)
      {
        document.getElementById('histtable').style.display = "block";
      }

      else{
        alert('Enter the Employee Name');
      }
        
    }

    else{
      alert("Select the Type : Home or Shop")
    }
  }


  function getcustomer() {
    if (document.getElementById('custsearchid').value){
      if (document.getElementById('primecustsearch').checked || document.getElementById('regcustsearch').checked ){
        document.getElementById('modalsearchcusttable').style.display = "block";
      }
      else{
        alert('Choose the Customer Type')
      }
  
    }
    
    else{
      alert('Enter a name to search')
    }
  }


  function getappts(){
    if(document.getElementById("appthome").checked){
      document.getElementById("appttableshop").style.display='none';
      document.getElementById("appttablehome").style.display='block';
    }
    else if(document.getElementById("apptshop").checked){
      document.getElementById("appttablehome").style.display='none';
      document.getElementById("appttableshop").style.display='block';
    }
    else{
      alert('Not Checked')
    }
  }




  function seeoffers(){
    if(document.getElementById('offers-home').checked || document.getElementById('offers-shop').checked){

      if(document.getElementById('offers-male').checked || document.getElementById('offers-female').checked){
        document.getElementById('modalseeofferstable').style.display='block';
      }

      else{
        alert('Choose the Gender')
      }
      
    }

    else{
      alert('Choose the Type')
    }
  }



function add1(){

  if(document.getElementById('addoffers-date').value){

    if(document.getElementById('addoffers-home').checked || document.getElementById('addoffers-shop').checked){
      if(document.getElementById('addoffers-male').checked || document.getElementById('addoffers-female').checked){
        if(document.getElementById('addoffers-shop').checked && document.getElementById('addoffers-male').checked){
          
          document.getElementById('shopmaledropdown').style.display="block";
        }
        else if(document.getElementById('addoffers-shop').checked && document.getElementById('addoffers-female').checked){
          document.getElementById('shopfemaledropdown').style.display="block";
        }
        else if(document.getElementById('addoffers-home').checked && document.getElementById('addoffers-male').checked){
          document.getElementById('homemaledropdown').style.display="block";
        }
        else{
          document.getElementById('homefemaledropdown').style.display="block";
        }

        document.getElementById('addofferbtn1').style.display="none";
        document.getElementById("addoffers-home").disabled = true;
        document.getElementById("addoffers-shop").disabled = true;
        document.getElementById("addoffers-male").disabled = true;
        document.getElementById("addoffers-female").disabled = true;
        document.getElementById("addoffers-date").disabled = true;
      }
      else{
        alert('Choose Gender')
      }
    }

    else{
      alert('Choose Type')
    }

  }
  else{
    alert('Select the date')
  }

}



function add2(services){

  if(document.getElementById(services).value){

    document.getElementById('adddiscountdiv').style.display="block";

    var e = document.getElementById(services);
    var strUser = e.options[e.selectedIndex].text;

    document.getElementById('selectedservice').innerHTML = "Selected Service : " + strUser;
    document.getElementById(services).disabled = true;
    document.getElementById('addofferbtn2').disabled=true;

  }
  else{
    alert('select the service')
  }

}


function offerconfirm(){
  if(document.getElementById('adddiscount').value){
    document.getElementById('addofferbtn3').style.display="none";
    document.getElementById('adddiscount').disabled = true;
    alert('Offer Added Successfully')
  }
  else{
    alert('Add the discount')
  }
}