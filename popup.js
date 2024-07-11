
var button = document.createElement("button");
// button.innerText = "Open Popup";

button.id = "my-button";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "40px";
button.style.padding = "10px";

 button.style.backgroundColor = "transparent"; 
        button.style.backgroundImage = "url('https://github.com/Aniket-Shival/popup/blob/Aniket-Shival-try-7/Zema_Bird_Transperent.png?raw=true')"; 
        button.style.backgroundSize = "100px 100px"; 
        button.style.backgroundRepeat = "no-repeat";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.zIndex = "9999";
button.style.width = "100px";
button.style.height = "100px"

document.body.appendChild(button);

function openPopup() {

   var buttonZ = document.getElementById("my-button");
  buttonZ.style.display = "none";
  

    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.bottom = "15px";
    popup.style.right = "10px";
    popup.style.padding = "20px";
    popup.style.minWidth = "200px";
  popup.style.maxWidth = "500px";
    popup.style.width = '80%';
    
        popup.style.height = "70%";
   popup.style.maxHeight = "500px";
    popup.style.marginLeft = "2px";
    popup.style.marginRight = "20px";
  popup.style.padding = "0px";
  popup.style.paddingTop = "40px";
  popup.style.paddingBottom = "20px";
    popup.style.backgroundColor = "#3D4648";
 popup.style.borderRadius = "20px";
   
    popup.style.zIndex = "9999";

    var loader = document.createElement("div");
    loader.style.position = "absolute";
    loader.style.top = "40%";
    loader.style.left = "40%";
    loader.style.transform = "translate(-50%, -50%)";
    loader.style.border = "8px solid #f3f3f3";
    loader.style.borderRadius = "50%";
    loader.style.borderTop = "8px solid #3498db";
    loader.style.width = "60px";
    loader.style.height = "60px";
    loader.style.animation = "spin 2s linear infinite";
    popup.appendChild(loader);

    var iframe = document.createElement("iframe");
    iframe.style.minWidth = "200px";
    iframe.style.width = "100%"
    iframe.style.height = "100%";
    iframe.style.border = "none";
     iframe.style.padding = '0';
   iframe.style.backgroundColor = 'transparent'; 
   iframe.style.position = "relative";
    iframe.style.bottom = "0px";
    iframe.style.right = "0px";
     iframe.allow="microphone *"

    popup.appendChild(iframe);
    
    var closeButton = document.createElement("button");
    // closeButton.innerText = "Close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.padding = "5px";
    closeButton.style.backgroundImage = "url('https://github.com/Aniket-Shival/popup/blob/Aniket-Shival-try-8/icons8-close-window-48.png?raw=true')"; 
   closeButton.style.backgroundColor = "transparent"; 
        closeButton.style.backgroundSize = "25px 25px"; 
        closeButton.style.backgroundRepeat = "no-repeat";
    // closeButton.style.backgroundColor = "red";
   closeButton.style.height = '25px';
  closeButton.style.width = '25px'
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";

    popup.appendChild(closeButton);

    document.body.appendChild(popup);

    function closePopup() {
      var buttonZ = document.getElementById("my-button");
        buttonZ.style.display = "block";
     
        document.body.removeChild(popup);
    }

    closeButton.addEventListener("click", closePopup);
  const scriptElement = document.getElementById("popup");
console.log("S",scriptElement)
const credValue = scriptElement.getAttribute("cred");
 

    function loadContent(fileUrl) {
        iframe.src = `https://zema.io/chatPage/${credValue}`;
      // 
      
    }
    loadContent("yourfile.html");

}

button.addEventListener("click", openPopup);

// CSS for loader
var style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);


