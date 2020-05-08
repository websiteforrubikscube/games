export default class Bees{
constructor(){
    this.beesx=[];
    this.beesy=[]
    for(let i =0; i<21;i++){
this.beesx[i]=(Math.round(Math.random*1000));
this.beesy[i]=(Math.round(Math.random*100));
    }
}
draw(ctx){
    for(i=0;i<21;i++){
        ctx.fillStyle=("#000");
        ctx.fillRect(this.beesx[i],this.beesy[i],3,3)
    }
}
proccess(){
    for(i=0;i<21;i++){
        if(this.beesx[i]<950){
        this.beesx[i]=this.beesx[i]+Math.round(Math.random*5);
        }
        if(this.beesx[i]>50){
        this.beesx[i]=this.beesx[i]-Math.round(Math.random*5);
        }
        if(beesy[i]<350){
        this.beesy[i]=this.beesy[i]+Math.round(Math.random*5);
        }
        if(this.beesy[i]>50){
        this.beesy[i]=this.beesy[i]-Math.round(Math.random*3);
        }
}
}
iskillplayer(){
for(i=0;i<21;i++){
    if(this.beesx[i]-3>window.PlayerX){
        if(this.beesx[i]<window.PlayerX+100){
            if(this.beesy[i]+3>window.PlayerY){
                if(this.beesy[i]<window.PlayerY+150){
return true;
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}
}
}
}