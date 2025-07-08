/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const memo = new Map();

    function dp(l, r, k) {
        if (l > r) return 0;

        const key = `${l},${r},${k}`;
        if (memo.has(key)) return memo.get(key);

        // Compact boxes[r-k...r] if they are the same
        while (r > l && boxes[r] === boxes[r - 1]) {
            r--;
            k++;
        }

        // Option 1: Remove the trailing group directly
        let res = dp(l, r - 1, 0) + (k + 1) * (k + 1);

        // Option 2: Try to merge non-adjacent same-color boxes
        for (let i = l; i < r; i++) {
            if (boxes[i] === boxes[r]) {
                res = Math.max(res,
                    dp(l, i, k + 1) + dp(i + 1, r - 1, 0)
                );
            }
        }

        memo.set(key, res);
        return res;
    }

    return dp(0, boxes.length - 1, 0);
};
