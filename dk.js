
// JavaScript Document
function validateForm() {
//Họ phải được điền
var ho = document.getElementById('full_name').value;
var data='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="full_name">Họ tên</label><input type="text" id="full_name" name="full_name" placeholder="Nhập họ tên" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập họ tên</div></div>'
if (ho == "") {
document.getElementById('a').innerHTML = data;

}
//Tên phải được điền
//Nhập số điện thoại
var sdt = document.getElementById('phone_number').value;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
var kiemTraDT = isNaN(sdt);
var sdt1='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="otp_code">SĐT</label><input type="text" id="phone_number" name="phone_number" placeholder="Nhập số điện thoại" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Số điện thoại không hợp lệ</div></div>';
var data1='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="otp_code">SĐT</label><input type="text" id="phone_number" name="phone_number" placeholder="Nhập số điện thoại" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập số điện thoại</div></div>';
if (sdt == "") {
document.getElementById('b').innerHTML = data1;

}
else{
	if (vnf_regex.test(sdt) == false) 
        {
			document.getElementById('b').innerHTML = sdt1;
        }
}

if (kiemTraDT == true) {
alert("Điện thoại phải để ở định dạng số");
return false;
}


//Email phải được điền chính xác
var email=document.getElementById('email').value;
var data3='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="email">Email</label><input type="text" id="email" name="email" placeholder="Nhập email" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập email</div></div>';
var data2 ='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="otp_code">Mã xác thực</label><input type="text" id="otp_code" name="otp_code" placeholder="Nhập mã xác thực gửi tới số điện thoại trên" class="Input-sc-1sflv1m-0 qJuWA" value=""><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập mã xác thực</div></div>';
var aCong=email.indexOf("@");
var dauCham = email.lastIndexOf(".");
if (email == "") {
document.getElementById('d').innerHTML = data3;


}
else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
alert("Email bạn điền không chính xác");

}


var pwd = document.getElementById('password').value;
var data4 ='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="password">Mật khẩu</label><input type="password" id="password" name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" class="Input-sc-1sflv1m-0 qJuWA" ><div class="InputError-xeouh7-0 dLpXwR">Vui lòng nhập mật khẩu</div></div>';
var data5 ='<div class="UserModalstyle__FormItem-uq4a18-6 llEucX"><label for="password">Mật khẩu</label><input type="password" id="password" name="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" class="Input-sc-1sflv1m-0 qJuWA" ><div class="InputError-xeouh7-0 dLpXwR">Mật khẩu không hợp lệ!</div></div>';

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
