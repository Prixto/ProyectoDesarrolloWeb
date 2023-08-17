
D
document.getElementById("contactForm").addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var submissionInfo = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert("Submitted Information:\n" + submissionInfo);
    
});
