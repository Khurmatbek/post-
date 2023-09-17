const log = JSON.parse(localStorage.getItem("token"));
if (log == null) {
    window.location.href = "login.html"
}
async function GetFunction(url) {
    try {
        const respons = await fetch(url);
        const data = await respons.json();
        console.log(data)
        myRenderFunction(data.data)
    } catch (error) {
        console.log(error)
    }
}
GetFunction("https://reqres.in/api/users?page=2");
const list = document.querySelector(".list");
const fragment = new DocumentFragment();
function myRenderFunction(arr) {
    const template = document.querySelector(".template").content;
    arr.forEach(item => {
        console.log(item);
        const firstTemplate = template.cloneNode(true);
        firstTemplate.querySelector(".image").src = item.avatar;
        firstTemplate.querySelector(".first-name").textContent = item.first_name;
        firstTemplate.querySelector(".last-name").textContent = item.last_name;
        firstTemplate.querySelector(".email").href = item.email;
        firstTemplate.querySelector(".email").textContent = item.email;
        fragment.append(firstTemplate)
    });
    list.append(fragment)
}



