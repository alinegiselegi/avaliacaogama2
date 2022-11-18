const section = document.getElementById("evento-card");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function getEventos() {
    const response = await fetch(
        `https://xp41-soundgarden-api.herokuapp.com/events`, requestOptions)

    const eventos = await response.json();

    eventos.forEach((evento) => {
        const cardEventos = `
        <article class="evento card p-5 m-3">
        <h2>${evento.name} - ${evento.scheduled}</h2>
        <h4>${evento.attractions}</h4>
        <p>${evento.description}</p>
        <button type="hidden" class="btn btn-primary" data-toggle="modal" data-target="${evento._id} valor="${evento._id} data-whatever="@mdo" data-bs-target="#exampleModal">reservar ingresso</button>
        </article>
        `;

        section.innerHTML += cardEventos;
    });

}

getEventos();
