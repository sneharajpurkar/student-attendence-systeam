function addStudent (){
    alert("work");
    var studentName = document.getElementById("addingStudent").value;
    console.log(studentName, "studentName")
    
    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push(studentName)

    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));
}
function markingAttendance(){
    //taking data from storage
    var StudentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(StudentsList, "studentsList");

    //taking tags from html
    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    //looping over userlist to create perfect structure
    var students = [];
    for(var i=0; i < StudentsList.length; i++){
        students += `<div><p>${StudentsList[i]}</p></div>`;
    }
    console.log(students, "Students")

    //adding localstorage data into html with perfect structure
    divFromHTML.innerHTML = students;
}
markingAttendance();

function displayStudentsList(){
    //taking data from storage
    var StudentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(StudentsList, "studentsList");

    //taking tags from html
    var divFromHTML = document.getElementById("displayingStudentsList");
    console.log(divFromHTML, "divFromHTML");

    //looping over userlist to create perfect structure
    var students = [];
    for(var i=0; i < StudentsList.length; i++){
        students += `<div><p>${StudentsList[i]}</p></div>`;
    }
    console.log(students, "Students")

    //adding localstorage data into html with perfect structure
    divFromHTML.innerHTML = students;
}
displayStudentsList();
