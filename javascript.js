const canvas = document.querySelector('.cvs');
const ctx = canvas.getContext('2d');
let npcValor = 0;
let test = true;
let mov = 0;
let obj = [
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}},
    {a:{a:0,on:true}}
]

function init(){
    ctx.fillStyle = "#000";
    ctx.fillRect(190,0,10,600)
    ctx.fillRect(390,0,10,600)
    ctx.fillRect(0,190,600,10)
    ctx.fillRect(0,390,600,10)
}
init();

canvas.addEventListener("click",(e)=>{
    e.preventDefault();
    mouseX = parseInt(e.clientX - canvas.offsetLeft+canvas.offsetWidth/2);
    mouseY = parseInt(e.clientY - canvas.offsetTop+canvas.offsetHeight/2); 
    //console.log(mouseX-canvas.offsetWidth/2,mouseY-canvas.offsetHeight/2)
    console.log(mouseX,mouseY)
    clickPaint(mouseX,mouseY)
})

const circuloRf = Math.PI*2;
const tamCirculo = 80;

function clickPaint(mouseX,mouseY){
    if(mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200 && obj[0].a.on){
        //ctx.fillRect(0,0,190,190)
        ctx.beginPath();
        ctx.lineWidth = 10
        ctx.arc(95,95,tamCirculo,0,circuloRf,false)
        ctx.stroke()
        obj[0].a.a = 1
        obj[0].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 200 && mouseX <= 400 && mouseY >= 0 && mouseY <= 200 && obj[1].a.on){
        //ctx.fillRect(200,0,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(295,95,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[1].a.a = 1
        obj[1].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 400 && mouseX <= 590 && mouseY >= 0 && mouseY <= 200 && obj[2].a.on){
        //ctx.fillRect(400,0,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(495,95,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[2].a.a = 1
        obj[2].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 400 && obj[3].a.on){
        //ctx.fillRect(0,200,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(95,295,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[3].a.a = 1
        obj[3].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 0 && mouseX <= 200 && mouseY >= 400 && mouseY <= 590 && obj[6].a.on){
        //ctx.fillRect(0,400,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(95,495,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[6].a.a = 1
        obj[6].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400 && obj[4].a.on){
        //ctx.fillRect(200,200,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(295,295,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[4].a.a = 1
        obj[4].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 200 && mouseX <= 400 && mouseY >= 400 && mouseY <= 590 && obj[7].a.on){
        //ctx.fillRect(200,400,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(295,495,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[7].a.a = 1
        obj[7].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 400 && mouseX <= 590 && mouseY >= 200 && mouseY <= 400 && obj[5].a.on){
        //ctx.fillRect(400,200,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(495,295,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[5].a.a = 1
        obj[5].a.on = false
        mov++
        fim()
        npc()
    }else if(mouseX >= 400 && mouseX <= 590 && mouseY >= 400 && mouseY <= 590 && obj[8].a.on){
        //ctx.fillRect(400,400,190,190)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.arc(495,495,tamCirculo,0,circuloRf,true)
        ctx.stroke()
        obj[8].a.a = 1
        obj[8].a.on = false
        mov++
        fim()
        npc()
    }
}

function npc(){
    if(obj[4].a.a == 1 && mov == 1){
        let ran;
        while(true){
            ran = Math.floor(Math.random() * (9 - 1 + 1)) + 1
            if(ran%2 == 1 && ran != 5){
                console.log(ran)
                break;
            }
        }
        obj[ran-1].a.on = false;
        desenharX(ran)
    }else if((obj[0].a.a == 2 && obj[1].a.a == 2 || obj[8].a.a == 2 && obj[5].a.a == 2 || obj[6].a.a == 2 && obj[4].a.a == 2) && obj[2].a.on){
        console.log('3')
        desenharX(3)
    }else if((obj[2].a.a == 2 && obj[4].a.a == 2 || obj[0].a.a == 2 && obj[3].a.a == 2 || obj[8].a.a == 2 && obj[7].a.a == 2) && obj[6].a.on){
        console.log('7')
        desenharX(7)
    }else if((obj[8].a.a == 2 && obj[4].a.a == 2 || obj[6].a.a == 2 && obj[3].a.a == 2 || obj[2].a.a == 2 && obj[1].a.a == 2) && obj[0].a.on){
        console.log('1')
        desenharX(1)
    }else if((obj[0].a.a == 2 && obj[4].a.a == 2 || obj[2].a.a == 2 && obj[5].a.a == 2 || obj[6].a.a == 2 && obj[7].a.a == 2) && obj[8].a.on){
        console.log('9')
        desenharX(9)
    }else if((obj[5].a.a == 2 && obj[4].a.a == 2 || obj[0].a.a == 2 && obj[6].a.a == 2) && obj[3].a.on){
        console.log('4')
        desenharX(4)
    }else if((obj[3].a.a == 2 && obj[4].a.a == 2 || obj[2].a.a == 2 && obj[8].a.a == 2) && obj[5].a.on){
        console.log('6')
        desenharX(6)
    }else if((obj[7].a.a == 2 && obj[4].a.a == 2 || obj[0].a.a == 2 && obj[2].a.a == 2) && obj[1].a.on){
        console.log('2')
        desenharX(2)
    }else if((obj[1].a.a == 2 && obj[4].a.a == 2 || obj[6].a.a == 2 && obj[8].a.a == 2) && obj[7].a.on){
        console.log('8')
        desenharX(8)
    }else if((obj[0].a.a == 1 || obj[2].a.a == 1 || obj[6].a.a == 1 || obj[8].a.a == 1 || obj[1].a.a == 1 || obj[3].a.a == 1 || obj[5].a.a == 1 || obj[7].a.a == 1) && obj[4].a.on){
        console.log('5')
        desenharX(5)
    }else if((obj[0].a.a == 1 && obj[1].a.a == 1 || obj[8].a.a == 1 && obj[5].a.a == 1 || obj[6].a.a == 1 && obj[4].a.a == 1) && obj[2].a.on){
        console.log('3')
        desenharX(3)
    }else if((obj[2].a.a == 1 && obj[4].a.a == 1 || obj[0].a.a == 1 && obj[3].a.a == 1 || obj[8].a.a == 1 && obj[7].a.a == 1) && obj[6].a.on){
        console.log('7')
        desenharX(7)
    }else if((obj[8].a.a == 1 && obj[4].a.a == 1 || obj[6].a.a == 1 && obj[3].a.a == 1 || obj[2].a.a == 1 && obj[1].a.a == 1) && obj[0].a.on){
        console.log('1')
        desenharX(1)
    }else if((obj[0].a.a == 1 && obj[4].a.a == 1 || obj[2].a.a == 1 && obj[5].a.a == 1 || obj[6].a.a == 1 && obj[7].a.a == 1) && obj[8].a.on){
        console.log('9')
        desenharX(9)
    }else if((obj[5].a.a == 1 && obj[4].a.a == 1 || obj[0].a.a == 1 && obj[6].a.a == 1) && obj[3].a.on){
        console.log('4')
        desenharX(4)
    }else if((obj[3].a.a == 1 && obj[4].a.a == 1 || obj[2].a.a == 1 && obj[8].a.a == 1) && obj[5].a.on){
        console.log('6')
        desenharX(6)
    }else if((obj[7].a.a == 1 && obj[4].a.a == 1 || obj[0].a.a == 1 && obj[2].a.a == 1) && obj[1].a.on){
        console.log('2')
        desenharX(2)
    }else if((obj[1].a.a == 1 && obj[4].a.a == 1 || obj[6].a.a == 1 && obj[8].a.a == 1) && obj[7].a.on){
        console.log('8')
        desenharX(8)
    }else if(obj[0].a.a == 1 && obj[4].a.a == 1 && mov == 3 || obj[2].a.a == 1 && obj[4].a.a == 1 && mov == 3 || obj[6].a.a == 1 && obj[4].a.a == 1 && mov == 3 || obj[8].a.a == 1 && obj[4].a.a == 1 && mov == 3){
        if(obj[0].a.a == 1){
            desenharX(3)
        }else if(obj[2].a.a == 1){
            desenharX(9)
        }else if(obj[8].a.a == 1){
            desenharX(7)
        }else if(obj[6].a.a == 1){
            desenharX(1)
        }
    }else{
        let i = 0;
        let arr = []
        for(let item of obj){
            i++
            if(item.a.on){
                arr.push(i)
            }
        }
        let ran = Math.floor(Math.random()*arr.length)
        console.log(ran)
        desenharX(arr[ran])
    }
    
}
function falsoGame(){
    for(let item of obj){
        item.a.on = false;
    }
    setTimeout(()=>{window.location.reload()},400)
}
function fim(){
    if(obj[0].a.a == 1 && obj[1].a.a == 1 && obj[2].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[0].a.a == 1 && obj[3].a.a == 1 && obj[6].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[0].a.a == 1 && obj[4].a.a == 1 && obj[8].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[0].a.a == 2 && obj[1].a.a == 2 && obj[2].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[0].a.a == 2 && obj[3].a.a == 2 && obj[6].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[0].a.a == 2 && obj[4].a.a == 2 && obj[8].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[2].a.a == 1 && obj[4].a.a == 1 && obj[6].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[2].a.a == 1 && obj[5].a.a == 1 && obj[8].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[2].a.a == 2 && obj[4].a.a == 2 && obj[6].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[2].a.a == 2 && obj[5].a.a == 2 && obj[8].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[3].a.a == 1 && obj[4].a.a == 1 && obj[5].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[1].a.a == 1 && obj[4].a.a == 1 && obj[7].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[3].a.a == 2 && obj[4].a.a == 2 && obj[5].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[1].a.a == 2 && obj[4].a.a == 2 && obj[7].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(obj[6].a.a == 1 && obj[7].a.a == 1 && obj[8].a.a == 1){
        console.log('WIN')
        setTimeout(()=>{alert('WIN')},300)
        falsoGame()
    }else if(obj[6].a.a == 2 && obj[7].a.a == 2 && obj[8].a.a == 2){
        console.log('LOSE')
        setTimeout(()=>{alert('LOSE')},300)
        falsoGame()
    }else if(mov == 9){
        console.log('VELHA')
        setTimeout(()=>{alert('VELHA')},300)
        falsoGame()
    }
}
function desenharX(valor){
    switch (valor) {
        case 1:
            lineD(20,20,170,170,170,20,20,170)
            obj[0].a.a = 2
            obj[0].a.on = false
            mov++
            fim()
            break;
        case 2:
            lineD(220,20,370,170,370,20,220,170)
            obj[1].a.a = 2
            obj[1].a.on = false
            mov++
            fim()
            break;
        case 3:
            lineD(420,20,570,170,570,20,420,170)
            obj[2].a.a = 2
            obj[2].a.on = false
            mov++
            fim()
            break;
        case 4:
            lineD(20,220,170,370,170,220,20,370)
            obj[3].a.a = 2
            obj[3].a.on = false
            mov++
            fim()
            break;
        case 5:
            lineD(220,220,370,370,370,220,220,370)
            obj[4].a.a = 2
            obj[4].a.on = false
            mov++
            fim()
            break;
        case 6:
            lineD(420,220,570,370,570,220,420,370)
            obj[5].a.a = 2
            obj[5].a.on = false
            mov++
            fim()
            break;
        case 7:
            lineD(20,420,170,570,170,420,20,570)
            obj[6].a.a = 2
            obj[6].a.on = false
            mov++
            fim()
            break;
        case 8:
            lineD(220,420,370,570,370,420,220,570)
            obj[7].a.a = 2
            obj[7].a.on = false
            mov++
            fim()
            break;
        case 9:
            lineD(420,420,570,570,570,420,420,570)
            obj[8].a.a = 2
            obj[8].a.on = false
            mov++
            fim()
            break;
    
    }
}

function lineD(lini,linf,desi,desf,lin2i,lin2f,des2i,des2f){
    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.moveTo(lini,linf)
    ctx.lineTo(desi, desf);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.moveTo(lin2i,lin2f)
    ctx.lineTo(des2i, des2f);
    ctx.stroke();
}

