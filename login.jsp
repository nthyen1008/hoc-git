function validateForm() {
//Nhập số điện thoại
var email = document.getElementById('email').value;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
var kiemTraDT = isNaN(email);
var aCong=email.indexOf("@");
var data1='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><span><label for="email"  style="margin-right:6px">Email / SĐT</label><input type="text" id="email" name="email" placeholder="Nhập email hoặc Số điện thoại" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập Email hoặc SĐT</div></div>';
var dauCham = email.lastIndexOf(".");
var sdt1='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><span><label for="email"  style="margin-right:6px">Email</label><input type="text" id="email" name="email" placeholder="Nhập email" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Số điện thoại không hợp lệ!</div></div>';
var email1='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><span><label for="email"  style="margin-right:6px">Email</label><input type="text" id="email" name="email" placeholder="Nhập email" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Email không hợp lệ!</div></div>';

if (email == "") {
document.getElementById('b').innerHTML = data1;

}
else{
if (kiemTraDT == true) {
if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
document.getElementById('b').innerHTML = email1;

}

}
else {
	
	if (vnf_regex.test(email) == false) 
        {
			document.getElementById('b').innerHTML = sdt1;
       
}
}

}


//Email phải được điền chính xác
var pwd = document.getElementById('password').value;
var data4 ='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><span><label for="password" style="margin-right:22px">Mật khẩu</label><input type="password" id="password" name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" class="Input-sc-1sflv1m-0 qJuWA" ><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập mật khẩu</div></div>';
var data5 ='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><span><label for="password" style="margin-right:22px">Mật khẩu</label><input type="password" id="password" name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" class="Input-sc-1sflv1m-0 qJuWA" ><div class="InputError-xeouh7-0 dLpXwR">Mật khẩu không hợp lệ!</div></div>';

if (pwd == "") {
document.getElementById('e').innerHTML = data4;


}

else{
	if(pwd.length>32||pwd.length<6)
{
document.getElementById('e').innerHTML = data5;
}
}

 
}
// JavaScript Document