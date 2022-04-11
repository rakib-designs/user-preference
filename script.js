const fontSize = document.getElementById("fontSize");
const backgroundColor = document.getElementById("backgroundColor");
const ResetBtn = document.querySelector(".submit");
const paragraph = document.querySelector(".paragraph");

const getDataFromLocalStorage = () => {
     const fontSize = localStorage.getItem("fontSize")
     const bgColor = localStorage.getItem("bgColor")
     if (fontSize && bgColor) {
          paragraph.style.fontSize = fontSize;
          paragraph.style.backgroundColor = bgColor;
     } else if (!fontSize && bgColor) {
          paragraph.style.fontSize = "16px";
          paragraph.style.backgroundColor = bgColor;
     }else if (fontSize && !bgColor) {
          paragraph.style.fontSize = fontSize;
          paragraph.style.backgroundColor = "aqua";
     } else if (!fontSize && !bgColor) {
          paragraph.style.fontSize = "16px";
          paragraph.style.backgroundColor = "aqua";
          
     }
}

fontSize.addEventListener("change", (event) => {
     let fontSizeValue = event.target.value;
     paragraph.style.fontSize = fontSizeValue;
     localStorage.setItem("fontSize", fontSizeValue)
})

backgroundColor.addEventListener("change", (event) => {
     let bgColorValue = event.target.value;
     paragraph.style.backgroundColor = bgColorValue;
     localStorage.setItem("bgColor", bgColorValue)
})

ResetBtn.addEventListener("click", ()=> {
     paragraph.style.fontSize = "16px";
     paragraph.style.backgroundColor = "aqua";
     localStorage.removeItem("fontSize");
     localStorage.removeItem("bgColor");
})

getDataFromLocalStorage();