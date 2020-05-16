const fs = require("fs");

const args = process.argv.slice(2)
if (args.length < 1)
{
  console.error("File path argument is expected!");
  process.exit(9);
}

const path = args[0];
fs.readFile(path, (err, content) => {
  if (err)
    throw err;

  const json = JSON.parse(content);

  const jsonNew = {};
  jsonNew.categories = [
    {
      "name": {
        "fr": "Après le nom",
        "en": "After the noun",
        "ru": "После существительного"
      },
      "groups": json.categories
    },
    {
      "name": {
        "fr": "Avant le nom",
        "en": "Before the noun",
        "ru": "Перед существительным"
      },
      "groups": []
    },
    {
      "name": {
        "fr": "Avant et après le nom",
        "en": "Both before and after the noun",
        "ru": "И до, и после существительного"
      },
      "groups": []
    }
  ];
  jsonNew.comparison = json.comparison;

  const contentNew = JSON.stringify(jsonNew);
  fs.writeFile(path, contentNew, err => {
    if (err)
      throw err;
  });
});