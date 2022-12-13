function trim() {
ret = true;
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let address = document.getElementById('address').value;
let pCode = document.getElementById('pCode').value;
if(name.trim() == "" || email.trim() == "" || address.trim() == "" || pCode.trim() == ""){
    alert("Please do not fill the form with whitespaces...");
    ret = false;
}

}
/*const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});*/

function inputty(){
    divy = document.getElementById("hiring");
    divy.innerHTML="";
    let otherTextBox = document.getElementById("hiring");
    if(otherTextBox.Box.checked == true) {
        let otherOption = document.createElement("textarea");
        //let otherOptiontext = document.createTextNode("My specific reason is that");
        otherOption.placeholder="Enter other reason";
        divy.appendChild(otherOption);
        //otherOpotion.appendChild(otherOptiontext);
        ret = true;
    }
}
