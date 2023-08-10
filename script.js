let listitems = document.getElementsByClassName("list-item");
let tabcontents = document.getElementsByClassName("tab-content");

function opencontent(tabcontent) {
    for (let listitem of listitems) {
        listitem.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabcontent).classList.add('active-content');
}