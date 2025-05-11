export default function shuffle(arr) {
  return arr.map(v => [Math.random(), v])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
}
