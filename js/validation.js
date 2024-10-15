$(document).ready(function() {
    $("#submitBtn").click(function() {
        let isValid = true;

        // Validate Name
        const name1 = $("#name1").val().trim();
        if (name1 === "") {
            $("#nameError1").text("Name is required.");
            isValid = false;
        } else {
            $("#nameError1").text("");
        }

        // Validate Hobbies (Checkboxes)
        const hobbies1 = $('input[name="hobbies1[]"]:checked').length;
        if (hobbies1 === 0) {
            $("#hobbiesError1").text("Please select at least one hobby.");
            isValid = false;
        } else {
            $("#hobbiesError1").text("");
        }

        // Validate Gender (Radio Buttons)
        const gender1 = $('input[name="gender1"]:checked').val();
        if (!gender1) {
            $("#genderError1").text("Gender is required.");
            isValid = false;
        } else {
            $("#genderError1").text("");
        }

        // Validate Country (Select Box)
        const country1 = $("#country1").val();
        if (country1 === "") {
            $("#countryError1").text("Please select your country.");
            isValid = false;
        } else {
            $("#countryError1").text("");
        }

        // Validate Message (Textarea)
        const message1 = $("#message1").val().trim();
        if (message1 === "") {
            $("#messageError1").text("Message is required.");
            isValid = false;
        } else {
            $("#messageError1").text("");
        }

        // If form is valid, show success message
        if (isValid) {
            $("#successMessage1").fadeIn();
            $("#form1")[0].reset(); // Reset form fields
        } else {
            $("#successMessage1").fadeOut();
        }
    });
});
