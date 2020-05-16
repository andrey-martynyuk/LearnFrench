const fs = require("fs");

const args = process.argv.slice(2)
if (args.length < 1)
{
  console.error("File path argument is expected!");
  process.exit(9);
}

function upgrade(word) {
  return {
    "word": word,
    "examples": []
  };
}

const path = args[0];
fs.readFile(path, (err, content) => {
  if (err)
    throw err;
  
  const jsonNew = {};
  jsonNew.categories = [];
  jsonNew.comparison = {};

  const json = JSON.parse(content);
  json.categories.forEach(category => {
    const categoryNew = {
      "name": category.name,
      "words": []
    };

    category.words.forEach(word => {
      const newWord = upgrade(word);
      categoryNew.words.push(newWord);
    });

    jsonNew.categories.push(categoryNew);
  });

  jsonNew.comparison.name = json.comparison.name;
  jsonNew.comparison.words = [];

  json.comparison.words.forEach(word => {
    const newWord = upgrade(word);
    jsonNew.comparison.words.push(newWord);
  });

  const contentNew = JSON.stringify(jsonNew);
  fs.writeFile(path, contentNew, err => {
    if (err)
      throw err;
  });
});