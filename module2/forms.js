let nameInput = document.querySelector('#name');
let form = document.querySelector('form');
let errorBox = document.querySelector('#error-box');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(nameInput.value.length <= 2){
        errorBox.style.display = 'block';
    }else{
        errorBox.style.display = 'none';
    }

    //REGEX CODE IS used to validate the input value
    // Regex patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    let ans=emailPattern.test("mohammedayaz2411@gmail.com");
    console.log(ans);
});