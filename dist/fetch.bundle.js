"use strict";
(self["webpackChunkn8fch"] = self["webpackChunkn8fch"] || []).push([["fetch"],{

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAPI": () => (/* binding */ fetchAPI)
/* harmony export */ });
const results = document.getElementById("results")

function fetchAPI(gameName) {
  gameName = gameName.replace(/ /g, "%20");
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = `https://www.eneba.com/store/all?drms[]=xbox&enb_campaign=Main%20Search&enb_content=search%20dropdown%20-%20categories&enb_medium=link&enb_source=https%3A%2F%2Fwww.eneba.com%2F&enb_term=&page=1&regions[]=argentina&regions[]=asia&regions[]=brazil&regions[]=canada&regions[]=europe&regions[]=france&regions[]=germany&regions[]=global&regions[]=israel&regions[]=latam&regions[]=mexico&regions[]=saudi_arabia&regions[]=turkey&regions[]=united_arab_emirates&regions[]=japan&regions[]=australia&regions[]=united_kingdom&regions[]=united_states&sortBy=PRICE_DESC&text=${gameName}&types[]=game`;
  console.log(targetUrl)
  fetchData(proxyUrl, targetUrl);
}

async function fetchData(proxyUrl, targetUrl) {
  try {
    const response = await fetch(proxyUrl + targetUrl);
    if (!response.ok) {
      throw new Error(`HTTP error: \${response.status}`);
    }
    const data = await response.text();
    let parser = new DOMParser(); // Initialize the DOM parser
    let doc = parser.parseFromString(data, "text/html"); // Parse the text

    // You can now even select part of that html as you would in the regular DOM
    var res = doc.querySelector('.JZCH_t')
    let games = []

    Array.from(res.children).forEach(element => {
      if (element.firstElementChild.children[2].firstElementChild.firstElementChild.children[2] === undefined) {
        return;
      }
      const game = {
        img: element.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.src,
        name: element.firstElementChild.children[1].firstElementChild.firstElementChild.firstElementChild.textContent,
        region: element.firstElementChild.children[1].firstElementChild.lastElementChild.title,
        link: element.firstElementChild.children[2].firstElementChild.href,
        price: element.firstElementChild.children[2].firstElementChild.firstElementChild.children[2].textContent.replace('€', '') * 4.13,
      }
      games.push(game)
    });

    games.forEach(game => {
      const htmlString = `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by5">
        <img src="${game.img}" alt="${game.name}">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${game.name}</p>
          <p class="subtitle is-5">${game.region}</p>
        </div>
      </div>

      <div class="content">
        <a href="https://www.eneba.com${game.link.replace('http//localhost:8080')}">
        <button class="button is-success is-fullwidth">
SAR ${game.price.toFixed(2)}
</button> 
  </a>
      </div>
    </div>
  </div>
  `
      results.insertAdjacentHTML('afterbegin', htmlString)
    }
    )
  } catch (error) {
    console.error(`Fetch failed: \${error.message}`);
  }
}




// function resultsPulishing() {
//   Array.from(results.children).forEach(element => {
//     const card = element.firstElementChild
//     card.classList.add("card")

//     const cardImage = card.firstElementChild
//     cardImage.classList.add("card-image")

//     const image = cardImage.firstElementChild
//     image.classList.add("image is-4by3")

//     element.lastElementChild.remove()
//   });
// }


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx1a0JBQXVrQixTQUFTO0FBQ2hsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsU0FBUyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QyxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDBDQUEwQztBQUNsRjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uOGZjaC8uL3NyYy9mZXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEFQSShnYW1lTmFtZSkge1xuICBnYW1lTmFtZSA9IGdhbWVOYW1lLnJlcGxhY2UoLyAvZywgXCIlMjBcIik7XG4gIGNvbnN0IHByb3h5VXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XG4gIGNvbnN0IHRhcmdldFVybCA9IGBodHRwczovL3d3dy5lbmViYS5jb20vc3RvcmUvYWxsP2RybXNbXT14Ym94JmVuYl9jYW1wYWlnbj1NYWluJTIwU2VhcmNoJmVuYl9jb250ZW50PXNlYXJjaCUyMGRyb3Bkb3duJTIwLSUyMGNhdGVnb3JpZXMmZW5iX21lZGl1bT1saW5rJmVuYl9zb3VyY2U9aHR0cHMlM0ElMkYlMkZ3d3cuZW5lYmEuY29tJTJGJmVuYl90ZXJtPSZwYWdlPTEmcmVnaW9uc1tdPWFyZ2VudGluYSZyZWdpb25zW109YXNpYSZyZWdpb25zW109YnJhemlsJnJlZ2lvbnNbXT1jYW5hZGEmcmVnaW9uc1tdPWV1cm9wZSZyZWdpb25zW109ZnJhbmNlJnJlZ2lvbnNbXT1nZXJtYW55JnJlZ2lvbnNbXT1nbG9iYWwmcmVnaW9uc1tdPWlzcmFlbCZyZWdpb25zW109bGF0YW0mcmVnaW9uc1tdPW1leGljbyZyZWdpb25zW109c2F1ZGlfYXJhYmlhJnJlZ2lvbnNbXT10dXJrZXkmcmVnaW9uc1tdPXVuaXRlZF9hcmFiX2VtaXJhdGVzJnJlZ2lvbnNbXT1qYXBhbiZyZWdpb25zW109YXVzdHJhbGlhJnJlZ2lvbnNbXT11bml0ZWRfa2luZ2RvbSZyZWdpb25zW109dW5pdGVkX3N0YXRlcyZzb3J0Qnk9UFJJQ0VfREVTQyZ0ZXh0PSR7Z2FtZU5hbWV9JnR5cGVzW109Z2FtZWA7XG4gIGNvbnNvbGUubG9nKHRhcmdldFVybClcbiAgZmV0Y2hEYXRhKHByb3h5VXJsLCB0YXJnZXRVcmwpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEocHJveHlVcmwsIHRhcmdldFVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJveHlVcmwgKyB0YXJnZXRVcmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvcjogXFwke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpOyAvLyBJbml0aWFsaXplIHRoZSBET00gcGFyc2VyXG4gICAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L2h0bWxcIik7IC8vIFBhcnNlIHRoZSB0ZXh0XG5cbiAgICAvLyBZb3UgY2FuIG5vdyBldmVuIHNlbGVjdCBwYXJ0IG9mIHRoYXQgaHRtbCBhcyB5b3Ugd291bGQgaW4gdGhlIHJlZ3VsYXIgRE9NXG4gICAgdmFyIHJlcyA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuSlpDSF90JylcbiAgICBsZXQgZ2FtZXMgPSBbXVxuXG4gICAgQXJyYXkuZnJvbShyZXMuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblsyXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblsyXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdhbWUgPSB7XG4gICAgICAgIGltZzogZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnNyYyxcbiAgICAgICAgbmFtZTogZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCxcbiAgICAgICAgcmVnaW9uOiBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQudGl0bGUsXG4gICAgICAgIGxpbms6IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuaHJlZixcbiAgICAgICAgcHJpY2U6IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQucmVwbGFjZSgn4oKsJywgJycpICogNC4xMyxcbiAgICAgIH1cbiAgICAgIGdhbWVzLnB1c2goZ2FtZSlcbiAgICB9KTtcblxuICAgIGdhbWVzLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICBjb25zdCBodG1sU3RyaW5nID0gYFxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XG4gICAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2UgaXMtNGJ5NVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Z2FtZS5pbWd9XCIgYWx0PVwiJHtnYW1lLm5hbWV9XCI+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTRcIj4ke2dhbWUubmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZSBpcy01XCI+JHtnYW1lLnJlZ2lvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lbmViYS5jb20ke2dhbWUubGluay5yZXBsYWNlKCdodHRwLy9sb2NhbGhvc3Q6ODA4MCcpfVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3MgaXMtZnVsbHdpZHRoXCI+XG5TQVIgJHtnYW1lLnByaWNlLnRvRml4ZWQoMil9XG48L2J1dHRvbj4gXG4gIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYFxuICAgICAgcmVzdWx0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sU3RyaW5nKVxuICAgIH1cbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRmV0Y2ggZmFpbGVkOiBcXCR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxufVxuXG5cblxuXG4vLyBmdW5jdGlvbiByZXN1bHRzUHVsaXNoaW5nKCkge1xuLy8gICBBcnJheS5mcm9tKHJlc3VsdHMuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgY29uc3QgY2FyZCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGRcbi8vICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpXG5cbi8vICAgICBjb25zdCBjYXJkSW1hZ2UgPSBjYXJkLmZpcnN0RWxlbWVudENoaWxkXG4vLyAgICAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWltYWdlXCIpXG5cbi8vICAgICBjb25zdCBpbWFnZSA9IGNhcmRJbWFnZS5maXJzdEVsZW1lbnRDaGlsZFxuLy8gICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZSBpcy00YnkzXCIpXG5cbi8vICAgICBlbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKClcbi8vICAgfSk7XG4vLyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=