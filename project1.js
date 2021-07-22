/*
step 1: define function that accepts a string as parameter
step 2: using the .split method, separate string into separate words/strings
step 3: define a variable longest and leave as undefined

step 4:using 'for' loop, search through the different words and send a conditing where if the index word is greater in length than the longest word, then the value of the longest becomes the index word
console.log the longest.
*/
function findLongestWord(str) {
    var words = str.split(' ');
    var longest = ''
    
  
    for(var word of words)
     
    {
      if(word.length > longest.length) longest = word; 
    }
      console.log(longest)   
    }
  
      
  
  findLongestWord('I love this course because it is very interesting');
  