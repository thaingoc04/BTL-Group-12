        var check_name= /^[a-zA-Z0-9_]{2,19}$/;
        var check_password= /^[A-Za-z0-9]{6,15}$/;
        var check_phone= /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
        var check_email=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        function checknull(txt)
        {
            if(txt.value.length==0)
                 return true;
            else 
                 return false;
        }
        
        function stringmatch(txt, reg) {
            return reg.test(txt.value);
        }
        function notCheck(radio) {
            var rt=true;
            for(i=0; i<radio.length; i++)
                 if(radio[i].checked)
                     rt=false;
                    return rt;
        }
        function validform(f) {
            if(checknull(f.username)){
                alert("Bạn chưa nhập tên tài khoản!");
                f.username.focus();
                return;
            }
            if(checknull(f.password)){
                alert("Bạn chưa nhập mật khẩu!");
                f.password.focus();
                return;
            }
            if(!stringmatch(f.email, check_email)){
                alert("Email không đúng!");
                f.email.value="";
                f.email.focus();
                return;
            }
            
            if(!stringmatch(f.phone, check_phone)){
                alert("Số điện thoại không đúng!");
                f.phone.value="";
                f.phone.focus();
                return;
            }       
            if(!stringmatch(f.username, check_name)){
                alert("Tên toàn khoản không phù hợp!");
                f.name.value="";
                f.name.focus();
                return;
            }
            if(!stringmatch(f.password, check_password)){
                alert("Mật khẩu không đúng yêu cầu!");
                f.password.value="";
                f.password.focus();
                return;
            }
            alert("successful registration!");
        }