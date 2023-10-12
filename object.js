
function saveData() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const userData = {
        name: name,
        email: email,
        password: password
    }
    console.log(userData)
    localStorage.setItem(("userData"), JSON.stringify(userData))
}

document.getElementById("my-form").addEventListener("submit", saveData)















