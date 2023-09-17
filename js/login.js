const elForm = document.querySelector(".form");
const elEmail = document.querySelector(".email");
const elPassword = document.querySelector(".password");
const log = JSON.parse(localStorage.getItem("token"))
if (log) {
    window.location.href = "index.html"
}
elForm.addEventListener("submit", evt => {
    evt.preventDefault();
    const EmailValue = elEmail.value;
    const PAsswordVAlue = elPassword.value;
    postFunction("https://reqres.in/api/login", EmailValue, PAsswordVAlue)
})

async function postFunction(url, email, password) {
    try {
        const respons = await fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
        const result = await respons.json();
        console.log(result)
        if (result.token) {
            window.location.href = "index.html"
            localStorage.setItem("token", JSON.stringify(result))
        }
        else if (result.error) {
            alert("Logindan o'ta olmadingiz !!! qaytadan urinib koring yoki royhatdan o'ting")
        }

    } catch (error) {
        console.log(error)
    }
}
const registrBtn = document.querySelector(".registr-btn");
registrBtn.addEventListener("click", evt => {
    window.location.href = "registr.html"
})



