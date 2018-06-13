const createFamilyTree = require('./createFamilyTree');

// Tests for createFamilyTree
function test1() {
  const people = [
    {
      name: 'John',
      parent: 'Sue'
    }, {
      name: 'Jack',
      parent: 'Steve'
    }, {
      name: 'Jill',
      parent: 'Sally'
    }, {
      name: 'Wayne',
      parent: 'Jack'
    }, {
      name: 'Twinkle',
      parent: 'Jack'
    }, {
      name: 'Garth',
      parent: 'Sue'
    }, {
      name: 'Steve',
      parent: 'Alejandro'
    }, {
      name: 'Peter',
      parent: 'Alejandro'
    }
  ];

  console.log(JSON.stringify(createFamilyTree(people), null, 2));
}

function test2() {
  const people = [];

  console.log(JSON.stringify(createFamilyTree(people), null, 2));
}

function test3() {
  const people = [
    {
      name: 'Peter',
      parent: 'Alejandro'
    }
  ];

  console.log(JSON.stringify(createFamilyTree(people), null, 2));
}

test1();
test2();
test3();
