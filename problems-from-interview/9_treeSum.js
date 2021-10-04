const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
      },
      {
        v: 11,
      },
    ]
  },
  {
    v: 5,
    c: [
      {v: 20,}
    ]
  }
];

function treeSum(tree) {
  let answerSum = 0;
  if (!tree.length) {
    return 0;
  }
  let stack = [];

  tree.forEach(node => stack.push(node));

  while (stack.length) {
    let node = stack.pop();
    answerSum += node.v;
    if (node.c) {
      node.c.forEach((n => stack.push(n)));
    }
  }

  return answerSum;
}

console.log(treeSum(tree));