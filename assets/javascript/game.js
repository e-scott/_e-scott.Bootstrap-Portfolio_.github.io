$(document).ready(function(){
    
    //having goku blacks being any number between 19-146
    var number = Math.floor(Math.random() * 127 + 19)

    $('#eHealth').text(number);

    //setting the imagines to a random number between 1-16
    var goku = Math.floor(Math.random() * 15 + 1);
    var vegeta = Math.floor(Math.random() * 15 + 1);
    var trunks = Math.floor(Math.random() * 15 + 1);
    var a18 = Math.floor(Math.random() * 15 + 1);

    var zwarrior = 0;
    var wins = 0;
    var loss = 0;

    //writes the wins and losses to webpage
    $('#wins').text(wins);
    $('#loss').text(loss);

    // resets the game //

    function reset(){
        number = Math.floor(Math.random() * 127 + 19);
        $('#eHealth').text(number);
        goku = Math.floor(Math.random() * 15 + 1);
        vegeta = Math.floor(Math.random() * 15 + 1);
        trunks = Math.floor(Math.random() * 15 + 1);
        a18 = Math.floor(Math.random() * 15 + 1);
        zwarrior = 0;
        $('#final').text(zwarrior);
    }

    // adds the wins to z warrior //
    function awesome(){
        alert('You have Saved the future!');
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // addes loss to zwarrior //
    function fail(){
        alert('Black has conquered the future!');
        loss++;
        $('#loss').text(loss);
        reset();
    }

    // click for the variables to add points and add them together//
    $('#goku').on("click", () => {
        zwarrior = zwarrior + goku;
        $('#final').text(zwarrior);
        if (zwarrior === number){
            awesome();
        }
        else if (zwarrior > number){
            fail();
        }
    })


    $('#vegeta').on("click", () => {
        zwarrior = zwarrior + vegeta;
        $('#final').text(zwarrior);
        if (zwarrior === number){
            awesome();
        }
        else if (zwarrior > number){
            fail();
        }
    })

    $('#trunks').on("click", () => {
        zwarrior = zwarrior + trunks;
        $('#final').text(zwarrior);
        if (zwarrior === number){
            awesome();
        }
        else if (zwarrior > number){
            fail();
        }
    })

    $('#18').on("click", () => {
        zwarrior = zwarrior + a18;
        $('#final').text(zwarrior);
        if (zwarrior === number){
            awesome();
        }
        else if (zwarrior > number){
            fail();
        }
    })
    
    
})
