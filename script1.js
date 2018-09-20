function validate(){
	var title = document.myForm.name-title;
	var fname = document.myForm.fname;
	var lname = document.myForm.lname;
	var num = document.myForm.num;
	var email = document.myForm.email;
	var address= document.myForm.address;
	if(!(title.value == "select")){
		if(!(emptyValue(fname))){ 
			if(!(emptyValue(lname))){
				if(!(emptyValue(num))){
					if(!(emptyValue(email))){
						if(document.myForm.qual1.checked || document.myForm.qual2.checked || document.myForm.qual3.checked || document.myForm.qual4.checked || document.myForm.qual5.checked){
							if(document.myForm.lang1.checked || document.myForm.lang2.checked || document.myForm.lang3.checked || document.myForm.lang4.checked || document.myForm.lang5.checked || document.myForm.lang6.checked){
								if(emptyValue(address)){
									alert("Enter address!!!");
								}
								else{
									alert("success");
									window.location.reload();
								}
							}
							else{
								alert("Select at least one language you know!!!");
							}
						}
						else{
							alert("Select at least one qualification!!!");
						}
					}
					else{
						alert("Enter email address!!!");
					}
				}
				else{
					alert("Enter your contact no.!!!");
				}
			}
			else{
				alert("Enter your last name!!!");
			}
		}
		else{
			alert("Enter first name!!!");
		}
	}
	else{
		alert("Select title!!!");
	}
}
function emptyValue(val){
	if(val.value.length<1){
		return true;
	}
}
function valName(val){
	var letters= /^[A-Za-z]+$/; 
	if(val.value.match(letters)){  
		return true;  
	}    
}
function valNum(val){
	var nums= /^[0-9]+$/; 
	if(val.value.match(nums)){  
		return true;  
	}   
}
function valAdd(val){
	var add= /^[0-9A-Za-z]+$/; 
	if(val.value.match(add)){  
		return true;  
	}   
}
function valEmail(val){
	var email= /^[0-9A-Za-z]+$/; 
	if(val.value.match(email)){  
		return true;  
	}   
}


