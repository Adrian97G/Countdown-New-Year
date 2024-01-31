const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");


const deadline = new Date('31 Dec 2024 23:59:59').getTime();

function countTimer() {
    const now = new Date().getTime();
    const distance = deadline - now;

    // Calcular días, horas, minutos y segundos restantes
    const daysCalc = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursCalc = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minsCalc = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsCalc = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los valores en los elementos HTML
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;
}

// Llamar a countTimer por primera vez para evitar retrasos
countTimer();

// Actualizar la cuenta cada segundo
setInterval(countTimer, 1000);
