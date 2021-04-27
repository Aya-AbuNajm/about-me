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
alert('After This Message, we\'re going to play a quick game, \n Called GUESS-AboutMe, \n - Which is made up of 6 Questions that you will answer with NUMBERS only. \n - You will have 4 attempts each time. \n- I will give you a hint for each question');


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



LoopAya =4; // 
stopMyLoop=false;


while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput = Number(prompt('How much is my experience? \nHint: i am fresh graduate'));

   
    if (userInput > 0 && userInput <=1)
    {
        alert('so close');
    }
         else if ( userInput == 2)
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }

    else if ( userInput >= 3 && userInput <= 4 )
    {
        alert('high');
    }
    else if ( userInput >= 5 && userInput <= 6 )
    {
        alert('too high');
    }
    else if ( userInput < -1 || userInput >7)
    {
        alert('Out of Range');
    }
    

while ( stopMyLoop == false  && LoopAya==0 ) 
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 2 years ');
 stopMyLoop = true;
}

}



LoopAya =4; 
stopMyLoop=false;

// Q3
while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput= Number(prompt('how old am i ?\nHint: Between 21 and 29'));

   
    if (userInput > 22 && userInput <=23)
    {
        alert('too low');
    }
    else if ( userInput == 24 || userInput == 25 )
    {
        alert('so close');
    }
    else if ( userInput == 26 )
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }

    else if ( userInput >= 27 && userInput <= 28 )
    {
        alert('high');
    }
  
    else if ( userInput < 21 || userInput> 29)
    {
        alert('Out of Range');
    }
    

while ( stopMyLoop == false  && LoopAya==0 ) 
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 26 ');
 stopMyLoop = true;
}

}

// reset the values to use it again
LoopAya =4; // 
stopMyLoop=false;

// Q4
while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput= Number(prompt('How many uncle i have??\nHint: it\'s a big family'));

   
    if (userInput >= 1 && userInput <=2)
    {
        alert('too low');
    }
    else if ( userInput == 3 || userInput ==4  )
    {
        alert('so close');
    }
    else if ( userInput == 5 )
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }

    else if ( userInput >= 6 && userInput <= 7 )
    {
        alert('high');
    }
    else if ( userInput >= 8 && userInput <= 9 )
    {
        alert('too high');
    }
  
    else if ( userInput < 0 || userInput> 10)
    {
        alert('Out of Range');
    }
    

while ( stopMyLoop == false  && LoopAya==0 ) // When the attempts end without a correct answer
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 5 ');
 stopMyLoop = true;
}

}


// reset the values to use it again
LoopAya =4; // 
stopMyLoop=false;

// Q5
while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput= Number(prompt('in any year i graduated?\nHint:between 2016-2021'));   
    if (userInput >= 2015 && userInput <=2016)
    {
        alert('too low');
    }
     
     else if ( userInput == 2017 || userInput == 2018 )
    {
        alert('so close');
    }
    else if ( userInput == 2019 ) // correct answer
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }

    else if ( userInput >= 2020 && userInput <= 2021 )
    {
        alert('high');
    }
  
    else if ( userInput < 2016 || userInput> 2022 ) // out of range
    {
        alert('Out of Range');
    }
    

while ( stopMyLoop == false  && LoopAya==0 ) // When the attempts end without a correct answer
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 2019 ');
 stopMyLoop = true;
}

}

LoopAya =4; 
stopMyLoop=false;

// Q6
while ( stopMyLoop == false  && LoopAya!==0 )
{
    LoopAya--;
    let userInput= Number(prompt('I joined the university in ?\nHINT: Between 2007-2016'));

   
    if (userInput >= 2008 && userInput <=2009)
    {
        alert('too low');
    }
    else if ( userInput >= 2010 && userInput <= 2011 )
    {
        alert(' close');
    }
    else if ( userInput == 2012 || userInput == 2013)
    {
        alert('so close');
    }
    else if ( userInput == 2014 ) // correct answer
    {
        alert('Correct Answer! ^^');
        mark++; stopMyLoop=true; 
    }

    else if ( userInput >= 2015 && userInput <= 2016 )
    {
        alert('high');
    }
  
    else if ( userInput < 2007 || userInput> 2017 ) // out of range
    {
        alert('Out of Range');
    }
    

while ( stopMyLoop == false  && LoopAya==0 ) // When the attempts end without a correct answer
{
 alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 2014 ');
 stopMyLoop = true;
}

}




LoopAya = 5;
stopMyLoop = false;
let myArr = ['ME BEFORE YOU','THE FAULT IN OUR STARS','the princess switch','Miracle in Cell No 7','wonder','joker','night school','home alone'];
let userInput = prompt('Guess what is my favorite movie\nHINT:  \nMiracle in Cell No 7,the fault in our stars,\nme befor you ,\nthe princess switch,\nwonder,\nJoker,Night School '); 



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

console.log('goo job  ' + userName + '  your score is  '+ mark );
