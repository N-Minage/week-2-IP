
<script>
var female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afuna','Ama'];
var male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
function mysubmit(){
	let c,y,m,d;
	let gender= document.registration.gender.value;
	let date = document.registration.birthday.value;
	let cc = Number(date.charAt(0) + date.charAt(1));
	let yy = Number(date.charAt(2) + date.charAt(3));
	let mm = Number(date.charAt(5) + date.charAt(6));
	let dd = Number(date.charAt(8) + date.charAt(9));
	c = (Math.floor(cc/4)) - 2*cc-1;
	y = Math.floor((5*yy/4));
	m = Math.floor((26*(mm+1)/10));
	d = dd;
	let dayofweek= Math.floor((c+y+m+d))%7


	if(gender === 'Male'){
		alert('Your Akan name is '+male[dayofweek]);
	}
	else if(gender==='Female'){
		alert('Your Akan name is '+female[dayofweek]);
	}
}
</script>

