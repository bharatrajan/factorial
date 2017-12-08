## Factorial generator
Simple factorial generator written in JavaScript. This utility function uses [bigNumber](http://jsfromhell.com/classes/bignumber)

## Factorial Definition

The Factorial of a number `n`, can be defined by:

```
  n! = (n-1)! * n
  0! = 1
```

---

Algorithm and reasoning
===
- bigNumber : An external library is used as JavaScript safe integer limits to (2^53) - 1 
- Used iterative approach instead of recursive due to performance
- Memoization is used to store the results. Thus, cached results are used for future computations

Room for improvement
===
- Memoization is costing space. 
  - It took 40MB(approx.) for an array to store factorials of first 2000 integers
  - We can watch the trend for `n` and optimize the cache array
    - We can warm up this cache array during initialization
    - We can put an upper limit for this this cache array

Credits
===
- [Big number handling](http://jsfromhell.com/classes/bignumber)
