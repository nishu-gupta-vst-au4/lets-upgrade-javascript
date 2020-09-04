//program to search for a particular character in a string

let str="satish";
var char='t';
var index=str.search(char);
if(index>=0)
 {
    console.log(` ${char} is present in string ${str} and index is ${index+1} `);}
else {
       console.log(`${char} is not present in string ${str}`);
}

//Program to convert minutes to seconds

 var m=2.5;
 var s=Math.floor(m*60);
 console.log(` ${m} minutes= ${s} seconds`);


//program to search for a element in a array of strings

var b=["Apple","Banana","Mango","Watermelon"];
str1='Mango';
var index=b.indexOf(str1);
 if(index!=-1)
 {
     console.log(`${str1} is present in array ${b} and index is ${index+1}`);

 }
 else{
     console.log(`${str1} is not present in array ${b}`);
 }


// program to display only elements containing 'a' in them from an array

var arr=["Krishna","Radha","Ram","Shyam","Renu"]

var len=arr.length;
 for(let i=0;i<arr.length;i++)
 {
      for(let j=0;j<arr[i].length;j++)
      {
          if(arr[i][j]=='a')
          {
              console.log(arr[i]);
              break;
          }
      }
 }

//print an array reverse order

var array=[12,3,123,6,78];
var a =array.reverse();
console.log(a);
