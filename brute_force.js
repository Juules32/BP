var charSet = "abcde"

minimum_length = 2
maximum_length = 7
var password = ""
var password_length = 0
function generate_password () {
    pass = ""
    password_length = Math.floor(Math.random() * (maximum_length + 1));
    while (password_length < minimum_length) {
        password_length = Math.floor(Math.random() * (maximum_length + 1));
    }
    
    while (pass.length < password_length) {
        pass+= charSet.charAt(Math.random() * charSet.length).toString()
    }
    return pass
}

password = generate_password()


function solve_password() {
    let combinations = 0
    let guess = ""
    let wrong_passwords = []
    let t0 = Date.now()
    let password = document.getElementById("password").value

    for (let i = minimum_length; i <= maximum_length; i++) {
        combinations = 0
        while (true) {
            guess = ""
            for (let j = 0; j < i; j++) {
                guess += charSet.charAt(Math.random() * charSet.length).toString()
            }
            if(guess == password) {
                let t1 = Date.now()
                document.getElementById("visual_answer").innerHTML = "The password is: " + guess + ", took " + wrong_passwords.length + " tries and was solved in " + (t1-t0) + " milliseconds"
                console.log("The password is: " + guess)
                return
            }
            if(wrong_passwords.includes(guess) == false) {
                combinations += 1
                wrong_passwords.push(guess)
            }
            if (combinations >= charSet.length ** i) {
                break
            }
        }
    }
}

function loop () {
    
}
function login1 () {
}
function login2 () {
    let t0 = Date.now()
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
