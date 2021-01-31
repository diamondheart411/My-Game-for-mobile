class Deal{
    constructor(){
        this.deal=createButton("No Deal");
        this.noDeal=createButton("Deal")
        this.show=createElement("h2")
        this.greeting=createElement("h3")
        this.formEnd=createButton("Resume")
    }
     display(){
        var avg=count/ask;
        //background("red");
    this.show.html("this is your Average: " + avg);
    this.show.position(displayWidth/2 - 330, displayHeight/2-295);
    this.deal.position(displayWidth/2 - 30, displayHeight/2-195);
    this.deal.style('color','green');
    this.noDeal.position(displayWidth/2 - 30, displayHeight/2-95);
    this.noDeal.style('color','green');
    game.hideMainButtons();
    this.noDeal.mousePressed(()=>{
        this.show.hide();
        this.greeting.html("Thank You for Participating " + playerName);
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        theWinner.play();
        this.deal.hide();
        this.noDeal.hide();
    });
    this.deal.mousePressed(()=>{
        this.greeting.html("Good Luck 👍");
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        this.formEnd.position( displayWidth-300,displayHeight/2+100)
        this.formEnd.style('color','orange');
        this.show.hide();
        this.deal.hide();
        this.noDeal.hide();
        ask=0;
        });

        this.formEnd.mousePressed(()=>{
            game.showMainButtons();
             this.deal.hide();
             this.noDeal.hide();
             this.greeting.hide();
             this.show.hide();
             this.formEnd.hide();
        })
    
    }
    endGame(){
       game.hideMainButtons();
        this.show.html("The Game is Over.You Played Well")
        this.show.position(displayWidth/2 - 330, displayHeight/2-295);
        this.greeting.html("Thank You for Participating " + playerName);
        this.greeting.position(displayWidth/2-150,displayHeight/2-150)
        theWinner.play();
        this.deal.hide();
        this.noDeal.hide();
    }
}