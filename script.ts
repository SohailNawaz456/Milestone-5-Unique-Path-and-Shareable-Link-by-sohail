document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skill') as HTMLTextAreaElement;
    const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement && usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;
        const username = usernameElement.value;
        const uniquepath = `resume/${username.replace(/\s+/g, '_')}_cv.html`;

        // Handle profile picture
        let profilePictureHTML = '';
        const profilePictureFile = profilePictureElement.files ? profilePictureElement.files[0] : null;
        if (profilePictureFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePictureHTML = `<img src="${e.target?.result}" alt="Profile Picture">`;
                generateResumeOutput();
            };
            reader.readAsDataURL(profilePictureFile);
        } else {
            generateResumeOutput();
        }

        function generateResumeOutput() {
            const resumeOutput = `
                <h2>Resume</h2>
                ${profilePictureHTML}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skill}</p>
            `;

            const downloadlink = document.createElement('a');
            downloadlink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
            downloadlink.download = uniquepath;
            downloadlink.textContent = 'Download Your 2024 Resume';

            const resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadlink);
                resumeOutputElement.style.display = 'block';
            } else {
                console.error('The resume output element is missing');
            }
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
