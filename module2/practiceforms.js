document.addEventListener('DOMContentLoaded', () => {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailAns = emailRegex.test(email.value);
    const passwordAns = passwordRegex.test(password.value);

    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (!emailAns) {
      emailError.textContent = 'Email is incorrect';
      emailError.style.display = 'block';
    }

    if (!passwordAns) {
      passwordError.textContent = 'Password is incorrect';
      passwordError.style.display = 'block';
    }

    if (emailAns && passwordAns) {
      form.submit();
    }
  });

  const toggleBtn = document.querySelector('#toggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (password.type === 'password') password.type = 'text';
      else password.type = 'password';
    });
  }
});
