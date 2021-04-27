'use strict';

let userName=prompt('please enter your name');
console.log(' Hi ' + userName);
alert(' Hi '+ userName )
let age = prompt('is my old less than 30 ?')
console.log(age);
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('yes i\'m young')
       break;
    case 'no' :
    case 'n': 
    alert('the answer is wrong')
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
        alert('yes i love this kind of movie')
        break
    case 'no':
    case 'n':  
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
        alert('that is correct')
        break
    case 'no' :
    case 'n':  
    alert('no you are don\'t know me yet')
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
    alert('yes i am not a programmer')
    break;
    default:
        alert('please answer yes or no')
        break;
}
let book = prompt('the swimming is one of my hobbies')
console.log(book);
switch (book.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('no this is not of my hobbies');
        break
    case 'no' :
    case 'n':  
    alert('you know me')
    break;
    default:
        alert('please answer yes or no')
        break;
}