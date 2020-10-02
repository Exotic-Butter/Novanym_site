window.addEventListener("load",function (){

    let x = document.getElementById("NovaDrop")
    let xx = document.getElementById("NovaDrop")

    document.getElementById("logomain").addEventListener("mouseover",function() {
        x.style.display="block";
        x.style.zIndex= 10;
    });
    document.getElementById("logomain").addEventListener("click",function() {
        window.location="index.html";
    })
    document.getElementById("logomain").addEventListener("mouseout",function() {
        x.style.display="none";
    })
    document.getElementById("NovaDrop").addEventListener("mouseover",function() {
        x.style.display="block";
    })
    document.getElementById("NovaDrop").addEventListener("mouseout",function() {
        x.style.display="none";
    })
    document.getElementById("logoname").addEventListener("click",function() {
        window.location="index.html";
    });
    document.getElementById("mediabtn").addEventListener("click",function() {
        window.location="media.html"
    })







    document.getElementById("staffbtn").addEventListener("click",function () {
        window.location="staff_.html";
    });
    document.getElementById("homebtn").addEventListener("click",function () {
        window.location="index.html";
    });
    //document.getElementById("storebtn").addEventListener("click",function () {
    //    window.location="store.html";
    //});

/*

let Owner = ["Mrchanjack1","Mikeism"];
let Manager = ["lawne","QTBunny32"];
let Developer = ["ItzNic","Reload"];
let SeniorMod = ["UntitledGoose","FruitsYT"];
let Admin = ["BoZeX","ilytac"]
let Mod = ["OfficialMJ","Burst"];
let Helper = ["Equipable","Wolfeee","StaTic_Ninja","Ashu225"];
let BuildTeam = ["Jbean10","farwl","Soarie","Zachi"];
let Partner = ["cringeboy80","XaveTheBest"];
let Tester = ["addaxie","Conutik","godpatrick","liamloz30"];

let Media = [
    "<a href='https://www.youtube.com/channel/UCKt5ORQxgIwyCygopoKtI3w' target='_blank'>CometLmao</a>",
    "<a href='' target='_blank'>InfamousJackson<a></a>",
    "<a href='' target='_blank'>lotix</a>",
    "<a href='https://www.youtube.com/channel/UC2FUeXpq82LVyWbKmhuNP8g' target='_blank'>Cookie</a>",
    "<a href='https://www.youtube.com/channel/UCF3JOCReUdDRRIbz8PO5trA' target='_blank'>thready</a>",
    "<a href='https://www.youtube.com/channel/UC4FsnjwfPHngtl0j9yVaVQg' target='_blank'>Xianslad</a>",
    "<a href='https://www.youtube.com/channel/UCTQ3JStNaz-NgDGVHtTaRPQ' target='_blank'>ILIKECAKEMAN</a>",
    "<a href='https://www.youtube.com/channel/UCcRjkkEFRnBvX2PVlLHkwWA' target='_blank'>Penguinplayz</a>"];



document.getElementById("owner").innerHTML=Owner.join("<br> <br>");
document.getElementById("sr_mod").innerHTML=SeniorMod.join("<br> <br>");
document.getElementById("mod").innerHTML=Mod.join("<br> <br>");
document.getElementById("dev").innerHTML=Developer.join("<br> <br>");
document.getElementById("manager").innerHTML=Manager.join("<br> <br>");
document.getElementById("helper").innerHTML=Helper.join("<br> <br>");
document.getElementById("builder").innerHTML=BuildTeam.join("<br> <br>");
document.getElementById("partner").innerHTML=Partner.join("<br> <br>");
document.getElementById("tester").innerHTML=Tester.join("<br> <br>");
document.getElementById("media").innerHTML=Media.join("<br> <br>");
document.getElementById("admin").innerHTML=Admin.join("<br> <br>");

*/
});