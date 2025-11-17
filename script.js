const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");


box1.addEventListener("mouseover", () => {
    img1.style.height = "40rem";
    img1.style.width = "40rem";
    img1.style.marginLeft = "130px";
})
box1.addEventListener("mouseleave", () => {
    img1.style.height = "32rem";
    img1.style.width = "23rem";
    img1.style.marginLeft = "120px";
})

box2.addEventListener("mouseover", () => {
    img2.style.height = "40rem";
    img2.style.width = "40rem";
    img2.style.marginLeft = "130px";
})
box2.addEventListener("mouseleave", () => {
    img2.style.height = "32rem";
    img2.style.width = "23rem";
    img2.style.marginLeft = "120px";
})