const t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};t.buttonStart.addEventListener("click",(function(){if(o)return;o=!0,e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.buttonStop.addEventListener("click",(function(){clearInterval(e),o=!1}));let o=!1,e=null;
//# sourceMappingURL=01-color-switcher.126252ea.js.map