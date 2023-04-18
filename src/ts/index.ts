import '../styles/main.scss';

console.log("Hello World!");

console.log("Chi me lo ha fatto fare?!?");

document.getElementById("site_header").addEventListener("scroll", adjustHeader);

function adjustHeader(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("site_header").classList.remove("large");
        document.getElementById("site_header").classList.add("not_top");
      } else {
        document.getElementById("site_header").classList.remove("not_top");
        document.getElementById("site_header").classList.add("large");
      }
}
