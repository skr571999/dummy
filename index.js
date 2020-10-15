const path = require("path");

const filePath =
  "E:\\OpenSourceContributions\\Docusaurus\\docusaurus\\packages\\docusaurus-mdx-loader\\src\\remark\\transformImage\\__tests__\\fixtures\\fail.md";

const relative = path.relative(
  "E:\\OpenSourceContributions\\Docusaurus\\docusaurus",
  filePath
);

console.log("filePath", filePath);
console.log("Relative : ", relative);
