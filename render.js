function renderList() {
  fetch('list.mustache')
    .then((response) => response.text())
    .then((template) => {
      fetch('systems.json')
        .then((response) => response.text())
        .then((systems) => {
          systems = JSON.parse(systems);
          systems.systems.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase());
          const rendered = Mustache.render(template, systems);
          document.getElementById('list-target').innerHTML = rendered;
        });
    });
}
