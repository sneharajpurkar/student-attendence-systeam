function addStudent() {
    // alert("work");
    var studentName = document.getElementById("addingStudent").value;
    console.log(studentName, "studentName")

    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push({ nameOfStudent: studentName, attendence: [] })

    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));

    document.getElementById("addingStudent").value = "";
    markingAttendance();
    displayStudentsList();
    displayingStudentsAttendance();
    // displayingStudentsNameList()
}
function getRealTime() {
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    var addDate = document.getElementById("dateHere");
    addDate.innerText = date;
}
getRealTime();
function markingAttendance() {
    //taking data from storage
    var StudentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(StudentsList, "studentsList");

    //taking tags from html
    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML, "divFromHTML");

    //looping over userlist to create perfect structure
    var students = [];
    for (var i = 0; i < StudentsList.length; i++) {
        students += `<div id="student"><p>${StudentsList[i].nameOfStudent}</p><p><i onclick="present(${i})" class="fa-solid fa-check"></i></p><p><i onclick="absent(${i})" class="fa-solid fa-xmark"></i></p></div>`;
    }
    console.log(students, "Students")

    //adding localstorage data into html with perfect structure
    divFromHTML.innerHTML = students;

}
markingAttendance();

function present(index) {
    console.log("index", index)
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    console.log(date, "date here")

    var studentListFromLS = JSON.parse(localStorage.getItem("StudentsList"))
    var user = studentListFromLS[index];

    var falg = false;
    for (var i = 0; i < user.attendence.length; i++) {
        if (!!user.attendence[i][date]) {
            falg = true;
        }
    }
    if (falg === false) {
        var obj = {};
        obj[date] = "Present"
        user.attendence.push(obj)
        localStorage.setItem("StudentsList", JSON.stringify(studentListFromLS))
    } else {
        alert('Already marked!')
    }

}

function absent(index) {
    console.log("index", index)
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    console.log(date, "date here")

    var studentListFromLS = JSON.parse(localStorage.getItem("StudentsList"))
    var user = studentListFromLS[index];

    var falg = false;
    for (var i = 0; i < user.attendence.length; i++) {
        if (!!user.attendence[i][date]) {
            falg = true;
        }
    }
    if (falg === false) {
        var obj = {};
        obj[date] = "Absent"
        user.attendence.push(obj)
        localStorage.setItem("StudentsList", JSON.stringify(studentListFromLS))
    } else {
        alert('Already marked!')
    }
}

function displayStudentsList() {
    //taking data from storage
    var StudentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(StudentsList, "studentsList");

    //taking tags from html
    var divFromHTML = document.getElementById("displayingStudentsList");
    console.log(divFromHTML, "divFromHTML");

    //looping over userlist to create perfect structure
    var students = [];
    for (var i = 0; i < StudentsList.length; i++) {
        students += `<div id="student"><p>${StudentsList[i].nameOfStudent}</p></div>`;
    }
    console.log(students, "Students")

    //adding localstorage data into html with perfect structure
    divFromHTML.innerHTML = students;
}
displayStudentsList();
// function displayingStudentsNameList(){
//     var idFromHTML = document.getElementById("StudentsName");
//     var dataFromLS = JSON.parse(localStorage.getItem("StudenstList"));
//     var nameArray = [];
//     for(var i = 0; i < dataFromLS; i++){
//         nameArray += `<div>${dataFromLS[i].nameOfStudent}</div>`
//     }
//     console.log(students,'students')
//     idFromHTML.innerHTML = nameArray;
// }
// displayingStudentsNameList();


// function displayingStudentsAttendance(){
//     var idFromHTML = document.getElementById("studentsAttendance");
//     var dataFromLS = JSON.parse(localStorage.getItem("StudentsList"));

//     var dates = [];
//     for(var k=0; k<dataFromLS.length; k++){
//         for(var l=0; l<dataFromLS[k].attendence.length; l++)
//         if(!dates.includes((Object.keys(dataFromLS[k].attendence[l])[0]))){
//             dates.push((Object.keys(dataFromLS[k].attendence[l])[0]))
//         }
//     }
//     console.log(dates, 'date here');
// }
// displayingStudentsAttendance();

function displayingStudentsAttendance(){
    var for25 = document.getElementById("first");
    // console.log(idFromHTML, 'idFromHTML')
    var dataFromLs = JSON.parse(localStorage.getItem("StudentsList"));
    var dates = [];
    for (var k = 0; k < dataFromLs.length; k++) {
        for (var l = 0; l < dataFromLs[k].attendance.length; l++) {
            // console.log(dataFromLs[k].attendance[l])
            // console.log((Object.keys(dataFromLs[k].attendance[l])[0]))
            if (!dates.includes((Object.keys(dataFromLs[k].attendance[l])[0]))) {
                dates.push((Object.keys(dataFromLs[k].attendance[l])[0]))
            }

        }
    }
    var finalArrayWithAtt = [[],[],[],[],[]];
    var settingDates = ['2023-02-25',"2023-02-26","2023-02-28"]
    for (var i = 0; i < dataFromLs.length; i++) {
        // console.log(dataFromLs[i].attendance,"heree");
        if (dataFromLs[i].attendance.length) {
            for (var j = 0; j < dataFromLs[i].attendance.length; j++) {
                for (var k = 0; k < settingDates.length; k++) {
                    if (dataFromLs[i].attendance[j][settingDates[k]]) {
                        console.log((dataFromLs[i].attendance[j][settingDates[k]]), seettingDates[k],i,j,k, "checking here")
                        finalArrayWithAtt[k][settingDates[k]] += `<div>${dataFromLs[i].attendance[j][settingDates[k]]}</div>`;
                    }
                }
            }
        // } else {
        //     finalArrayWithAtt += `<div>No data</div>`;
        // }
    }
    console.log(check, 'check')
    for25.innerHTML = finalArrayWithAtt;
}
}
displayingStudentsAttendance();