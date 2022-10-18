// var row = 1;
// var contact = document.getElementById("contact");
// contact.addEventListener("click", addData);

// function addData (){
//     var name=document.getElementById("name").value;
// 	var email=document.getElementById("email").value;
// 	var message=document.getElementById("message").value;

//     var tableData=document.getElementById("root"); 

//     var newRow = tableData.insertRow(row);

//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);

//     cell1.innerHtml = name;
//     cell2.innerHtml = email;
//     cell3.innerHtml = message;

//     row++;   


// }

function form() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('NAME', name);
    localStorage.setItem('EMAIL', email);
    localStorage.setItem('MESSAGE', message);
}