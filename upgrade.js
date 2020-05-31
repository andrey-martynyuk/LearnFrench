const fs = require("fs");

const args = process.argv.slice(2)
if (args.length < 1)
{
  console.error("File path argument is expected!");
  process.exit(9);
}

function upgrade(entry) {
  const fr = entry.word.fr;
  const title = (fr["m sl"] == fr["f sl"]) ? fr["m sl"] : fr["m sl"] + "/" + fr["f sl"];
  if (entry.color)
    return {
    "color": entry.color,
    "word": entry.word,
    "title": entry.title ?? title,
    "examples": entry.examples
  };
  return {
    "word": entry.word,
    "title": entry.title ?? title,
    "examples": entry.examples
  };
}

const path = args[0];
fs.readFile(path, (err, content) => {
  if (err)
    throw err;

  const json = JSON.parse(content);
  const jsonNew = {};
  jsonNew.categories = [];
  jsonNew.comparison = json.comparison;

  json.categories.forEach(category => {
    const categoryNew = {
      "name": category.name,
      "groups": []
    };
    category.groups.forEach(group => {
      let newGroup = {
        "name": null,
        "words": []
      };
      if (group.name)
        newGroup.name = group.name;
      group.words.forEach(word => {
        const newWord = upgrade(word);
        newGroup.words.push(newWord);
      });
      categoryNew.groups.push(newGroup);
    });
    jsonNew.categories.push(categoryNew);
  });

  const contentNew = JSON.stringify(jsonNew);
  fs.writeFile(path, contentNew, err => {
    if (err)
      throw err;
  });
});