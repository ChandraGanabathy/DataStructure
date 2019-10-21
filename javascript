3:00 PM


Access Modifier in Typescript.
Everything in class is public if not specified, everything in a module is private unless export keyword used.

sortArray(arr, key) {
arr.sort((a, b) => { return b[key] - a[key]; });
}


DIV --> Block 
Span--> Inline

Splice:
It can do surgery on an array. This is because of the elements to the right

Polyfills
	A simply way to take holes in functionality and fill it in with javascript library and tell the browser to support natively.
Shadow DOM
This specification describes a method of establishing and maintaining functional boundaries between DOM trees and how these trees interact with each other within a document, thus enabling better functional encapsulation within the DOM. 

Array into a string:
Var letters = ["a","b","c"]l
letters.join(); --> "a,b,c"

Letters.join("-"); --> "a-b-c"

Undefined and Null
var myVariable;
Console.out(myVariable); --> undefined

myVariable=null;
console.log(Myvariable); --> returns null
var console.log(myvariable);

Method Invocation Pattern
	var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
	myObject.increment(  );
document.writeln(myObject.value);    // 1
	myObject.increment(2);
document.writeln(myObject.value);    // 3
	
Function Invocation Pattern
	When function is not the property of the object, then its invoked as a function.
	Add(2,3);
	
==> Numbers, strings, Boolean are object-like in that they have methods, but they are immutable. 
==> 



Comments style
/**
   * @namespace Logger
   * @desc Application wide logger
   * @memberOf Factories
   */

Map:
var officers = [
        {id:1, name: 'captain vijaykanth'},
        {id:2, name:"chandra"},
        { id: 56, name: 'Admiral Ozzel'},
        { id: 88, name: 'Commander Jerjerrod'}
];

const officerids = officers.map(officer => officer.id);
console.log(officerids);

Check null and undefined
If(username) 

Reduce
	
	0 -> is the initial value
	Acc-> accumulation of values.

	  var pilots = [
	  {
	    id: 10,
	    name: "Poe Dameron",
	    years: 14,
	  },
	  {
	    id: 2,
	    name: "Temmin 'Snap' Wexley",
	    years: 30,
	  },
	  {
	    id: 41,
	    name: "Tallissan Lintra",
	    years: 16,
	  },
	  {
	    id: 99,
	    name: "Ello Asty",
	    years: 22,
	  }
	];
	const totalyears = pilots.reduce((acc,pilot) => acc + pilot.years,0);
	console.log(totalyears);
	};





Task<int> primeNumberTask = Task.Run (() =>
  Enumerable.Range (2, 3000000).Count (n =>
    Enumerable.Range (2, (int)Math.Sqrt(n)-1).All (i => n % i > 0)));
var awaiter = primeNumberTask.GetAwaiter();
awaiter.OnCompleted (() =>
{
  int result = awaiter.GetResult();
  Console.WriteLine (result);       // Writes result
 });

This is equivalent in async and await
var result = await expression;
statement(s);

Amazon fulfillment builder is the new feature that enables Amazon warehouses to create new items to ship to customer out of smaller parts. As part of this project, Amazon wants to estimate the time it will take for a worker to create the item to be ready for a customer shipment.
 
The amazon fulfillment builder will provide an estimate about the time it will take for the item to be created based on the size of each of the parts.  The worker can only combine two parts at a time. The time required to put two parts together is equal to the sum of the part’s sizes. The size of the newly constructed part is also equal to the sum of the part’s sizes. This process is repeated until all of the parts have been merged together to form the final product. 
 
Write an algorithm to output the minimum possible time to put the N parts together and build the final product.
 
The input to the function/method consists of two arguments: numOfParts, an integer representing the number of the parts. Parts, a list of integers representing the size of the parts. 
 
Output.
 
Returns an integer representing the minimum time acquired to assemble all the parts. 

Example: 

Input: 
	numOfParts= 4
	Parts=[8,4,6,12]
Output:
	58

Explanation: 
	The optimal way to merge the subfiles is as follows:
	Step1: Assemble the parts of the size 4 and 6 ( time required is 10), Size of the remaining parts after merging : [ 8,10,12]
	Step2: Assemble the parts of size 8 and 10 (time required is 18). Size of remaining parts after merging [18, 12]
	Step3: Assemble the parts of the size 18 and 12 a(time required is 30)
	
	Total time required to assemble the part is 10+18+30=58


https://blog.stephencleary.com/2012/02/reporting-progress-from-async-tasks.html
https://stackoverflow.com/questions/12235967/await-doesnt-wait-for-the-completion-of-call

https://github.com/karma-runner/karma/blob/master/thesis.pdf

https://learning.oreilly.com/library/view/learning-angular-for/9781785884283/3dc2ecc5-6d3a-45d0-9a50-4ae070af9b12.xhtml

https://www.freecodecamp.org/news/48-answers-on-stack-overflow-to-the-most-popular-angular-questions-52f9eb430ab0/#9842
