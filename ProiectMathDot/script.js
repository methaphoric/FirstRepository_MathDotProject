const tabelRezultat = {
    correct: document.querySelector('#correct'),
    total: document.querySelector('#total')
}
let corr = 0;
let tot = 0;

const settings = {
    op: document.querySelector('#selectOp'),
    dif: document.querySelector('#selectDif')
}
let seJoaca = false;
let selectat = false;
let selectat2 = false;
let isNoob = false;

const tabelOperatie = {
    randomNo1: document.querySelector('#randomNo1'),
    randomNo2: document.querySelector('#randomNo2'),
    operator: document.querySelector('#operator'),
    raspunsulTau: document.querySelector('#raspunsulTau'),
    checkButton: document.querySelector('#checkButton'),
    startButton: document.querySelector('#startButton'),
    resetButton: document.querySelector('#resetButton')
}

//VARIABILE SI CONSTANTE IN AFARA OBJECT
const formSubmit = document.querySelector('#formSubmit')
let rezultat = NaN;
const panel = document.querySelector('#panel');
panel.style.color = "transparent";


const randomNo1 = () => Math.floor((Math.random() * 10) + 1);
const randomNo2 = () => Math.floor((Math.random() * 100) + 1);
//FUNCTIE RANDOM






// REZULTAT PT ADUNARE SI SCADERE
const operatieAdunare = () => rezultat = parseInt(tabelOperatie.randomNo1.innerText) + parseInt(tabelOperatie.randomNo2.innerText);
const operatieScadere = () => rezultat = parseInt(tabelOperatie.randomNo1.innerText) - parseInt(tabelOperatie.randomNo2.innerText);


//verificari
function play() {
    if (selectat == true && selectat2 == true) {
        if (isNoob == true) {
            tabelOperatie.randomNo1.textContent = randomNo1();
            tabelOperatie.randomNo2.textContent = randomNo1();
        } else {
            tabelOperatie.randomNo1.textContent = randomNo2();
            tabelOperatie.randomNo2.textContent = randomNo2();
        }
        if (scadere) {
            operatieScadere();
        } else {
            operatieAdunare();
        }
        seJoaca = true;

        // tabelRezultat.correct.innerText = `0 corecte`;
        // tabelRezultat.total.innerText = `din 0`;
        // tabelOperatie.randomNo1.textContent = '?'
        // tabelOperatie.randomNo2.textContent = '?'
        // let corr = 0;
        // let tot = 0;

    } else {
        alert('selecteaza operația matematică și nivelul')
    }
}






//BUTTON START
tabelOperatie.startButton.addEventListener('click', play);
tabelOperatie.startButton.addEventListener('click', () => {
    if (selectat === true && seJoaca === true) {
        tabelOperatie.raspunsulTau.removeAttribute("disabled")
        tabelOperatie.startButton.style.display = "none";
        panel.style.color = "black";
    }
});



//BUTTON SUBMIT
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (seJoaca === true) {
        let rasp = parseInt(formSubmit.elements.result.value);
        if (rasp == rezultat) {
            formSubmit.elements.result.value = "";
            tabelRezultat.correct.innerText = `${++corr} corecte`;
            tabelRezultat.total.innerText = `din ${++tot}`;
        } else {
            formSubmit.elements.result.value = "";
            tabelRezultat.total.innerText = `din ${++tot}`;
        }
        play();
    } else {
        alert('apasa START')
    }
});

let scadere = false;
let adunare = true;

//SELECT OPERATIE
settings.op.addEventListener('change', () => {
    if (settings.op.value == 'scadere') {
        operator.innerText = "-";
        scadere = true;
        adunare = false;
        selectat = true;
        operatieScadere();
    } else {
        operator.innerText = "+";
        scadere = false;
        adunare = true;
        selectat = true;
        operatieAdunare();
    }
})


//SELECT DIFICULTATE
settings.dif.addEventListener('change', () => {
    if (settings.dif.value === 'Noob') {
        selectat2 = true;
        isNoob = true;
        tabelOperatie.randomNo1.textContent = randomNo1();
        tabelOperatie.randomNo2.textContent = randomNo1();
        if (settings.op.value === 'scadere') {
            operator.innerText = "-";
            scadere = true;
            adunare = false;
            selectat = true;
            operatieScadere();
        } else if (settings.op.value === 'adunare') {
            operator.innerText = "+";
            scadere = false;
            adunare = true;
            selectat = true;
            operatieAdunare();
        }
    } else {
        selectat2 = true;
        isNoob = false;
        tabelOperatie.randomNo1.textContent = randomNo2();
        tabelOperatie.randomNo2.textContent = randomNo2();
        if (settings.op.value === 'scadere') {
            operator.innerText = "-";
            scadere = true;
            adunare = false;
            selectat = true;
            operatieScadere();
        } else if (settings.op.value === 'adunare') {
            operator.innerText = "+";
            scadere = false;
            adunare = true;
            selectat = true;
            operatieAdunare();
        }
    }
})

tabelOperatie.resetButton.addEventListener('click', () => {
    window.location.reload();
})
