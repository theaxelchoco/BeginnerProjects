const UserData = new Map()

const Login = () => {
    const Username = document.getElementById("loginName")
    const Password = document.getElementById("loginPassword")

    if (!Username) {
        alert("Enter a username")
    } else if (!Password) {
        alert("Enter a password")
    }

    if (UserData.get(Username)) {
        alert("Already made an account!!")
    } else {
        UserData.set(Username,Password)
        alert("Successfully made an account!")
    }
}