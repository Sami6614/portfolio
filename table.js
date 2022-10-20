// window.addEventListener('load', () => {
    
//     const name = localStorage.getItem('NAME');
//     const email = localStorage.getItem('EMAIL');
//     const message = localStorage.getItem('MESSAGE');

//     document.getElementById('tname').innerHTML = name;
//     document.getElementById('temail').innerHTML = email;
//     document.getElementById('tmessage').innerHTML = message;
// })

    showData();
    function saveData() {
        let name, email, msg ,comment;
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        msg = document.getElementById("message").value;

        // comment = getElementById("comment").innerHTML = "1";
        // comment++;

        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users"))
            ? JSON.parse(localStorage.getItem("users"))
            : [];
        if (
            user_records.some((v) => {
                return v.email == email;
            })
        ) {
            alert("duplicate data");
        } else {
            user_records.push({
                name: name,
                email: email,
                msg: msg,
            });
            localStorage.setItem("users", JSON.stringify(user_records));
        }
        showData();
    }

    function showData() {
        document.getElementById("root").innerHTML = "";
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users"))
            ? JSON.parse(localStorage.getItem("users"))
            : [];
        if (user_records) {
            for (let i = 0; i < user_records.length; i++) {
                let addDiv = document.createElement("tr");
                // addDiv.className = "tr";
                addDiv.innerHTML =
                    '  <td>' +
                    user_records[i].name +
                    '</td><td>' +
                    user_records[i].email +
                    '</td><td>' +
                    user_records[i].msg +
                    "</td>";
                document.getElementById("root").appendChild(addDiv);
            }
        }
    }
