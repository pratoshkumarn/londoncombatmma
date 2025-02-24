function myfunc(){
    location.href="https://www.google.com/search?hl=en-IN&gl=in&q=London+Combat+MMA+Academy,+93+Whitton+Rd,+Hounslow+TW3+2EH,+United+Kingdom&ludocid=4382448566822721903&lsig=AB86z5WFHTHTKCz_CHE3WyHgxU6R#lrd=0x48760cc514c0f4d9:0x3cd195c097e3596f,3";

}
function feedbackfunc(){
    document.querySelector("#feedback").style.display="block";
    document.querySelector(".main").style.display="none";
}
function tq(){
    document.body.innerHTML="";
    let ele=document.createElement("div");
    ele.className="thankyou";
    ele.textContent="Thank you for your Feedback!";
    document.body.appendChild(ele);
}