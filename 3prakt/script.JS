document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");
    if (userName) {
        alert(`С возвращением, ${userName}!`);
    }
});

function promptName() {
    const name = prompt("Пожалуйста, введите ваше имя:");
    if (name) {
        localStorage.setItem("userName", name);
        alert(`Здравствуйте, ${name}!`);
    }
}

function task1() {
    const array1 = [1, 2, 3];
    const array2 = new Array(4, 5, 6);
    const array3 = Array.of(7, 8, 9);
    alert(`Массив 1: ${array1}\nМассив 2: ${array2}\nМассив 3: ${array3}`);
}

function task2() {
    const array = [10, 20, 30, 40, 50];
    alert(`5-й элемент: ${array[4]}`);
    array[4] = 100;
    alert(`Новое значение 5-го элемента: ${array[4]}`);
}

function task3() {
    const array = [10, 20, 30, 40, 50];
    document.querySelectorAll("button").forEach(button => {
        button.onmouseover = () => {
            alert(`Длина массива: ${array.length}`);
        };
    });
}

function task4() {
    const array = [10, 20, 30, 40, 50];
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += `${array[i]} `;
    }
    alert(`Элементы массива: ${result}`);
}

function task5() {
    const array1 = [10, 20, 30];
    const array2 = [40, 50, 60];
    const combinedArray = array1.concat(array2);
    alert(`Объединенный массив: ${combinedArray}`);
}

function task6() {
    const array = [10, 20, 30, 40, 50];
    const lastElement = array.pop();
    alert(`Удаленный последний элемент: ${lastElement}`);
}

function task7() {
    const array = [10, 20, 30, 40];
    const lastElement = array.pop();
    alert(`Удаленный последний элемент: ${lastElement}`);
}

function task8() {
    const array = [20, 30, 40];
    array.unshift(10);
    alert(`Новый массив: ${array}`);
}

function task9() {
    const today = new Date();
    alert(`Сегодняшняя дата: ${today}`);
}

function task10() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    alert(`Сегодняшняя дата: ${formattedDate}`);
}

function task11() {
    const num1 = Math.floor(Math.random() * 51);
    const num2 = Math.floor(Math.random() * 51);
    alert(`Произведение ${num1} и ${num2} равно: ${num1 * num2}`);
}

function startQuiz() {
    const questions = [
        { question: "Для чего используется JavaScript?", choices: ["Для стилизации веб-страниц", "Для создания интерактивных эффектов", "Для разработки серверных приложений", "Для хранения данных"], answer: 1 },
        { question: "Какая компания разработала JavaScript?", choices: ["Microsoft", "Netscape", "Google", "Amazon"], answer: 1 },
        { question: "Какой из следующих фреймворков является JavaScript?", choices: ["Django", "Flask", "React", "Laravel"], answer: 2 },
        { question: "Как правильно вывести 'Hello World' в окно alert?", choices: ["alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "msgBox('Hello World');"], answer: 1 },
        { question: "Какое из следующих объявлений переменной правильное?", choices: ["var 1stVariable;", "var first-variable;", "var firstVariable;", "var first Variable;"], answer: 2 },
        { question: "Какой метод используется для добавления элемента в конец массива?", choices: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
        { question: "Какой символ используется для комментариев в JavaScript?", choices: ["<!-- -->", "//", "/* */", "**"], answer: 1 },
        { question: "Какой из следующих типов данных не является JavaScript?", choices: ["Number", "String", "Boolean", "Character"], answer: 3 },
        { question: "Какой результат выражения '2' + 2 в JavaScript?", choices: ["4", "22", "NaN", "undefined"], answer: 1 },
        { question: "Какой метод используется для преобразования JSON строки в JavaScript объект?", choices: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"], answer: 0 }
    ];

    let score = 0;
    const userAnswers = [];

    questions.forEach((question, index) => {
        const userAnswer = prompt(`${index + 1}. ${question.question}\n${question.choices.map((choice, i) => `${i}. ${choice}`).join('\n')}`);
        userAnswers.push(userAnswer);
        if (parseInt(userAnswer) === question.answer) {
            score++;
        }
    });

    let result = `Вы набрали ${score} из ${questions.length}\n\nВаши ответы:\n`;
    questions.forEach((question, index) => {
        const correct = parseInt(userAnswers[index]) === question.answer ? "Верно" : "Неверно";
        result += `${index + 1}. ${question.question}\nВаш ответ: ${question.choices[userAnswers[index]]}\n${correct}\n\n`;
    });

    alert(result);
}

function showOverlay() {
    const userName = localStorage.getItem("userName") || "Гость";
    const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById("overlayContent").innerText = `Добро пожаловать, ${userName}!\nСегодня: ${today}`;
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
}

function hideOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

document.querySelector("header").addEventListener("dblclick", showOverlay);
