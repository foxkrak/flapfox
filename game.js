import { player, background, intro, cano, chao, Over, Score, audios } from "./itens.js";
const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

canvas.width = 500
canvas.height = 750

//const somup = new sound('super-mario-coin-sound.mp3')

let frame = 0
let currentfram = 0
let tempo = 8
const gravidade = 0.4
let velocidade = 1
let gameOn = 0
const degree = Math.PI/180
export let gameOver = 0
let controle = 0
let medals = 0
let count = 0
localStorage.setItem('Score',count)
let best = localStorage.getItem('Best') || 0

function loop(){
    currentfram++
    background.desenha()
    cano.desenha()
    chao.desenha()
    player.desenha()
    if(gameOver === 0){
        chao.positionX--
        background.positionX -= 0.08
        if(currentfram % tempo === 0){
        player.frame++
            if(player.frame > 3){
                player.frame = 0
            }
        } 
    }
    if(gameOn === 1){
        if(gameOver === 0){
           Score.desenhaOn()
        }
        if(currentfram % 100 === 0 && gameOver === 0){
            cano.positions.push({
                x: canvas.width,
                y: cano.maxYPos * (Math.random() + 1)
            })
        }
        for(let i = 0; i < cano.positions.length; i++){
            let p = cano.positions[i];
            if(gameOver === 0){
                p.x -= cano.dx
                let bottomYpos = p.y + cano.tamanhoY + cano.gap
                if(p.x < -300){
                    cano.positions.shift()
                }
                if(p.x+cano.tamanhoX*cano.scale < 0 && p.x+cano.tamanhoX*cano.scale > -1){
                    count += 1
                    localStorage.setItem('Score',count)
                    audios.Score_Sound.play()
                    if(parseInt(localStorage.getItem('Score')) > parseInt(localStorage.getItem('Best')) && controle === 0){
                        audios.NewRecord_Sound.play()
                        controle = 1
                    }
                    if(parseInt(localStorage.getItem('Score')) === 20 || parseInt(localStorage.getItem('Score')) === 50 || parseInt(localStorage.getItem('Score')) === 100 || parseInt(localStorage.getItem('Score')) === 200){
                        audios.Medals_Sound.play()
                    }
                    best = Math.max(localStorage.getItem('Score'),localStorage.getItem('Best'))
                    localStorage.setItem('Best',best)
                }
                if(player.positionX + (player.radius*player.scale) > p.x && player.positionX - (player.radius*player.scale) < p.x + (cano.tamanhoX*cano.scale) && player.positionY + (player.radius*player.scale) > p.y && player.positionY - (player.radius*player.scale) < p.y + (cano.tamanhoY*cano.scale-1)){
                    gameOver = 1
                    
                }
                if(player.positionX + (player.radius*player.scale) > p.x && player.positionX - (player.radius*player.scale) < p.x + (cano.tamanhoX*cano.scale) && player.positionY + (player.radius*player.scale) > bottomYpos && player.positionY - (player.radius*player.scale) < bottomYpos + (cano.tamanhoY*cano.scale-1)){
                    gameOver = 1
                }
                }else{
                    cano.dx = 0
                }
            
        }  
        if(player.velocityY >= 0){
                player.rotation = 25 * degree
            }else{
                player.rotation = -25 * degree
            }
        if(player.positionY + player.tamanhoY < canvas.height){
        player.velocityY += gravidade
        }
        if(player.positionY <= 0){
            player.velocityY = 1
        }
        if(player.positionY + player.tamanhoY <= canvas.height - chao.tamanhoY && gameOver === 0){
            player.positionY += player.velocityY
        }else{
            gameOver = 1
            Over.desenha()
            Score.desenhaOff()
            audios.Perder_Sound.play()
        }
    }else{
        intro.desenha()
    }
    if(chao.positionX<-54){
        chao.positionX = 0
    }
    if(background.positionX<-357.5){
        background.positionX = 0
    }
    requestAnimationFrame(loop)
}
loop();

const startBTN = {
    x:200,
    y:325,
    w:84*Over.scale,
    h:27*Over.scale
}

document.addEventListener('click',(e)=>{
    if(e.target === canvas){
        if(gameOn === 1 && gameOver === 0){
            jump()
        }
        if(gameOn === 0 && gameOver === 0){
            gameOn = 1
        }
        let screen = canvas.getBoundingClientRect();
        let clickX = e.clientX - screen.left
        let clickY = e.clientY - screen.top
        
        if(clickX >= startBTN.x && clickX <= startBTN.x + startBTN.w && clickY >= startBTN.y && clickY <= startBTN.y + startBTN.h && gameOver === 1){
            reset()
        }
    }
})

document.addEventListener('keydown',(e)=>{
    if(e.keyCode === 32){
        if(gameOn === 1 && gameOver === 0){
            jump()
        }
    }
})
document.addEventListener('keyup',(e)=>{
    if(e.keyCode === 32){
        if(gameOn === 1 && gameOver === 0){
            setTimeout(()=>{
                tempo = 8
            },200)
        }
    }
})
function jump(){
    player.velocityY = -7
    tempo = 2
}
function reset(){
    player.positionY = 125
    player.rotation = 0 * degree
    player.velocityY = 0
    gameOver = 0
    gameOn = 0
    controle = 0
    cano.dx = 2
    cano.positions = []
    tempo = 8
    audios.Perder_Sound.pause()
    audios.Perder_Sound.currentTime = 0
    count = 0
    localStorage.setItem('Score',count)
}
//function buttomRestart(){

//        
//}