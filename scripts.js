// MenuToggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = () => {
    navigation.classList.toggle("activate");
    main.classList.toggle("activate");
};
// add hovered class in select list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
