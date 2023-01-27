# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I elected to opt for a simple refactor. I preserved constants but moved them outside the function to make them available. Then I created a function for hex hash creation, named it clearly and used it twice. I also thought there were a few unnecessary variable creation steps. The most interesting change I made was I elected to make a default event object instead of having code that asked it an event existed. I preserved some of the length handling even though I don't think the sha algorithm produces strings longer than 128, if I was more familiar with what this code was supposed to do, I might consider removing this error state, my tests could not uncover how to generate a longer string.