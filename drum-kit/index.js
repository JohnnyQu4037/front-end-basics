//finding the DOM element from the webpage
let w = document.getElementsByClassName("w drum")[0]
let a = document.getElementsByClassName("a drum")[0]
let s = document.getElementsByClassName("s drum")[0]
let d = document.getElementsByClassName("d drum")[0]
let j = document.getElementsByClassName("j drum")[0]
let k = document.getElementsByClassName("k drum")[0]
let l = document.getElementsByClassName("l drum")[0]

//create the audio element for each key
let w_tom1 = new Audio("sounds/tom1.mp3")
let a_tom2 = new Audio("sounds/tom2.mp3")
let s_tom3 = new Audio("sounds/tom3.mp3")
let d_tom4 = new Audio("sounds/tom4.mp3")
let j_snare = new Audio("sounds/snare.mp3")
let k_crash = new Audio("sounds/crash.mp3")
let l_bass = new Audio("sounds/bass.mp3")

//add click eventlistener and call function play() for that key 
w.addEventListener("click",()=>{play("w")})
a.addEventListener("click",()=>{play("a")})
s.addEventListener("click",()=>{play("s")})
d.addEventListener("click",()=>{play("d")})
j.addEventListener("click",()=>{play("j")})
k.addEventListener("click",()=>{play("k")})
l.addEventListener("click",()=>{play("l")})

//if the key that has been pressed is in the range of "wasdjkl", play the audio by calling the play function
document.addEventListener("keydown",(event)=>{
    if("wasdjkl".includes(event.key.toLowerCase())){
        play(event.key.toLowerCase())
    }
})

//different senerio when different keys been pressed or clicked.
function play(pressed_or_clicked){
    switch (pressed_or_clicked){
        case "w":
            w_tom1.currentTime = 0;
            w_tom1.play()
            w.classList.toggle("pressed")
            setTimeout(()=>{w.classList.toggle("pressed")}, 500);
            break
        case "a":
            a_tom2.currentTime = 0;
            a_tom2.play()
            a.classList.toggle("pressed")
            setTimeout(()=>{a.classList.toggle("pressed")}, 500);
            break
        case "s":
            s_tom3.currentTime = 0;
            s_tom3.play()
            s.classList.toggle("pressed")
            setTimeout(()=>{s.classList.toggle("pressed")}, 500);
            break
        case "d":
            d_tom4.currentTime = 0;
            d_tom4.play()
            d.classList.toggle("pressed")
            setTimeout(()=>{d.classList.toggle("pressed")}, 500);
            break
        case "j":
            j_snare.currentTime = 0;
            j_snare.play()
            j.classList.toggle("pressed")
            setTimeout(()=>{j.classList.toggle("pressed")}, 500);
            break
        case "k":
            k_crash.currentTime = 0;
            k_crash.play()
            k.classList.toggle("pressed")
            setTimeout(()=>{k.classList.toggle("pressed")}, 500);
            break
        case "l":
            l_bass.currentTime = 0;
            l_bass.play()
            l.classList.toggle("pressed")
            setTimeout(()=>{l.classList.toggle("pressed")}, 500);
            break
        default:
            break
    }
}