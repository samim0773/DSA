function isPalindrome(n) {

    return n < 0 ? false : n === +n.toString().split('').reverse().join('');
}

const result = isPalindrome(12);
console.log("Palindrom or not:", result);

/* -----  step -----

1: convert number to string like == 121 ===> '121'
exp:  n.toString() 
2: we have many string in build funtion. then split the string for reverse
exp: let n = '121'
    n.split('') ==> ['1','2','1']
3: then revers the string
exp: ['1','2','1'] === >  ['1','2','1']

4: then join the string 
    ['1','2','1'] == > ['121']

5:  convert string to number 
    add + operator 


*/