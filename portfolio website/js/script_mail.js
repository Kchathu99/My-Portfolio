const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${name.value} <br> Email: ${email.value} <br> Subject: ${subject.value} <br> Message: ${mess.value}`;
   

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kanchana.chathurangi.99@gmail.com",
        Password : "CAE17A9CEB13C662FE2C8FF4B7C585935AEB",
        To : 'kanchana.chathurangi.99@gmail.com',
        From : "kanchana.chathurangi.99@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message send Successfully!..",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})