   // Initialize EmailJS
        emailjs.init("8uNfJpoAwcXnhOplg");

        const form = document.getElementById("contact-form");

        form.addEventListener("submit", function(event){

            event.preventDefault();

            emailjs.sendForm(
                "service_54so3ij",
                "template_52w1zur",
                this
            )

            .then(function(){

                alert("Email Sent Successfully");

            })

            .catch(function(error){

                alert("Failed To Send");

                console.log(error);

            });

        });

        