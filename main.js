// contact
function submitForm() {
    const firsName=document.getElementById("first-name").value
    const lastName=document.getElementById("last-name").value
    const email=document.getElementById("email").value
    const message=document.getElementById("message").value
    localStorage.setItem(Date.now().toString(),JSON.stringify( {
    firstName: firsName,
    lastName: lastName,
    email: email,
    message: message,
  }));
}

function displaySubmissionCount(){
    const submissionCount=localStorage.length
    document.getElementById("submission-count").innerText=`Total submissions: ${submissionCount.toString()}`;

}
window.onload=function(){
displaySubmissionCount()
}


