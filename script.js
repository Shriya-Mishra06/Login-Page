document.querySelector("button").addEventListener("click", () => {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if (email?.trim() === "") {
        return alert("Invalid Email");
    }

    if (password?.trim() === "") {
        return alert("Password is required");
    }

    if (password?.trim()?.length < 8) {
        return alert("Password length is incorrect!");
    }

    return alert("Welcome user!")
})