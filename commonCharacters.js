/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

**/

function duplicate(string1,string2){
    sum=''
    for (let i = 0; i < string1.length; i++) {
       if (string2.indexOf(string1[i])!==-1 && string1[i]!==' '){
        if(!sum.includes(string1[i])){
            sum+=string1[i]
        }
     

       }
            
            
        }
        return sum || null
        
    }

