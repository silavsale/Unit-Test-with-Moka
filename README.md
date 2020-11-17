# TEST with mocha and chai

## Different Types of Testing

1. Unit Test
2. Integration Testing
3. End-To-End Testing

## Behavior Driven Development(BDD)

Behavior Driven Development is like creating a plan before your write your program

With BDD your write tests first, and code second

## Red, Green, Refactor

- Red — think about what you want to develop
- Green — think about how to make your tests pass
- Refactor — think about how to improve your existing implementation

## Getting Started with Mocha and Chai

```sh
$ cd yourProjectFolder
$ npm install --save-dev chai mocha
```

## General Structure of Test Files

### All tests in one directory

- Easy to import code from other files
- Easy to organize our tests
- Easy to find a test file after seeing its output in the console

## Test Suites and Test Specs

Writing Our First Test Suite
Writing Our First Test Suite Part 2
Challenge: Expanding Our Expectations
Answer: Expanding Our Expectations
Making Tests Easier with Fixtures: Setup
Making Tests Easier with Fixtures: Teardown
Covering Edge Cases
Challenge: Writing Testable Code
Answer: Writing Testable Code
Changing Mocha’s Reporter
Outlining Your Test Suite
Watching Test Files
Mocks and Stubs
Testing Asynchronous Code
