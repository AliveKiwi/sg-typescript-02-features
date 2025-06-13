// When to use annotations

// 1) When we have a function that returns the 'any' type
// !! Hover cursor over coordinates to see the return type
// !! This is a common case where TypeScript cannot infer the type correctly
// !! and we need to use an annotation to specify the expected type

const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}
