---
title: "Church Numerals in Ruby"
description: "A quick and dirty introduction to numbers in λ calculus, with a twist of Ruby."
pubDate: "2022-11-17"
---

# Church Numerals in Ruby

*A quick and dirty introduction to numbers in λ calculus, with a twist of Ruby.*

## Necessary Preface
* I have *zero* Ruby experience prior to this. 
  * *All* my Ruby knowledge comes from putting this together.
  * *However*, Ruby has some *very nice syntactic sugar* with lambdas that I'll take full advantage of. 
* Try out some of the code blocks in `irb`! 

### So, what syntactic sugar?
Here's some of the syntax that I use (and think is cool!). This is also all you need to know to understand this.
* Ruby has lambdas/procs like `f = lambda { |x| x + 1 }`. There's also shorthand for lambdas that's equivalent `f = ->(x) { x + 1 }`. 
* Lambdas are called by `f.call(2)` (which produces `3`, in this case). They can also be called like `f.(2)` or even just `f[2]`. I'll use the last one. 
* Lambdas are composable. If we had some `f[g[x]]`, this is the same as `(f << g)[x]` or `(g >> f)[x]` (that is, *shoveling* composes procs). This can be chained for more than 2 procs too. I'll be using this to compose functions together. 

## Anyways, why does this matter?
* It's cool. 
* We know a lot of representations of numbers: 
  * Writing the digit `4`, 
  * holding up 4 fingers,
  * or even `IV` in Roman numerals!
  * four tick marks like 'IIII' on the wall, etc.
  * *this is one more!*

## So, how do we do it? 
We'll represent numbers as a 'function'. In lambda calculus, everything is a lambda (!). 

We'll follow this rule: 

> The **Church numeral** `N` is a **function** that takes in a **function** `f` as input, and produces a **function** that applies that function `f`, `N` times. 

## For example...
0 is represented as
```ruby
zero = ->(f) { ->(x) {x} }
```
"The function that takes a function, and applies it 0 times. So it returns the identity function."

1 is represented as 
```ruby
one = ->(f) { f }
```
"The function that just applies `f` once."

And we can continue this...
```ruby
two = ->(f) { f >> f }
three = ->(f) { f >> f >> f }
```
and so on. 

(Note that we use the composition operator here! Recall that `(f >> f)[x]` is the same as `f[f[x]]` so we can use `f >> f` to represent the function that will apply `f` twice.)

## But these are all `#<Proc>`s!
We can convert Church numerals into honest-to-goodness numbers. What does it mean for a function to be applied `N` times? We can apply the successor function `N` times to `0`. 
```ruby
num_of_church = ->(n) { n[->(x){x.succ}][0] }
```

## Church numerals (don't) `succ`
We can now also define successors - we make a function that applies `f` just one more time (composing `n` `f`'s with one more). 
```ruby
succ = ->(n) { ->(f) { n[f] >> f } }
```

## More numbers!
We can now get more numbers: 
```ruby
four = succ[three]
five = succ[four]
```
and so on.

## Adding numbers
Adding numbers is functional composition (apply n times first, then apply m times more):
```ruby
add = ->(n,m) { ->(f) { n[f] >> m[f] } }
```
try
```ruby
num_of_church[add[five,two]]
```

## In closing
We might want to do some more powerful things, like multiplication or taking powers. I'll leave you to ponder the following: 
```ruby
mult = ->(n,m) { n >> m }
num_of_church[mult[three,five]]
```
*(what is multiplying? we can do the act of [applying `f` n times] m times for a total of mn applications.)*

how about...
```ruby
pow = ->(n,m) { m[n] }
num_of_church[pow[three,four]]
```
*(also try taking a zero'eth power!)*

What about predecessor functions? Subtraction? 

---
*These are my notes, slightly edited, for a lightning talk presented at [RubyConf Mini 2022](https://www.rubyconfmini.com/). See the exact lightning talk [here](https://youtu.be/M5uWyzBgPHs?t=973)!*

To see more, take a look at [Tom Stuart's Programming with Nothing](https://tomstu.art/programming-with-nothing) (thanks to many who recommended this to me) and his book [Understanding Computation](https://computationbook.com/).
