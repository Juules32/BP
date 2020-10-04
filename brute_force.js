function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

var charSet = "abc"
var ctx = document.getElementById("graph").getContext("2d");

var graph = new Chart(ctx, {
    type: 'line',
    lineTension: 0.9,
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label: 'Gennemsnitlig løsningstid',
            data: [0,0,0,0.003,0.33,3.369,34.343,350.129,3569.575,36391.908],
            backgroundColor: "lightgreen"
        }]
    },
    options: {
        responsive: false,
        
    },
    
});


minimum_length = 1
maximum_length = 10
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
    let password = document.getElementById("password").value
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
            document.getElementById("visual_answer").innerHTML = "Dit password indeholder uidentificerede karakterer!"
            return
        }
    }

    let t0 = Date.now()
    for (let i = minimum_length; i <= maximum_length; i++) {
        combinations = 0
        while (true) {
            guess = ""
            for (let j = 0; j < i; j++) {
                guess += charSet.charAt(Math.random() * charSet.length).toString()
            }
            if(guess == password) {
                let t1 = Date.now()
                document.getElementById("visual_answer").innerHTML = "Dit password er: " + guess + ", tog " + wrong_passwords.length + " forsøg og blev løst på " + (t1-t0) + " millisekunder"
                console.log("The password is: " + guess)
                ctx.beginPath();
                ctx.fillStyle = "green";
                ctx.arc((password.length-1)*82.25 + 49.3, 400 - (t1-t0)/100 - 30,5,0,Math.PI*2); 
                ctx.fill();
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