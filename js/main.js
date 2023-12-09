$(".span").click(function () {
  $(".bar").fadeToggle(100);
});

$(`.about .skills .skills-items .progress .progress-in`).each(function () {
  $(this).animate(
    {
      width: $(this).attr(`data-width`),
    },
    5000
  );
});

let form = document.querySelector(".form-contact");
function sendEmail() {
  let theName = document.querySelector(".the-name").value;
  // let formContact = document.querySelector(".form-contact");
  let input = document.querySelector(".email").value;
  let textArea = document.querySelector(".textarea").value;
  let body = `
    <b>Name: </b>${theName}
    <br />
    <br />
    <b>Email: </b> ${input}
    <br />
    <br />
    <b>Message: </b> ${textArea}`;
  console.log(input);
  console.log(textArea);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "eslamrageh41@gmail.com",
    Password: "E1F7B97B96591BE838B2F279214778F093F8",
    To: "eslamrageh41@gmail.com",
    From: "eslamrageh41@gmail.com",
    Body: body,
    Subject: "Contact Form",
    Port: 2525,
    SSL: false,
  }).then(
    // (message) => console.log(message),
    setTimeout(() => {
      swal({
        title: "Submitted Successfully",
        text: "We received your details will connect you sooner, please bepatient.",
        icon: "success",
      });
    }, 1000),
    (error) => console.log(error)
  );
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
});
