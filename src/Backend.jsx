function createGrid(m, n) {
  let arr = new Array(m);
  let ans = new Array(m);
  for (let i = 0; i < m; i++) {
    arr[i] = new Array(n).fill(1);
    ans[i] = new Array(n).fill(1);
    console.log(arr[i]);
  }
  carveRandomPath(arr);
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) ans[i][j] = arr[i][j];
  markShortestPath(ans);
  return [arr, ans];
}

function carveRandomPath(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  function dfs(x, y) {
    grid[x][y] = 0;
    visited[x][y] = true;

    if (x === n - 1 && y === m - 1) return true;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    shuffle(directions);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny]) {
        if (dfs(nx, ny)) return true;
      }
    }

    return false;
  }

  dfs(0, 0);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function markShortestPath(grid) {
  const n = grid.length;
  const m = grid[0].length;
  if (grid[0][0] === 1 || grid[n - 1][m - 1] === 1) return;

  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const parent = Array.from({ length: n }, () => Array(m).fill(null));

  const queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === n - 1 && y === m - 1) break;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        grid[nx][ny] === 0 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        parent[nx][ny] = [x, y];
        queue.push([nx, ny]);
      }
    }
  }

  let cur = [n - 1, m - 1];
  while (cur) {
    const [x, y] = cur;
    grid[x][y] = 2;
    cur = parent[x][y];
  }
}

export { createGrid };
