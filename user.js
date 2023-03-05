var objUser = [
    {
    username: "Nichapa",
    pwd : "1234"
    },
    {
        username: "Mind",
        pwd : "Nichapa"
    },
    {
        username: "admin",
        pwd : "admin"
        }

] ;

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i < objUser.length; i++){
        if(username == objUser[i].username && password == objUser[i].pwd){
            console.log(username + "is logged in!");
        }
    }
}

