window.addEventListener('DOMContentLoaded',()=>{
    const submit=document.getElementById('submit');
    const email=document.getElementById('email');
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    submit.addEventListener('click',(e)=>{
        const validateEmail=regex.test(email.value);
        if(!validateEmail){
            e.preventDefault();

            submit.innerText="Invalid Email";
            submit.disabled=true;

            setTimeout(()=>{
                submit.innerText="Send Message";
                submit.disabled=false;
            },2000);
        }
    })
})