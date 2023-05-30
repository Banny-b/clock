function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = "AM";

    // Определение AM или PM
    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }

    // Добавление 0 перед однозначными цифрами
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Отображение время в виде HH:MM:SS AM/PM
    const time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerText = time;

    // Получение текущей даты
    const currentDate = date.toDateString();
    document.getElementById("date").innerText = currentDate;

    // Обновление время каждую секунду
    setTimeout(showTime, 1000);
}

showTime();
