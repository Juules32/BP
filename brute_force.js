var charSet = "abc"

minimum_length = 2
maximum_length = 6
var password = ""
var password_length = 0
function generate_password () {
   
    password_length = 2
    while (password_length < minimum_length) {
        password_length = Math.floor(Math.random() * (maximum_length + 1));
    }
    console.log(password_length)
    console.log(password.length)
    while (password.length < password_length) {
        password+= charSet.charAt(Math.random() * charSet.length).toString()
    }
}

//generate_password()
password = "bbbbac"
wrong_passwords = []
guess = ""
combinations = 0

function solve_password() {
    for (let i = minimum_length; i <= maximum_length; i++) {
        combinations = 0
        guess = "lmao"
        while (!wrong_passwords.includes(guess)) {
            guess = ""
            combinations += 1
            for (let j = 0; j < i; j++) {
                guess += charSet.charAt(Math.random() * charSet.length).toString()
            }
            console.log(guess)
            if(guess == password) {
                console.log("The password is: " + guess)
                return
            }
            else {
                wrong_passwords.concat(guess)
            }
            if (combinations >= charSet.length ** i) {
                break
            }
        }
    }
}

solve_password()

function loop () {
    
}
function login1 () {
}
function login2 () {
    let t0 = Date.now()
    //let password = document.getElementById("password").value
    let password = "c"
    for (let j = 1; j <= 8; j++) {
        for (let i = 0; i <= charSet.length ** j; i++) {
            for (let k = 0; k < charSet.length; k++) {
                answer = answer.concat(answer, charSet[i])

            }
            
            
            if (answer != password) {
                console.log(answer)
                answer = answer.substring(0, answer.length - 1);
                continue
            }
            else {
                let t1 = Date.now()
                console.log("Cracked in " + (t1-t0) + " milliseconds")
                answer = ""
                return
            }
        }
        
        j += 1
    }
   
}
