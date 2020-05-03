// No global variables :)
{
  let globalSearchHandler = null;
  let globalLanguageHandler = null;

  function searchHandler(event) {
    var text = $(event.target).val().toLowerCase();
    if (globalSearchHandler)
      globalSearchHandler(text);
  }

  let globalSearch = $("#global-search");
  globalSearch.on("input", searchHandler);
  globalSearch.on("change", searchHandler);

  let globalLanguage = $("#global-language");

  $(".nav-link").click(event => {
    const link = $(event.target);
    const page = link.attr("page");
    $(".nav-item").removeClass("active");
    globalSearchHandler = null;
    globalSearch.val("");
    $("#main").load(`./page/${page}.html`);
    import(`./page/${page}.js`).then(module => {
      globalSearchHandler = module.searchHandler;
      globalLanguageHandler = module.languageHandler;

      if (globalSearchHandler) {
        globalSearch.show();
      } else {
        globalSearch.hide();
      }
        
      if (globalLanguageHandler) {
        globalLanguage.show();
        var lang = globalLanguage.text();
        if (lang)
          globalLanguageHandler(lang);
      } else {
        globalLanguage.hide();
      }
    });
    link.parent().addClass("active");
    localStorage.setItem("currentPage", page);
  });

  $(".my-lang-selector").click(event => {
    const item = $(event.target);
    const lang = item.attr("lang");
    globalLanguage.text(lang);
    localStorage.setItem("currentLanguage", lang);
    if (globalLanguageHandler)
      globalLanguageHandler(lang);
  });
}

// Activate current page
{
  let currentPage = localStorage.getItem("currentPage");
  if (!currentPage)
    currentPage = "orthography";
  $(`.nav-link[page='${currentPage}']`).click();
}

// Activate current language
{
  let currentLanguage = localStorage.getItem("currentLanguage");
  if (!currentLanguage)
    currentLanguage = "en";
  $(`.my-lang-selector[lang='${currentLanguage}']`).click();
}
