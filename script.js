const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const name = document.querySelector("#name").value;
    const secondName = document.querySelector("#secondName").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const agree = true;

    const user = {};
    user.name = name;
    user.secondName = secondName;
    user.email = email;
    user.phone = phone;
    user.agree = agree;

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: ttt86sav'
            },
            body: JSON.stringify(user),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            alert("Данные успешно отправлены");
            form.reset();
        })
        .catch((error) => {
            alert("Ошибка отправки данных");
        })

    fetch(`https://polinashneider.space/my-users`, {
            headers: {
                'Authorization': 'Bearer: ttt86sav'
            }
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })

    fetch(`https://polinashneider.space/last-user`, {
            headers: {
                'Authorization': 'Bearer: ttt86sav'
            }
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
});