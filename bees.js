export default class Bees{
constructor(){
    this.beesx=[];
    this.beesy=[]
    for(let i =0; i<21;i++){
this.beesx[i]=(Math.round(Math.random()*1000));
this.beesy[i]=(Math.round(Math.random()*100));
    }
}
draw(ctx){
    for(let x=0;x<21;x++){
        ctx.fillStyle=("#000");
        ctx.fillRect(this.beesx[x],this.beesy[x],3,3)
    }
}
proccess(){
    for(let y=0;y<21;y++){
        if(this.beesx[y]<950){
        this.beesx[y]=this.beesx[y]+Math.round(Math.random()*5);
        }
        if(this.beesx[y]>50){
        this.beesx[y]=this.beesx[y]-Math.round(Math.random()*5);
        }
        if(this.beesy[y]<350){
        this.beesy[y]=this.beesy[y]+Math.round(Math.random()*5);
        }
        if(this.beesy[y]>50){
        this.beesy[y]=this.beesy[y]-Math.round(Math.random()*5);
        }
}
}
iskillplayer(){
for(let z=0;z<21;z++){
    if(this.beesx[z]-3>window.PlayerX){
        if(this.beesx[z]<window.PlayerX+100){
            if(this.beesy[z]+3>window.PlayerY){
                if(this.beesy[z]<window.PlayerY+150){
return true;
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}
}
}
}