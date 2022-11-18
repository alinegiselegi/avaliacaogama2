let name1 = document.getElementById("nome")
let attraction1 = document.getElementById("atracoes")
let description1 = document.getElementById("descricao")
let date1 = document.getElementById("data")
let lotation1 = document.getElementById("lotacao")

function verifyName(event) {
    event.preventDefault();
    if (!name1.value) {
        return console.error("Preencha o nome");
    }
    name1 = name1.value;
    console.log(name1);
    location.reload();
    return name1;
}

function verifyAttraction(event) {
    event.preventDefault();
    if (!attraction1.value) {
        return console.error("Preencha a atração");
    }
    attraction1 = attraction1.value;
    console.log(attraction1);
    location.reload();
    return attraction1;
}

function verifyDescription(event) {
    event.preventDefault();
    if (!description1.value) {
        return console.error("Preencha a descrição");
    }
    description1 = description1.value;
    console.log(description1);
    location.reload();
    return description1;
}

function verifyDate(event) {
    event.preventDefault();
    if (!date1.value) {
        return console.error("Preencha a data");
    }
    date1 = date1.value;
    console.log(date1);
    location.reload();
    return date1;
}

function verifyLotation(event) {
    event.preventDefault();
    if (!lotation1.value) {
        return console.error("Preencha a lotação");
    }
    lotation1 = lotation1.value;
    console.log(lotation1);
    location.reload();
    return lotation1;
}

async function postEvent() {
    return await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },

        body: JSON.stringify({
            "name": name1,
            "poster": "link da imagem",
            "attractions": [
                attraction1
            ],
            "description": description1,
            "scheduled": date1,
            "number_tickets": lotation1
        })
    })
}


let runbtn = document.getElementById("btn");
runbtn.addEventListener("click", verifyName);
runbtn.addEventListener("click", verifyAttraction);
runbtn.addEventListener("click", verifyDescription);
runbtn.addEventListener("click", verifyDate);
runbtn.addEventListener("click", verifyLotation);
runbtn.addEventListener("click", postEvent);
