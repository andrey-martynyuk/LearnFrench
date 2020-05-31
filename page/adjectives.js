// Enable collapses
let collapse = $('.collapse');
collapse.on('show.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
});
collapse.on('hide.bs.collapse', (event) => {
  $(event.target).parent().find('i.fas').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
});

// Modal dialog handler
const modal = $('#showExamplesModal');
modal.on('show.bs.modal', function (event) {
  const data = event.relatedTarget;
  const modal = $(this);
  modal.find('.modal-title').text(data.title);

  // Clear container
  const exampleContainer = modal.find('#example-container');
  exampleContainer.children().remove(':not(.d-none)');

  // Gather template
  const exampleTemplate = exampleContainer.find('#example-template');
  
  data.examples.forEach(item => {
    let example = exampleTemplate.clone(true);
    example.children().eq(0).html(item.fr);
    example.children().eq(1).html(item[data.lang]);
    example.removeAttr('id');
    example.removeClass('d-none');
    example.appendTo(exampleContainer);
  });
});

// Click handler
function showExamples(event) {
  modal.modal({}, event.data);
}

// Load data
function loadData(lang) {
  $.getJSON('page/adjectives.json', data => {

    // Clear container
    const catContainer = $('#category-container');
    catContainer.children().remove(':not(.d-none)');

    // Gather template
    const catTemplate = catContainer.find('#category-template');

    $.each(data.categories, (index, category) => {
      let cat = catTemplate.clone(true);
      cat.find('a.my-cat-index').attr('href', '#cat' + index);
      cat.find('div.my-cat-index').attr('id', 'cat' + index);
      
      let catName = cat.find('#category-name');
      catName.text(category.name.fr + ' ');
      catName.attr('title', category.name[lang]);
      catName.tooltip();

      const cardContainer = cat.find('#card-container');
      const cardTemplate = cardContainer.find('#card-template');
      const groupTemplate = cardContainer.find('#group-template');

      $.each(category.groups, (index, item) => {
        let group = groupTemplate.clone(true);
        if (item.name) {
          let groupName = group.find('#group-name');
          groupName.text(item.name.fr + ' ');
          groupName.attr('title', item.name[lang]);
          groupName.tooltip();
        }
        else {
          group.height(0); // TODO: for some reason empty div gets 8px of height.
        }
        group.removeAttr('id');
        group.removeClass('d-none');
        group.appendTo(cardContainer);

        // Force alphabetical order
        item.words.sort((a, b) => {
          return Object.values(a.word.fr)[0].localeCompare(Object.values(b.word.fr)[0]);
        });

        $.each(item.words, (index, item) => {
          let card = cardTemplate.clone(true);
          if (item.color)
            card.find('.my-word-color').attr('style', `background-color: ${item.color};`);
          else
            card.find('.my-word-color').hide();
          const frValues = Object.values(item.word.fr);
          const langValues = Object.values(item.word[lang]);
          const langKeys = Object.keys(item.word[lang]);
          for (let i = 0; i < langKeys.length; i++) {
            let term = card.find('td.my-cell' + i).children('.my-term');
            term.text(frValues[i]);
            term.attr('title', `${langValues[i]} <span class='my-hint'>(${langKeys[i]})</span>`);
            term.tooltip();
          }
          if (item.examples && item.examples.length > 0) {
            const data = {
              lang: lang,
              title: item.title,
              examples: item.examples
            };
            card.addClass('my-clickable');
            card.click(data, showExamples);
          }
          card.removeAttr('id');
          card.removeClass('d-none');
          card.appendTo(cardContainer);
        });
      });
      cat.removeAttr('id');
      cat.removeClass('d-none');
      cat.appendTo(catContainer);
    });

    // Load section name
    let sectionName = $('#comparison-name');
    sectionName.text(data.comparison.name.fr + ' ');
    sectionName.attr('title', data.comparison.name[lang]);
    sectionName.tooltip();

    // Clear container
    const cardContainer = $('#comparison-container');
    cardContainer.children().remove(':not(.d-none)');

    // Gather templates
    const cardTemplate = cardContainer.find('#comparison-template');
    const groupTemplate = cardContainer.find('#group-template');
    
    $.each(data.comparison.groups, (index, item) => {
      let group = groupTemplate.clone(true);
      if (item.name) {
        let groupName = group.find('#group-name');
        groupName.text(item.name.fr + ' ');
        groupName.attr('title', item.name[lang]);
        groupName.tooltip();
      }
      group.removeAttr('id');
      group.removeClass('d-none');
      group.appendTo(cardContainer);
      
      $.each(item.words, (index, item) => {        
        let card = cardTemplate.clone(true);
        const frValues = Object.values(item.word.fr);
        const langValues = Object.values(item.word[lang]);
        for (let i = 0; i < frValues.length; i++) {
          let cell = card.find('td.my-cell' + i).children();
          cell.html(`<span class='my-term'>${frValues[i]}</span>`);
          cell.attr('title', `${langValues[i]}`);
          cell.tooltip();
        }
        if (item.examples && item.examples.length > 0) {
          const data = {
            lang: lang,
            title: item.title,
            examples: item.examples
          };
          card.addClass('my-clickable');
          card.click(data, showExamples);
        }
        card.removeAttr('id');
        card.removeClass('d-none');
        card.appendTo(cardContainer);
      });
    });
  });
}

export function languageHandler(lang) {
  loadData(lang);
}