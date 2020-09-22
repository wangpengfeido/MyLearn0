// 递归验证左右子树，并验证允许值的范围

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function recursion(root, minVal, maxVal) {
    if (!root) {
      return true;
    }
    if (root.val >= maxVal || root.val <= minVal) {
      return false;
    }
    return (
      recursion(root.left, minVal, root.val) &&
      recursion(root.right, root.val, maxVal)
    );
  }

  return recursion(root, -Infinity, Infinity);
};
