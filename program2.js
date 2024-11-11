const decodeTheRing = function (s, p) {
  function isMatch(message, key) {
    const m = message.length;
    const n = key.length;

    // Create a 2D dp array where dp[i][j] represents whether message[0..i-1] matches key[0..j-1]
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // Base case: both message and key are empty
    dp[0][0] = true;

    // Fill first row for patterns starting with *
    for (let j = 1; j <= n; j++) {
        if (key[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the rest of the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (key[j - 1] === '*') {
                // '*' can either match zero characters (dp[i][j-1]) or one character (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (key[j - 1] === '?' || key[j - 1] === message[i - 1]) {
                // '?' matches any single character, or exact character match
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};
  
  module.exports = decodeTheRing;