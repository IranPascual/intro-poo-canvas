const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");


//Obtienen las dimenciones de la pantalla actual
const window_height=window.innerHeight;
const window_width=window.innerWidth;

//El canvas tiene las mismas dimenciones que la pantalla
canvas.height=window_height;
canvas.width=window_width;

//Crea un fondo para el canvas
canvas.style.background='#ff8';

//Crea una clase
class Circle{
    constructor(x,y,radius,color,text){
        //Propiedades
        this.posX=x;
        this.posY=y;
        this.radius=radius;
        this.color=color;
        this.text = text;
        
        

    }

    //Metodos   
    draw(Context){
        //Dibuja un circulo
    
        Context.beginPath();

        Context.strokeStyle=this.color;
        Context.textAlign = "Center";
        Context.textBaseline = "middle";
        Context.fillTextFont = "20Px Arial";
        
        Context.lineWidth = "5";
        Context.fillText(this.text,this.posX,this.posY);
        Context.arc(this.posX,this.posY,this.radius,0,Math.PI*2,false);
        Context.stroke();
        Context.closePath();

    }

}
//Instancia de la clase
let arrayCircle = [];

for (let i=0; i<10; i++){
    let randomX = Math.random()*window_width;
    let randomY = Math.random()*window_height;
    let randomRadius = Math.floor(Math.random()*100 + 5);

    let miCirculo = new Circle(randomX,randomY,randomRadius,'blue',i);
    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);

}


/*
let miCirculo = new Circle(100,100,50,"Blue",'TEC');

let miCirculo2 = new Circle(270,270,50,"Black",'TEC');

miCirculo.draw(ctx);
miCirculo2.draw(ctx);*/