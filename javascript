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
