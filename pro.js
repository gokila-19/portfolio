document.addEventListener('DOMContentLoaded', () => {
    const joinTeamForm = document.getElementById('joinTeamForm')
    if (joinTeamForm) {
        joinTeamForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const role = document.getElementById('role').value;
            const message = document.getElementById('message').value;

            if(name==="" || email===""){
                alert("Please enter your name and email");
                return;
            }


            console.log("new application submitted:");
            console.log("Name:",name);
            console.log("email:",email);
            console.log("role:",role);
            console.log("message:",message);

            alert(`thank you,${name}! your application for ${role} has been submitted`);
              })
    }

})

