async function postEvent() {
  return await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
      method: 'POST',
      redirect: 'follow',
      headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
      },
      body: JSON.stringify({
      "owner_name": fnome,
      "owner_email": email,
      "number_tickets": 1,
      "event_id": "623bc253d2891ac70ab1cce4"
      })
  })
}

let fnome = document.getElementById("fnome");
let email = document.getElementById("email");

const modal = document.getElementById("myModal");


const btn = document.getElementsByClassName("btn btn-primary") [0];


const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function verifyName(event) {
  event.preventDefault();
  if (!fnome.value) {
      return console.error("Preencha o nome");
  }
  fnome = fnome.value;
  console.log(fnome);
  return fnome;
}

function verifyEmail(event) {
  event.preventDefault();
  if (!email.value) {
      return console.error("Preencha o email");
  }
  email = email.value;
  console.log(email);
  location.reload()
  return email;
}

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", verifyName);
enviar.addEventListener("click", verifyEmail);