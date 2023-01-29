const diceImg = document.getElementById("dice-img");


// writting a function for movement of dice which getting random value

function diceMove() {
    let x = Math.floor(Math.random() * 6 + 1);
    // console.log(x)
    var img1;
    switch(x) 
    {
        case 1 : 
                 img1=document.getElementById("dice-img").src="images/dice1.png"
                 document.getElementById("dice-img").src=img1;
                 break;
        case 2 : 
                 img1=document.getElementById("dice-img").src="images/dice2.png"
                 document.getElementById("dice-img").src=img1;
                 break;
        case 3 : 
                 img1=document.getElementById("dice-img").src="images/dice3.png"
                 document.getElementById("dice-img").src=img1;
                 break;
        case 4 : 
                 img1=document.getElementById("dice-img").src="images/dice4.png"
                 document.getElementById("dice-img").src=img1;
                 break;
        case 5 : 
                 img1=document.getElementById("dice-img").src="images/dice5.png"
                 document.getElementById("dice-img").src=img1;
                 break;
        case 6 : 
                 img1=document.getElementById("dice-img").src="images/dice6.png"
                 document.getElementById("dice-img").src=img1;
                 break;
    }
}