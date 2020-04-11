let globalSearchHandler = null;

function searchHandler(event) {
  var text = $(event.target).val().toLowerCase();
  if (globalSearchHandler)
    globalSearchHandler(text);
}

let globalSearch = $("#global-search");
globalSearch.on("input", searchHandler);
globalSearch.on("change", searchHandler);

$(".nav-link").click(event => {
  const link = $(event.target);
  const page = link.attr("page");
  $(".nav-item").removeClass("active");
  globalSearchHandler = null;
  globalSearch.val("");
  $("#main").load(`./page/${page}.html`);
  import(`./page/${page}.js`).then(module => {
    globalSearchHandler = module.searchHandler;
  });
  link.parent().addClass("active");
  localStorage.setItem("currentPage", page);
});

let currentPage = localStorage.getItem("currentPage");
if (!currentPage)
  currentPage = "home";
$(`.nav-link[page='${currentPage}']`).click();

$(".lang-selector").click(event => {
  const item = $(event.target);
  const lang = item.attr("lang");
  $("#languageDropdown").text(lang);
  localStorage.setItem("currentLanguage", lang);
});

let currentLanguage = localStorage.getItem("currentLanguage");
if (!currentLanguage)
  currentLanguage = "en";
$(`.lang-selector[lang='${currentLanguage}']`).click();
