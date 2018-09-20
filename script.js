function validate(){
	var fname = document.myForm.fname.value;
	var lname = document.myForm.lname.value;
	var num = document.myForm.num.value;
	var email = document.myForm.email.value;
	var address= document.myForm.address.value;
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
function emptyValue(val){
	if(val.length<1){
		return true;
	}
}