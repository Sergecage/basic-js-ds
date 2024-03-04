const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let firtsNode = l;
  const removeK = function(data) {
    if (data.value === k) {
      data.value = data.next.value;
      data.next = data.next.next;
      removeK(data);
    }
  }
  while (firtsNode.next !== null) {
    removeK(firtsNode);
    if (firtsNode.next.next === null && firtsNode.next.value === k) {
      firtsNode.next = null;
    } else {
      firtsNode = firtsNode.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
