function validateForm() {
    let isValid = true;
    
    
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let address = document.getElementById('address').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();

    
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';

   
    if (fullName.length < 3) {
        document.getElementById('fullNameError').textContent = 'Họ và tên phải dài ít nhất 3 ký tự.';
        isValid = false;
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Email không hợp lệ.';
        isValid = false;
    }

    
    if (password.length < 6 || password !== confirmPassword) {
        document.getElementById('passwordError').textContent = 'Mật khẩu và xác nhận mật khẩu phải giống nhau và dài ít nhất 6 ký tự.';
        isValid = false;
    }

    if (!address) {
        document.getElementById('addressError').textContent = 'Địa chỉ không được để trống.';
        isValid = false;
    }

    
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Số điện thoại phải là số và có ít nhất 10 ký tự.';
        isValid = false;
    }

    
    if (isValid) {
        alert('Đăng ký thành công!');
      
    }
}
