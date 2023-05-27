const changeTheme = document.getElementById("changeTheme");
const main = document.querySelector("main");
const changeImg = document.querySelector("changeImg")
changeTheme.addEventListener("click", () => {
    const darkThemeActive = main.classList.contains("darkTheme");
if (darkThemeActive) {
    main.classList.remove("darkTheme")
}
    main.classList.add("darkTheme")
    changeImg.setAttribute("src", "./src/imgs/moon.png")
})


