function validate2()
{
alert("hi");

var Fname=document.getElementById("fname");

if (Fname.value=="")
{alert("first name should be entered");  return false;  }

var Lname=document.getElementById("lname");
if (Lname.value=="")
{alert("Last name is mandatory");  return false;  }

var City=document.getElementById("city");
alert("check");
if (City.value=="Sagar")
{alert("where do u live");  return false;  }

/*var Date=document.getElementById("day");
if (Date.options[Date.selectedIndex].value == "0")
{alert("Please choose date");  return false;  }

var Mon=document.getElementById("mon");
if (Mon.options[Mon.selectedIndex].value == "0")
{alert("Please choose month");  return false;  }

var Year=document.getElementById("year");
if (Year.options[Year.selectedIndex].value == "0")
{alert("Please choose Year");  return false;  }
*/
Date= document.getElementById("date");
if(Date.selectedIndex == 0)
{
alert("Please select date");
return false;
}
Mon = document.getElementById("month");
if(Mon.selectedIndex == 0)
{
alert("Please select month");
return false;
}
Year = document.getElementById("year");
if(Year.selectedIndex == 0)
{
alert("Please select year");
return false;
}

var emailID=document.getElementById("email1");
	
	if (emailID.value==""){
		alert("Please Enter your Email ID")
		return false;
	}
	if (echeck(emailID.value)==false){
		emailID.value="";
		return false;
	}
	
var Pswd=document.getElementById("pswd");
if (Pswd.value=="")
{alert("You cannot move forward without giving password");  return false;  }

Que= document.getElementById("quelist");
if(Date.selectedIndex == 0)
{
alert("Please select the security question");
return false;
}

var Answer=document.getElementById("secretAnswer");
if (Answer.value=="")
{alert("Provide the answer to security question");  return false;  }


return true;
}	

function isNumericKey(e) {     
if (window.event) 
{
 var num = window.event.keyCode; 
}     
 if(!(num>=48 && num<=57)) 
 { return false;
 }     
return true;
} 


function echeck(str) {

		var at="@"
		var dot="."
		var lat=str.indexOf(at)	
		var lstr=str.length
		var ldot=str.indexOf(dot)
		

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1)
		 {
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
	}

function sendData()
{
  // Initialize packed or we get the word 'undefined'
  var packed = "";
  for (i = 0; (i < data.length); i++) {
    if (i > 0) {
      packed += ",";
    }
    packed += escape(data[i]);
  }
  window.location = "next.html?" + packed;
}









