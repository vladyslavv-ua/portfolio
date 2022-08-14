document.getElementById('logo').addEventListener('click', ()=>{
  if (window.innerWidth<=650) {
    document.getElementById('burgerMenu').classList.toggle('hid')

    document.getElementById('bg').classList.toggle('vis')

  }

})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.getElementById('send').addEventListener('click', async ()=>{
  let email=validateEmail(document.getElementById('email').value)
  if (email.length>0) {
    await fetch('http://127.0.0.1:1022/drop', {
      method:'POST',
      mode: 'cors',

      body: JSON.stringify({email:email[0]}),

      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

    }).then((r)=>{
      console.log(r)
    })
    document.getElementById('email').value=''
  }

  
  
})