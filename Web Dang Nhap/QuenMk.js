
var email = 'nguyendai@gmail.com';


function display(){
    var mail = document.myform.email.value;
    if (mail == "") {
        alert("Bạn chưa nhập email!");
        document.myform.email.focus();
        return false;
    }
    else if (!checkEmail(mail)) {
        alert("Hãy nhập địa chỉ email hợp lệ!\nExample@gmail.com");
        document.myform.email.focus();
        return false;
    }
    else if(mail == email) {
        alert("Xác nhận thành công!");
        return false;
    }
    else{
        alert("Xác nhập thất bại!");
        document.myform.email.focus();
        return false;
    }
}
//------------------checkEmail---------------------

function checkEmail(mail) { 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (filter.test(mail)) {
             return true; 
    }else{
        return false;
    }
}

//---------------back----------------------
function back() {
	location.href='DangNhap.html';
}