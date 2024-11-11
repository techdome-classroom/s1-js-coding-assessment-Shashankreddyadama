const getTotalIsles = function (grid) {

    // Edge case: If grid is empty
    if (!grid || grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function for DFS traversal
    function dfs(r, c) {
        // Check for out-of-bounds or water cell
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') return;

        // Mark the cell as visited by setting it to 'W'
        grid[r][c] = 'W';

        // Explore the neighboring cells (up, down, left, right)
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
    }

    // Iterate through each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') { // If we find land
                islandCount++; // Increment island count
                dfs(r, c); // Run DFS to mark the whole island
            }
        }
    }

    return islandCount;
}

 
};

module.exports = getTotalIsles;