const elForm = document.querySelector(".form");
const elEmail = document.querySelector(".email");
const elPassword = document.querySelector(".password");
const userToken = JSON.parse(localStorage.getItem("token"));
// console.log(userToken)
elForm.addEventListener("submit", evt => {
    evt.preventDefault();
    const EmailValue = elEmail.value;
    const PAsswordVAlue = elPassword.value;
    RegistrPost("https://reqres.in/api/register", EmailValue, PAsswordVAlue)
})


async function RegistrPost(url, email, password) {
    try {
        const respons = await fetch(url, {
            method: "POST",
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            , body: JSON.stringify({
                email: email,
                password: password,
            })


        })
        const result = await respons.json();
        console.log(result);
        localStorage.setItem("token", JSON.stringify(result));
        if (result.token) {
            window.location.href = "index.html";

        }
    } catch (error) {
        console.log(error)
    }
}