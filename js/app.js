/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var Taylor = document.getElementById("name1");
Taylor.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var Khaled = document.getElementById('position2');
Khaled.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var Piko = document.getElementById('alias3');
Piko.innerHTML = 'Concatenation';  

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var song = document.getElementsByClassName("profile");
song[0].innerHTML = 'home is where the heart is.';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var quote = document.getElementsByClassName("profile");
quote[1].innerHTML = 'be like water.'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var act = document.getElementsByClassName('alias');
act[2].innerHTML = 'Gibbons';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var david = document.createElement('div');
david.className = 'name7';
david.innerHTML = 'David Ige';
nameParent.appendChild(david);

 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var Dos = document.createElement('div');
Dos.className = 'alias8';
Dos.innerHTML = 'Stay thisrty my friends.';
aliasParent.appendChild(Dos);

//Final Boss
/*9. Create your own profile.*/

