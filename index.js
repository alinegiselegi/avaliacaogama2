//aqui eu pego a div na qual será adicionada os eventos
let divEventos = document.querySelector(".eventos");

//eu botei um form dentro do modal e estou pegando o form aqui
let form = document.querySelector("form");

//Aqui eu vou salvar o id quando clicar no botão para abrir o modal
let idDoEventoEscolhido = null;

function pegarEventosDaAPI() {
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events`)
        .then(response => response.json())
        .then(eventos => criarCards(eventos))
        .catch(error => console.log("Erro ao obter eventos."))
}

function criarCards(eventos){

    eventos.forEach(evento => {
        //aqui eu crio o card do evento
        let cardCriado = `
        <article class="evento card p-5 m-3">
        <h2>${evento.name} - ${ new Date(evento.scheduled).toLocaleDateString()}</h2>
            <h4>${evento.attractions}</h4>
            <p>${evento.description}</p>
            <a data-id="${evento._id}" data-bs-toggle="modal" data-bs-target="#modalBooking" type="button" class="btn btn-primary">reservar ingresso</a>
        </article>`;

        //aqui eu adiciono o card evento na div
        divEventos += cardCriado;
    });


    //aqui eu pego os botões de todos os cards
    let buttons = document.querySelectorAll(".botao-reserva")

    buttons.forEach(b => {
        //aqui eu adiciono os listeners para pegar os eventos de click dos botões
        b.addEventListener('click', (ev) => {
            idDoEventoEscolhido = ev.target.dataset.id;
        });
    });
}


form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let novaReserva = {number_tickes: 1, evento_id: idDoEventoEscolhido}
    novaReserva["owner_name"] = document.querySelector("#owner_name").value
    novaReserva["owner_email"] = document.querySelector("#owner_email").value


    fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaReserva)
    })
});