export default class Bees{
constructor(){
    this.beesx=[];
    this.beesy=[]
    for(let i =0; i<21;i++){
beesx[i]=(Math.round(Math.random*1000));
beesy[i]=(Math.round(Math.random*100));
    }
}
draw(ctx){
    for(i=0;i<21;i++){
        ctx.fillStyle=("#000");
        ctx.fillRect(beesx[i],beesy[i],3,3)
    }
}
proccess(){
    for(i=0;i<21;i++){
        if(beesx[i]<950){
        beesx[i]=beesx[i]+Math.round(Math.random*5);
        }
        if(beesx[i]>50){
        beesx[i]=beesx[i]-Math.round(Math.random*5);
        }
        if(beesy[i]<350){
        beesy[i]=beesy[i]+Math.round(Math.random*5);
        }
        if(beesy[i]>50){
        beesy[i]=beesy[i]-Math.round(Math.random*3);
        }
}
}
iskillplayer(){
for(i=0;i<21;i++){
    if(beesx[i]-3>window.PlayerX){
        if(beesx[i]<window.PlayerX+100){
            if(beesy[i]+3>window.PlayerY){
                if(beesy[i]<window.PlayerY+150){
return true;
                }else{return false;}
            }else{return false;}
        }else{return false;}
    }else{return false;}
}
}
}