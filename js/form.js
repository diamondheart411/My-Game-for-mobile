class Form{
    constructor(){
        this.input=createInput("Name");
        this.btplay=createButton("Play");
        this.btLetsStart=createButton("Let's Start");
        this.title=createElement("h1");
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.greeting3=createElement("h2");
        
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.btplay.hide();
        this.btLetsStart.hide();
        this.input.hide();
        this.title.hide();
    }
    
      display(){
        this.title.html("Deal Or No Deal");
        this.title.position(displayWidth/2 - 90, 0);
        this.title.style('color','black');
        
        background(formBg);
        this.input.position(displayWidth/2 - 610 , displayHeight/2 - 80);
        this.btplay.position(displayWidth/2 - 560, displayHeight/2);
        this.btplay.style('color','black');
        this.btLetsStart.hide();
      
        this.btplay.mousePressed(()=>{
            this.input.hide();
            this.btplay.hide();
            this.btLetsStart.show();
            this.btLetsStart.position(displayWidth/2 + 450, displayHeight/2+90);
            this.btLetsStart.style('color','green');
            playerName = this.input.value();
            this.greeting.html("Hello!! Varnika Kambam welcomes the awsome " + playerName )
            this.greeting.position(displayWidth/2 + 410, displayHeight/4-30);
            this.greeting.style('color','white')
            this.greeting2.html( " Rack Your Brains to be Victorious" )
            this.greeting2.position(displayWidth/2 + 400, displayHeight/4+95);
            this.greeting2.style('color','white')
            this.greeting3.html( "just click on the button to start " )
            this.greeting3.position(displayWidth/2 + 400, displayHeight/4+160);
            this.greeting3.style('color','white')
            starting.play();
            // this.btLetsStart.attribute('disabled','');
            // gameState=PLAY;
        });
        this.btLetsStart.mousePressed(()=>{
            gameState=PLAY
            playCounter=1;
            starting.stop();
        });
      }
}