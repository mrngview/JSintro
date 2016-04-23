/*var answer = prompt('Insert your name');
alert('Hello from ' + answer + '\'s PC');
document.write('<h1>Here is ' + answer + '\'s first lesson of Javascript</h1>');
console.log('Program complete');
*/

"<h2>There once was a [adjective] programmer who wanted to use JavaScript to [verb] the [noun].</h2>"

var adjective = prompt('Please type an adjective');
var sentence = '<h2> There once was a ' + adjective;
var verb = prompt('Please type an verb');
var noun = prompt('And now a noun');
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '</h2>';
document.write(sentence);
