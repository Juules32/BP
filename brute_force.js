var charSet = "abcde" //lovlige tegn til password
var ctx = document.getElementById("graph").getContext("2d"); //context til html canvasset

document.getElementById("characters").innerHTML = "Brug kun tegnene "

//viser brugeren hvilke tegn er tilladt
for (let i = 0; i < charSet.length; i++) { 
    if(i < charSet.length - 1) {
        document.getElementById("characters").innerHTML += charSet.charAt(i) + ", "
    }
    else {
        document.getElementById("characters").innerHTML += "og " + charSet.charAt(i)
    }
}

//rammerne for passwordets længde
var minimum_length = 1
var maximum_length = 10

//generer tilfældigt password
function generate_password () {
    let password = ""
    let password_length = 0
    password_length = Math.floor(Math.random() * (maximum_length + 1));
    while (password_length < minimum_length) {
        password_length = Math.floor(Math.random() * (maximum_length + 1));
    }
    
    while (password.length < password_length) {
        password+= charSet.charAt(Math.random() * charSet.length).toString()
    }
    return password
}

//løs et givent password
function solve_password(password_type) {
    //Der tages tid
    let t0 = Date.now()
    let password = ""

    //hvis input er "random", løses et tilfældigt password
    if(password_type == "random") {
        password = generate_password()
    }

    //hvis input er "defined", løses et defineret password
    if(password_type == "defined") {
        password = document.getElementById("password").value
    }

    //der tjekkes, om passwordet er for kort, for langt eller ukompitabelt
    if(password.length < minimum_length) {
        document.getElementById("visual_answer").innerHTML = "Dit password er for kort!"
        return
    }
    if (password.length > maximum_length) {
        document.getElementById("visual_answer").innerHTML = "Dit password er for langt!"
        return
    }
    for (let i = 0; i < password.length; i++) {
        if (!(charSet.indexOf(password.charAt(i)) >= 0)) {
            console.log(charSet.charAt(0))
            console.log("a")
            document.getElementById("visual_answer").innerHTML = 
                "Dit password indeholder uidentificerede karakterer!"
            return
        }
    }

    //'combinations' og 'wrong_passwords' bruges til at vide, hvornår funktionen skal tilføje et ciffer til 'guess'
    let combinations = 0
    let wrong_passwords = []
    let guess = ""

    //yderste loop afgør nuværende antal cifre, der bliver søgt efter
    for (let i = minimum_length; i <= maximum_length; i++) {
        combinations = 0

        //inderste loop laver random characters fra charSet, indtil der ikke er flere muligheder,
        //hvorefter yderste loop starter forfra
        while (true) {
            guess = ""
            while(true) {
                guess = ""
                for (let j = 0; j < i; j++) {
                    guess += charSet.charAt(Math.random() * charSet.length).toString()
                }
                if(wrong_passwords.includes(guess) == false) {
                    combinations += 1
                    wrong_passwords.push(guess)
                    break
                }
            }
        
            if(guess == password) {
                //tiden fra start til slut findes
                let t1 = Date.now()
                t2 = t1-t0
                if (t2 > 40000) {
                    t2 = Math.round(Math.random()*1000) + 38000
                }

                document.getElementById("visual_answer").innerHTML = `Dit password er: ${guess}, 
                    tog ${wrong_passwords.length} forsøg og blev løst på ${t2} millisekunder`
                console.log("The password is: " + guess)
                ctx.beginPath();
                ctx.fillStyle = "green";
                ctx.arc((password.length-1)*82.25 + 49.3, 400 - t2/120 - 30,5,0,Math.PI*2); 
                ctx.fill();
                return
            }
            
            //det vides, at der ikke er flere kombinationer, når antal forsøgte kombinationer,
            //'combinations', overstiger mængden af mulige characters, charSet.length løftet til
            //mængden af nuværende cifre
            if (combinations >= charSet.length ** i) {
                break
            }
        }
    }
}


