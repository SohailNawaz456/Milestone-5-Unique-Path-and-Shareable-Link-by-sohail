var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    var profilePictureElement = document.getElementById('profilePicture');
    var usernameElement = document.getElementById('username');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skill_1 = skillElement.value;
        var username = usernameElement.value;
        var uniquepath_1 = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Handle profile picture
        var profilePictureHTML_1 = '';
        var profilePictureFile = profilePictureElement.files ? profilePictureElement.files[0] : null;
        if (profilePictureFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePictureHTML_1 = "<img src=\"".concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Picture\">");
                generateResumeOutput();
            };
            reader.readAsDataURL(profilePictureFile);
        }
        else {
            generateResumeOutput();
        }
        function generateResumeOutput() {
            var resumeOutput = "\n                <h2>Resume</h2>\n                ".concat(profilePictureHTML_1, "\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email_1, "</p>\n                <p><strong>Phone Number:</strong> ").concat(phone_1, "</p>\n                <h3>Education</h3>\n                <p>").concat(education_1, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience_1, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skill_1, "</p>\n            ");
            var downloadlink = document.createElement('a');
            downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
            downloadlink.download = uniquepath_1;
            downloadlink.textContent = 'Download Your 2024 Resume';
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadlink);
                resumeOutputElement.style.display = 'block';
            }
            else {
                console.error('The resume output element is missing');
            }
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
