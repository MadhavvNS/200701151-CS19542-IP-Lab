function validateForm() {
    var isValid = true;
    var errors = {
        student_name: "",
        rollno: "",
        gender: "",
        dob: "",
        year: "",
        department: "",
        section: "",
        mobile_no: "",
        email: "",
        address: "",
        city: "",
        country: "",
        pincode: ""
    };


    var studentName = document.getElementById("student_name").value;
    if (studentName.trim() === "") {
        errors.student_name = "Student Name is required.";
        isValid = false;
    }

 
    var rollno = document.getElementById("rollno").value;
    if (rollno.trim() === "") {
        errors.rollno = "Roll No is required.";
        isValid = false;
    }


    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        errors.gender = "Gender is required.";
        isValid = false;
    }

    var dob = document.getElementById("dob").value;
    if (dob.trim() === "") {
        errors.dob = "Date of Birth is required.";
        isValid = false;
    }


    var year = document.getElementById("year").value;
    if (year.trim() === "") {
        errors.year = "Year is required.";
        isValid = false;
    }


    var department = document.getElementById("department").value;
    if (department.trim() === "") {
        errors.department = "Department is required.";
        isValid = false;
    }


    var section = document.getElementById("section").value;
    if (section.trim() === "") {
        errors.section = "Section is required.";
        isValid = false;
    }

 
    var mobileNo = document.getElementById("mobile_no").value;
    if (mobileNo.trim() === "") {
        errors.mobile_no = "Mobile No is required.";
        isValid = false;
    }

    var email = document.getElementById("email").value;
    if (email.trim() === "") {
        errors.email = "E-Mail ID is required.";
        isValid = false;
    }

    var address = document.getElementById("address").value;
    if (address.trim() === "") {
        errors.address = "Address is required.";
        isValid = false;
    }

    var city = document.getElementById("city").value;
    if (city.trim() === "") {
        errors.city = "City is required.";
        isValid = false;
    }

  
    var country = document.getElementById("country").value;
    if (country.trim() === "") {
        errors.country = "Country is required.";
        isValid = false;
    }

    var pincode = document.getElementById("pincode").value;
    if (pincode.trim() === "") {
        errors.pincode = "Pincode is required.";
        isValid = false;
    }

    for (var key in errors) {
        document.getElementById(key + "_error").innerText = errors[key];
    }

    return isValid;
}