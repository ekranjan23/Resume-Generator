function addNewwork() {

    let newNode = document.createElement("textarea");

    newNode.classList.add("work");
    newNode.classList.add("weField");
    newNode.classList.add("margin");
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb = document.getElementById("we");

    let weAddButtonOb = document.getElementById("workadd")
    weOb.insertBefore(newNode, weAddButtonOb);

}



function addNewAcademy() {

    let newNode = document.createElement("textarea");

    newNode.classList.add("academic");
    newNode.classList.add("aqField");
    newNode.classList.add("margin");
    newNode.setAttribute("placeholder", "Enter Here")

    let weOb = document.getElementById("aq");

    let weAddButtonOb = document.getElementById("academicadd")
    weOb.insertBefore(newNode, weAddButtonOb);

}

function generatecv() {

    document.getElementsByClassName("template")[0].style.display = "block"

    document.getElementsByClassName("container")[0].style.display = "none"

    window.scrollTo(0, 0);




    let Name = document.getElementById("name").value;
    let Tname = document.getElementById("Tname");

    if (Name == "") {
        Tname.innerHTML = "Ranjan Kumar";
    }
    else {
        Tname.innerHTML = Name;
    }



    let Phone = document.getElementById("number").value;
    let TPhone = document.getElementById("Tnumber");
    if (Phone == "") {
        TPhone.innerHTML = "+91-7324002***"
    }
    else {

        TPhone.innerText = Phone;
    }





    // let Photo = document.getElementById('photo').files[0];

    // console.log
    // let reader = new FileReader();
    // reader.readAsDataURL("Photo");


    // reader.onloadend = function () {

    //     let TPhoto = document.getElementById("Tphoto");
    //     TPhoto.src = reader.result;
    // }


    let Email = document.getElementById("email").value;
    let Temail = document.getElementById("Temail");
    if (Email == "") {
        Temail.innerHTML = "ekranjan23@gmail.com"
    }
    else {

        Temail.innerText = Email;
    }


    let Prof = document.getElementById("prof").value;
    let TProf = document.getElementById("Tprof");
    if (Prof == "") {
        TProf.innerHTML = "Frontend Developer"
    }
    else {

        TProf.innerText = Prof;
    }



    let Address = document.getElementById("address").value;
    let TAddress = document.getElementById("Taddress");
    if (Address == "") {
        TAddress.innerHTML = "Muzaffarpur, Bihar"
    }
    else {

        TAddress.innerText = Address;
    }


    let Skill = document.getElementById("skill").value;
    let TSkill = document.getElementById("Tskill");
    if (Skill == "") {
        TSkill.innerHTML = "HTML, CSS, JAVASCRIPT, REACT, BOOTSTRAP, C, C++, DSA ETC..."
    }
    else {

        TSkill.innerText = Skill;
    }


    // Important Links...Address..........
    let LinkedIn = document.getElementById("linkedin").value;
    let TLinkedIn = document.getElementById("Tlinkedin");
    if (LinkedIn == "") {
        TLinkedIn.href = "https://www.linkedin.com/in/ekranjan/"
    }
    else {

        TLinkedIn.href = LinkedIn;
    }



    let GitHub = document.getElementById("github").value;
    let TGitHub = document.getElementById("Tgithub");
    if (GitHub == "") {
        TGitHub.href = "https://github.com/ekranjan23"
    }
    else {

        TGitHub.href = GitHub;

    }



    let Twitter = document.getElementById("twitter").value;
    let TTwitter = document.getElementById("Ttwitter");
    if (Twitter == "") {
        TTwitter.href = "https://twitter.com/ekranjan23"
    }
    else {

        TTwitter.href = Twitter;

    }

    let Facebook = document.getElementById("facebook").value;
    let TFacebook = document.getElementById("Tfacebook");
    if (Facebook == "") {
        TFacebook.href = "https://www.facebook.com"
    }
    else {

        TFacebook.href = Facebook;

    }

    let Instagram = document.getElementById("instagram").value;
    let TInstagram = document.getElementById("Tinstagram");
    if (Instagram == "") {
        TInstagram.href = "https://www.instagram.com/ekranjan23/"
    }
    else {

        TInstagram.href = Instagram;

    }


    // Important Links...Address  Khatam. .........

    let About = document.getElementById("objective").value;
    let TAbout = document.getElementById("Tobjective");
    TAbout.innerHTML = About;

    if (About == "") {
        TAbout.innerHTML = "I'm Ranjan Kumar, a CSE student at Heritage Institute of Technology, Kolkata, pursuing an Undergrad Bachelor's degree in Computer Science and Engineering. "
    }
    else {
        TAbout.innerHTML = About;
    }
    // Work Experience..........
    let weF = document.getElementsByClassName("weField");

    let str = '';
    for (let e of weF) {
        str = str + `<p> ${e.value} <hr></p>`
    }

    document.getElementById("Twe").innerHTML = str;

    // Academic................

    let aqF = document.getElementsByClassName("aqField");

    let strs = '';
    for (let e of aqF) {
        strs = strs + `<p> ${e.value} <hr> </p>`
    }

    document.getElementById("Tad").innerHTML = strs;


}






function printpage() {
    document.getElementsByTagName("footer")[0].style.display = "block"
    print()


}


// Set the Data's...






