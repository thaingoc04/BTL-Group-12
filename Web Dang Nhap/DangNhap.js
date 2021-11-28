
var taikhoan = 'dai123';
var matkhau = 'dai';

function display() {
	var user = document.myform.username.value;
	var pass = document.myform.password.value;
	if (user == "") {
			alert("Bạn chưa nhập tài khoản!");
			document.myform.username.focus();
			return false;
	}
	if(user.length < 5) {
		alert("Tên tài khoản phải lớn hơn 5 kí tự!");
		document.myform.username.focus();
			return false ;
	}	
	if (pass == "") {
			alert("Bạn chưa nhập mật khẩu!");
			document.myform.password.focus();
			return false;
	}

	if (user == taikhoan && pass == matkhau) {
		alert('Đăng nhập thành công!');
		location.href='../Home/homepage.html';						//link trang chu
		return false;
	}
	else if(user == taikhoan && pass != matkhau){
		alert('Sai mật khẩu!');
		document.myform.password.focus();
		return false;
	}
	else{
		alert('Thông tin tài khoản không chính xác!');
		document.myform.password.focus();
		return false;
	}
	
}
//-------------------eye-------------------------
var x=true;
function eye(){
	if(x==true){
		document.getElementById('pass').type = "text";
		x=false;
	}
	else{
		document.getElementById('pass').type = "password";
		x = true;
	}
}
//----------------linktaoTk------------------
function taoTk() {
	location.href='../Register/register.html';			//link tao tai khoan
}
