const namesArray = ["acm", "vit"];
const namesObject = { club: "acm", college: "vit" };

// const [chapterName, collegeName] = namesArray;
const { club: chapterName, college: collegeName } = namesObject;

console.log(chapterName);
console.log(collegeName);
