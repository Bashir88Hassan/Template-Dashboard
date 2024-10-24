let search = document.getElementById("search")
search.onmouseenter = () =>
    search.style.width = "200px";

search.onmouseleave = () =>
    search.style.width = "160px";

let links = document.querySelectorAll("li a")
links.forEach((e) =>
    e.onmouseenter = function () {
        links.forEach(function (ele) {
            ele.classList.remove("active");
        });
        this.classList.add("active")
    });