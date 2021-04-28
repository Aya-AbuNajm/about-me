'use strict';

let userName=prompt('please enter your name');
console.log(' Hi ' + userName);
alert(' Hi '+ userName +' welcome to my page ' )
let mark=0;


let age = prompt('is my old less than 30 ?')
console.log(age);
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('yes i\'m young')
        mark++;
       break;
    case 'no' :
    case 'n': 
    console.log('is my old less than 30? the answer is yes');
    alert('the answer is wrong');
        break;
        default:
            alert('please answer yes or no')
            break;
}
let breaking = prompt('Do I love romantic movie?')
console.log(breaking);
switch (breaking.toLowerCase()) {
    case 'yes':
    case 'y':
        mark++;
        alert('yes i love this kind of movie')
        break
    case 'no':
    case 'n': 
    console.log('Do I love romantic movie? the answer is yes'); 
    alert('no i really love it')
    break;
    default:
        alert('please answer yes or no')
        break;
}
let calm = prompt('Do I love reading ?')
console.log(calm);
switch (calm.toLowerCase()) {
    case 'yes':
    case 'y':
        mark++;
        alert('that is correct')
        break
    case 'no' :
    case 'n':  
    alert('no you are don\'t know me yet')
    console.log('Do I love reading? the answer is yes');
    break;
 default:
            alert('please answer yes or no')
            break;
}
let dark = prompt('my major is programmer')
console.log(dark);
switch (dark.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('this is wrong , i am an architect ')
        break
    case 'no' :
    case 'n':  
    mark++;
    alert('yes i am not a programmer')
    break;
    default:
        console.log('my major is programmer? the answer is no');
        alert('please answer yes or no')
        break;
}
let book = prompt('the swimming is one of my hobbies')
console.log(book);
switch (book.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('the swimming is one of my hobbies? the answer is no');
        alert('no this is not of my hobbies');
        break
    case 'no' :
    case 'n':
        mark++;  
    alert('you know me')
    break;
    default:
        alert('please answer yes or no')
        break;
}




let LoopAya =4; 
let stopMyLoop=false;


while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput = Number(prompt("How tall is my height? \nHint:I am of medium height (157-165)")); 


    if (userInput >= 158 && userInput <=159)
    {
        alert('low');
    }
    else if ( userInput == 160 || userInput == 161 )
    {
        alert('so close');
    }
    else if ( userInput == 162)
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }
    else if ( userInput == 163)
    {
        alert(' close');
    }
    else if ( userInput >= 163 && userInput < 164)
    {
        alert('too high');
    }
    else if ( userInput < 157 || userInput> 164 ) 
    {
        alert('Out of Range');
    }

while ( stopMyLoop == false  && LoopAya==0 ) 
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 162 ');
 stopMyLoop = true;
}

}






LoopAya = 5;
stopMyLoop = false;
let myArr = ['ME BEFORE YOU','THE FAULT IN OUR STARS','the princess switch','Miracle in Cell No 7','wonder','joker','night school','home alone'];
let userInput = prompt('Guess what is my favorite movie\nHINT:  \nMiracle in Cell No 7,\nthe fault in our stars,\nme befor you ,\nthe princess switch,\nwonder,\nJoker,Night School '); 



while ( LoopAya >= 0 && stopMyLoop == false )
{

   LoopAya--; 

   if ( userInput.toUpperCase() == myArr[1] ) 
   {
        mark++; 
        LoopAya=0; 
        alert('Correct Answer! ^^');
        break;
   }

   else 
   { 
      for (let i = 0 ; i<=4 ; i++)
      {
      alert('Wrong Answer, Try AGAIN');
      userInput = prompt('HINT:\n the fault in our stars,\nthe princess switch,me befor you ,\nMiracle in Cell No 7,\nwonder,\nJoker,Night School ');
      break;

      }

      if ( stopMyLoop == false  && LoopAya == 0 ) 
      {
           alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: the fault in our stars ');
           break;
      }
   }
      
}

console.log('good job  ' + userName + '  your score is  '+ mark +'/7' );
