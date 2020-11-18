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

## Making Tests Easier with Fixtures: Setup

### HOOKS

With its default “BDD”-style interface, Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.

## Making Tests Easier with Fixtures: Teardown ?

## Covering Edge Cases

### Writing tests first as an outline

- Write tests retroactively
- Only focus on what a function does
- Write simpler expectations first
- Get simple tests to pass before writing more involved ones

## Challenge: Writing Testable Code

Answer: Writing Testable Code

## Changing Mocha’s Reporter

- mocha --reporter markdown

one unite test completed
one unite test completed
entire test suite completed

# TOC

- [checkForShip](#checkforship)
- [damageShip](#damageship)
- [fire](#fire)
  <a name=""></a>

<a name="checkforship"></a>

# checkForShip

should correctly report no ship at a given players coordinate.

```js
expect(checkForShip(player, [9, 9])).to.be.false
```

should correctly report a ship at a given coordinates.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
```

should handle ships located at more than one coordinate.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [9, 9])).to.be.false
```

should handle chacking multiple ships.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0])
expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1])
expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1])
expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2])
expect(checkForShip(player, [9, 9])).to.be.false
```

<a name="damageship"></a>

# damageShip

should register damage on a given ship at a given location.

```js
let ship = {
  locations: [
    [0, 0],
    [0, 1],
  ],
  damage: [],
}

damageShip(ship, [0, 0])
expect(ship.damage).to.not.empty
expect(ship.damage[0]).to.deep.equal([0, 0])
```

<a name="fire"></a>

# fire

should record damage on the given players ship at a given coordinate.

```js
fire(player, [0, 0])
expect(player.ships[0].damage[0]).to.deep.equal([0, 0])
```

should NOT record damage if there is no ship at my coordinates.

```js
fire(player, [9, 9])
expect(player.ships[0].damage).to.be.empty
```

Outlining Your Test Suite
Watching Test Files
Mocks and Stubs
Testing Asynchronous Code
