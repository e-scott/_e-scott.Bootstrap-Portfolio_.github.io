window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;           //The topics
    var currentCategorie;     //Selected Categorie
    var word;                 //Selected word
    var choice;              // letter guessed
    var choices = [];        //stored letter guessed
    var chances;            // how many guesses left
    var correctL;           //counting the correct guesses
    var spaces;             // number of spcaces in word
    var playerScore = 0;    // the score

    // Get Elements from HTML Page //
    var showChances = document.getElementById("playerLives");
    var showCatagory = document.getElementById("catName");
    var showScore = document.getElementById("pScore");
    var gform = document.getElementsByClassName("guessForm");

    // Create alphabet id //
    var buttons = function () {
        hangButtons = document.getElementById("buttons");
        letters = document.createElement("ul");

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[i];
            check();
            hangButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    // Select Catagory //
    var selectCat = function () {
        if (currentCategorie === categories[0]) {
            catName.innerHTML = "The Category Is Movies";
        } else if (currentCategorie === categories[1]) {
            catName.innerHTML = "The Category Is Video Games";
        } else if (currentCategorie === categories[2]) {
            catName.innerHTML = "The Category Is Bands";
        }
    }

    // Create Guesses //

    result = function () {
        wordHolder = document.getElementById("store");
        correct = document.createElement("ul");

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute("id", "cWord");
            choice = document.createElement("li");
            choice.setAttribute("class", "choice");
            if (word[i] === ".") {
                choice.innerHTML = " ";
                spaces = 1;
            } else if (word[i] === "-"){
                choice.innerHTML = "-";
                spaces = 1;
            } else {
                choice.innerHTML = "_";
            }

            choices.push(choice);
            wordHolder.appendChild(correct);
            correct.appendChild(choice);
        }
    }


    // Show Chances //

    comments = function () {
        showChances.innerHTML = `You have ${chances} guesses`;
        if (chances < 1) {
            showChances.innerHTML = "Game Over! If your stuck and need help, hint, check the concil";
        } else {
            for (var i = 0; i < choices.length; i++) {
                if (correctL + spaces === choices.length) {
                    showChances.innerHTML = "You Win!";
                    playerScore ++;
                } showScore.innerHTML = `score: ${playerScore}`;
            }
        }
    }
    // Store the score information //
    score = function () {
        for (var s = 0; s < playerScore; s++);
    }

    check = function () {
        list.onclick = function () {
            var choice = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === choice) {
                    choices[i].innerHTML = choice;
                    correctL += 1;
                }
            }
            var j = (word.indexOf(choice));
            if (j === -1) {
                chances -= 1;
                comments();
            } else {
                comments();
            } 
        }
    }



    play = function () {
        categories = [
            ["avatar", "alita", "ironman", "brewsters.millions", "avengers", "black.panther", "aquman", "wonder.women", "captain.america", "ant-man", "talladega.nights", "star.wars", "star.trek"],
            ["final.fantasy", "mass.effect", "jedi.academy", "assassins.creed", "spider-man", "sonic", "mario", "star.craft", "fortnite", "zelda", "anthem", "crack.down", "bio.shock", "elder.scrolls"],
            ["imagine.dragons", "led.zeplin", "kiss", "linkin.park", "nsync", "backstreet.boys", "sleepthief", "aerosmith", "foo.fighters","savage.garden", "destinys.child", "spice.girls", "creed"]
        ];

        currentCategorie = categories[Math.floor(Math.random() * categories.length)];
        word = currentCategorie[Math.floor(Math.random() * currentCategorie.length)];
        console.log(word);
        buttons();

        choices = [];
        chances = 10;
        correctL = 0;
        spaces = 0;
        score = 0;
        result();
        comments();
        selectCat();
    }


    play();


    // Play Again //

    document.getElementById("playAgain").onclick = function () {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
       // context.clearRect(0, 0, 400, 400);
        play();
    }
}