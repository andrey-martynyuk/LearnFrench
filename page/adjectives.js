// Enable collapses
let collapse = $('.collapse');
collapse.on('show.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
});
collapse.on('hide.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
});

// Load data
function loadData(lang)
{
  $.getJSON('page/adjectives.json', data => {

    const catContainer = $('#category-container');
    const catTemplate = $('#category-template');

    // Clear container
    catContainer.children().remove(':not(.d-none)');

    $.each(data.categories, (index, category) => {        
      let cat = catTemplate.clone(true);
      cat.find('a.my-cat-index').attr('href', '#cat' + index);
      cat.find('div.my-cat-index').attr('id', 'cat' + index);
      cat.find('#category-name').text(category.name[lang]);

      const cardContainer = cat.find('#card-container');
      const cardTemplate = cat.find('#card-template');

      $.each(category.words, (index, word) => {
        let card = cardTemplate.clone(true);
        if (word.color)
          card.find('.my-word-color').attr('style', `background-color: ${word.color};`);
        else
          card.find('.my-word-color').hide();
        const fr = Object.values(word.fr);
        const values = Object.values(word[lang]);
        const keys = Object.keys(word[lang]);
        for (let i = 0; i < keys.length; i++) {
          let term = card.find('td.my-cell' + i).children('.my-term');
          term.text(fr[i]);
          term.attr('title', `${values[i]} <span class='my-hint'>(${keys[i]})</span>`);
          term.tooltip();
        }
        card.removeClass('d-none');
        card.appendTo(cardContainer);
      });

      cat.removeClass('d-none');
      cat.appendTo(catContainer);
    });

    // Load section name
    $('#comparison-name').text(data.comparison.name[lang]);

    const cardContainer = $('#comparison-container');
    const cardTemplate = $('#comparison-template');

    // Clear container
    cardContainer.children().remove(':not(.d-none)');
    
    $.each(data.comparison.words, (index, word) => {        
      let card = cardTemplate.clone(true);
      const frKeys = Object.keys(word.fr);
      const frValues = Object.values(word.fr);
      const langKeys = Object.keys(word[lang]);
      const langValues = Object.values(word[lang]);
      for (let i = 0; i < frKeys.length; i++) {
        let cell = card.find('td.my-cell' + i).children();
        cell.html(`<span class='my-term'>${frKeys[i]}</span> ${frValues[i]}`);
        cell.attr('title', `<span class='my-term'>${langKeys[i]}</span> ${langValues[i]}`);
        cell.tooltip();
      }
      card.removeClass('d-none');
      card.appendTo(cardContainer);
    });
  });
}

export function languageHandler(lang) {
  loadData(lang);
}