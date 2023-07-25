class LoginForm {
    render() {
      const form = document.createElement('form');
      form.classList.add('login-form');
  
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.placeholder = 'Email';
  
      const passwordInput = document.createElement('input');
      passwordInput.type = 'password';
      passwordInput.placeholder = 'Password';
  
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit';
  
      form.appendChild(emailInput);
      form.appendChild(passwordInput);
      form.appendChild(submitButton);
  
      return form;
    }
  }
  
  export default LoginForm;