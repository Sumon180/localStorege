let selectFontSize = document.getElementById("selectFontSize");
let selectbgColor = document.getElementById("selectbgColor");
let resetbtn = document.getElementById("resetbtn");
let mainElement = document.querySelector("main");


let setVelues = (font,bg) => {
    selectFontSize.value = font;
    selectbgColor.value = bg;
    mainElement.style.fontSize =font;
    mainElement.style.backgroundColor = bg;
}

let initialSetup = () => {
    let bg = localStorage.getItem("bgColor");
    let font = localStorage.getItem("fontSize");

    if( bg && font){
        setVelues(font,bg);
    }

    if( !bg && !font){
        setVelues('16px','green');
    }

    if( bg && !font){
        setVelues('16px',bg);
    }

    if( !bg && font){
        setVelues(font,'green');
    }
}

let changFontSize = (event) =>{
    let selectedFontSize = event.target.value;
    mainElement.style.fontSize =selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
};

let changbgSize = (event) => {
    let selectedbgColor = event.target.value;
    mainElement.style.backgroundColor = selectedbgColor;
    localStorage.setItem("bgColor",selectedbgColor);
};

let clearLocalStorege = () => {

    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setVelues("16px","green");

};

selectFontSize.addEventListener("change",changFontSize);

selectbgColor.addEventListener("change",changbgSize);

resetbtn.addEventListener("click",clearLocalStorege);