var charSet = ["a", "b", "c"]
answer = ""
temp = ""
console.log(answer)

function login () {
    
    let password = document.getElementById("password").value
    for (let j = 1; j <= 8; j++) {
        for (let i = 0; i <= charSet.length ** j; i++) {
            answer = charSet[i]
            if (i == charSet.length ** j) {
                temp.concat(temp, )
            }
            if (answer != password) {
                continue
            }
            else {
                console.log("Cracked!")
                console.log(temp)
                return
            }
        }
        
        j += 1
    }
   
}