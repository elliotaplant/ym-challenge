/*
Given the following flat list of people, write code that will generate an array of people with their
children as properties of themselves.
Example output format:
  [
    { name: ‘Sue’, children: [
      { name: 'John', children:[] },
      { name: 'Garth', children: [] }
    ]},
    {'another person'...}
  ]
var people = [
  { name: 'John', parent: 'Sue' },
  { name: 'Jack', parent: 'Steve' },
  { name: 'Jill', parent: 'Sally' },
  { name: 'Wayne', parent: 'Jack' },
  { name: 'Twinkle', parent: 'Jack' },
  { name: 'Garth', parent: 'Sue' },
  { name: 'Steve', parent: 'Alejandro' },
  { name: 'Peter', parent: 'Alejandro' },
]
*/

function createFamilyTree(people) {
  // First, find the roots of the family tree.
  const familyRoots = findFamilyRoots(people);

  //  Next, create a map from parents to all their children
  const parentChildMap = createParentChildMap(people)

  // Finally, starting with the roots, recursively build each family tree
  return roots.map(root => makeTreeNode(root, parentChildMap));
}

// A method to find the family roots of a set of people
// These are parents that do not appear in the child list
function findFamilyRoots(people) {
  const children = new Set(people.map(({name}) => name));
  let roots = people.map(({parent}) => parent).filter(parent => !children.has(parent));
  // We can use a Set to make sure we only have unique roots
  return Array.from(new Set(roots));
}

// Creates a map of parent:child[]
// Example: { Sue: ['John'], Jack: ['Sue', 'Wayne'] }
function createParentChildMap(people) {
  return people.reduce((parentChildMap, {name, parent}) => {
    if (!parentChildMap[parent]) {
      parentChildMap[parent] = [];
    }
    parentChildMap[parent].push(name);
    return parentChildMap;
  }, {});
}

// Creates a tree starting with a given name and the map of all parents to their children
function makeTreeNode(name, parentChildMap) {
  let children = [];
  // Base case is if name is not in parentChildMap
  if (parentChildMap[name]) {
    children = parentChildMap[name].map(child => makeTreeNode(child, parentChildMap));
  }
  return { name, children };
}


function test() {
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

test();
