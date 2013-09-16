function validate2()
{
var Fname=document.getElementById("fname");
if (Fname.value=="")
{alert("First name should be entered");  return false;  }

var Lname=document.getElementById("lname");
if (Lname.value=="")
{alert("Last name is mandatory");  return false;  }

var City=document.getElementById("city");
if (City.value=="")
{alert("Where do you live !");  return false;  }

Date= document.getElementById("date");
if(Date.selectedIndex == 0)
{
alert("Please select date");
return false;
}

Mon = document.getElementById("month");
if(Mon.selectedIndex == 0)
{
alert("Please select Month");
return false;
}

Year = document.getElementById("year");
if(Year.selectedIndex == 0)
{
alert("Please select Year");
return false;
}

var Mob=document.getElementById("num");
if ((Mob.value=="")||(isNaN(Mob.value))||(Mob.value.length!=10))
{alert("Please enter a VALID Contact Number");  return false;  }

 
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

sendData("next.html");
return true;
}	

function isNumericKey(e) {     
if (window.event) 
{
 var num = window.event.keyCode; 
}     
 if(!(num>=48 && num<=57)) 
 { alert('wrong');
 }     
alert('correct');
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

function sendData(page)
{
 
var text1 = document.getElementById('fname').value;
var text2 = document.getElementById('lname').value;
var text3 = document.getElementById('city').value;
var text4 = document.getElementById('date').value;
var text5 = document.getElementById('month').value;
var text6= document.getElementById('year').value;
var text7= document.getElementById('num').value;
var text8 = document.getElementById('email1').value;

 var q_str = '?fname=' + text1 + '&lname=' + text2 + '&city=' + text3 + '&date=' + text4 + '&month=' + text5 + '&year=' +text6+ '&num=' +text7+ '&email=' +text8;
 var url = page + q_str;
 window.location = url;
}