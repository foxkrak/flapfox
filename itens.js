import { ctx } from "./game.js";

const sprite = new Image()
sprite.src = './img/sprites.png'
let wid = window.innerWidth
let hei = window.innerWidth/2*3
let scale2 = hei/750
export let scale = 1.3*scale2

export const player = {
    velocityY: 1,
    frame: 0,
    rotation: 0,
    radius: 12,
    animation: [
        {sx: 0,sy: 0},
        {sx: 0,sy: 26},
        {sx: 0,sy: 52},
        {sx: 0,sy: 26}
    ],
    sx:0,
    sy:0,
    tamanhoX: 33,
    tamanhoY: 24,
    positionX: 70*scale,
    positionY: 125*scale,
    scale: scale,
    desenha(){
      ctx.save()
      ctx.translate(this.positionX, this.positionY)
        ctx.rotate(this.rotation)
      ctx.drawImage(
      sprite,
      this.animation[this.frame].sx,
      this.animation[this.frame].sy,
      this.tamanhoX,
      this.tamanhoY,
      -this.tamanhoX*this.scale/2,
      -this.tamanhoY*this.scale/2,
      this.tamanhoX*this.scale,
      this.tamanhoY*this.scale
      )
      ctx.restore()
    },
  }
export const background = {
    sx: 391,
    sy: 0,
    tamanhoX: 275,
    tamanhoY: 204,
    positionX: 0*scale,
    positionY: (window.innerWidth/2)*3 - (204*scale),
    scale: scale,
    desenha(){
      ctx.fillStyle = '#89CED4'
      ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
      ctx.drawImage(
      sprite,
      this.sx,
      this.sy,
      this.tamanhoX,
      this.tamanhoY,
      this.positionX,
      this.positionY,
      this.tamanhoX*this.scale,
      this.tamanhoY*this.scale
      )
      ctx.drawImage(
        sprite,
        this.sx,
        this.sy,
        this.tamanhoX,
        this.tamanhoY,
        this.positionX + this.tamanhoX*this.scale,
        this.positionY,
        this.tamanhoX*this.scale,
        this.tamanhoY*this.scale
        )
        ctx.drawImage(
        sprite,
        this.sx,
        this.sy,
        this.tamanhoX,
        this.tamanhoY,
        this.positionX + (this.tamanhoX*2)*this.scale,
        this.positionY,
        this.tamanhoX*this.scale,
        this.tamanhoY*this.scale
        )
    }
}
export const cano = {
    top: {
      sx: 52,
      sy: 169  
    },
    bottom: {
      sx: 0,
      sy: 169  
    },
    tamanhoX: 52,
    tamanhoY: 400,
    positions: [],
    gap: ((window.innerWidth/2)*3)/2+120 ,
    maxYPos: -150*scale,
    dx: 2*scale,
    scale: scale,
    desenha(){
        for(let i = 0; i < this.positions.length; i++){
            let p = this.positions[i];
            let topYpos = p.y;
            let bottomYpos = p.y + this.tamanhoY + this.gap
                        
            //top pipe
            ctx.drawImage(
              sprite,
              this.top.sx,
              this.top.sy,
              this.tamanhoX,
              this.tamanhoY,
              p.x,
              topYpos,
              this.tamanhoX*this.scale,
              this.tamanhoY*this.scale
            )
            //bottom pipe
            ctx.drawImage(
              sprite,
              this.bottom.sx,
              this.bottom.sy,
              this.tamanhoX,
              this.tamanhoY,
              p.x,
              bottomYpos,
              this.tamanhoX*this.scale,
              this.tamanhoY*this.scale
            )
        }
    }
    
}
export const chao = {
    sx: 0,
    sy: 610,
    tamanhoX: 223,
    tamanhoY: 112,
    positionX: 0*scale,
    positionY: (window.innerWidth/2)*3 - 110*scale,
    scale: scale,
    desenha(){
      ctx.drawImage(
      sprite,
      this.sx,
      this.sy,
      this.tamanhoX,
      this.tamanhoY,
      this.positionX,
      this.positionY,
      this.tamanhoX*this.scale,
      this.tamanhoY*this.scale
      )
      ctx.drawImage(
        sprite,
        this.sx,
        this.sy,
        this.tamanhoX,
        this.tamanhoY,
        this.positionX + this.tamanhoX*this.scale,
        this.positionY,
        this.tamanhoX*this.scale,
        this.tamanhoY*this.scale
        )
    }
}
export const intro = {
    sx: 134,
    sy: 0,
    tamanhoX: 174,
    tamanhoY: 152,
    positionX: window.innerWidth/2,
    positionY: 100*scale,
    scale: scale,
    desenha(){
      ctx.drawImage(
      sprite,
      this.sx,
      this.sy,
      this.tamanhoX,
      this.tamanhoY,
      this.positionX-(this.tamanhoX/2)*this.scale,
      this.positionY,
      this.tamanhoX*this.scale,
      this.tamanhoY*this.scale
      )
    }
}
export const Over = {
    sx: 132,
    sy: 153,
    tamanhoX: 230,
    tamanhoY: 201,
    positionX: window.innerWidth/2,
    positionY: 100*scale,
    scale: scale,
    desenha(){
      ctx.drawImage(
      sprite,
      this.sx,
      this.sy,
      this.tamanhoX,
      this.tamanhoY,
      this.positionX-(this.tamanhoX/2)*this.scale,
      this.positionY,
      this.tamanhoX*this.scale,
      this.tamanhoY*this.scale
      )
    }
}
export const Score = {    
    best: 0,
    desenhaOn(){
        ctx.fillStyle = "#FFF"
        ctx.strokeStyle = "#000"
        ctx.lineWidth = 2
        ctx.font = "70px Teko"
        ctx.fillText(parseInt(localStorage.getItem('Score')),window.innerWidth/2,50*scale)
        ctx.strokeText(parseInt(localStorage.getItem('Score')),window.innerWidth/2,50*scale)
    },
    desenhaOff(){
        ctx.fillStyle = "#FFF"
        ctx.strokeStyle = "#000"
        ctx.lineWidth = 2
        ctx.font = "70px Teko"
        ctx.fillText(parseInt(localStorage.getItem('Score')),(window.innerWidth/2)+65*scale,Over.positionY+95*scale)
        ctx.strokeText(parseInt(localStorage.getItem('Score')),(window.innerWidth/2)+65*scale,Over.positionY+95*scale)
        ctx.fillText(parseInt(localStorage.getItem('Best'))||0,(window.innerWidth/2)+65*scale,Over.positionY+140*scale)
        ctx.strokeText(parseInt(localStorage.getItem('Best'))||0,(window.innerWidth/2)+65*scale,Over.positionY+140*scale)
    }
}
export const audios = {
    Score_Sound: new Audio("./mp3/super-mario-coin-sound.mp3"),
    Pular_Sound: new Audio("./mp3/super-mario-coin-sound.mp3"),
    Perder_Sound: new Audio("./mp3/gameover.mp3"),
    NewRecord_Sound: new Audio("./mp3/mario-1-up.mp3"),
    Medals_Sound: new Audio("./mp3/sonic-extra-life.mp3")
}
export const Medals = {
    
}