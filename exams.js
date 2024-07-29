document.addEventListener('DOMContentLoaded', () => {
    const studentDetails = document.getElementById('studentDetails');
    const teacherSlots = document.getElementById('teacherSlots');
    const preview = document.getElementById('preview');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const proceedBtn = document.getElementById('proceedBtn');
    const previewContent = document.getElementById('previewContent');

    let studentInfo = {};

    nextBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const course = document.getElementById('course').value;
        const department = document.getElementById('department').value;

        if (name && id && course && department) {
            studentInfo = { name, id, course, department };
            studentDetails.classList.add('hidden');
            teacherSlots.classList.remove('hidden');
        } else {
            alert('Please fill in all fields.');
        }
    });

    submitBtn.addEventListener('click', () => {
        const teacher = document.getElementById('teacher').value;
        const timeSlot = document.getElementById('timeSlot').value;

        if (teacher && timeSlot) {
            studentInfo.teacher = teacher;
            studentInfo.timeSlot = timeSlot;
            teacherSlots.classList.add('hidden');
            preview.classList.remove('hidden');
            showPreview();
        } else {
            alert('Please select a teacher and time slot.');
        }
    });

    proceedBtn.addEventListener('click', () => {
        alert('Thank you for submitting your information. You will be notified about your meeting.');
        // Here you can add code to send the data to a server or perform any other necessary actions
        // Reset the form and show the first section again
        document.getElementById('studentForm').reset();
        document.getElementById('slotForm').reset();
        preview.classList.add('hidden');
        studentDetails.classList.remove('hidden');
        studentInfo = {};
    });

    function showPreview() {
        previewContent.innerHTML = `
            <p><strong>Name:</strong> ${studentInfo.name}</p>
            <p><strong>Student ID:</strong> ${studentInfo.id}</p>
            <p><strong>Course:</strong> ${studentInfo.course}</p>
            <p><strong>Department:</strong> ${studentInfo.department}</p>
            <p><strong>Selected Teacher:</strong> ${studentInfo.teacher}</p>
            <p><strong>Selected Time Slot:</strong> ${studentInfo.timeSlot}</p>
        `;
    }
});