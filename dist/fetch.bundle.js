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
        <a href="https://www.eneba.com${game.link.replace('https//i4pg.github.io')}">
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
    results.innerHTML = `<div class="is-danger notification">Turn on Cros-Everywhere</div>`
    console.error(`Fetch failed: \${error.message}`);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/fetch.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx1a0JBQXVrQixTQUFTO0FBQ2hsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsU0FBUyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QyxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDJDQUEyQztBQUNuRjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbjhmY2gvLi9zcmMvZmV0Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hBUEkoZ2FtZU5hbWUpIHtcbiAgZ2FtZU5hbWUgPSBnYW1lTmFtZS5yZXBsYWNlKC8gL2csIFwiJTIwXCIpO1xuICBjb25zdCBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICBjb25zdCB0YXJnZXRVcmwgPSBgaHR0cHM6Ly93d3cuZW5lYmEuY29tL3N0b3JlL2FsbD9kcm1zW109eGJveCZlbmJfY2FtcGFpZ249TWFpbiUyMFNlYXJjaCZlbmJfY29udGVudD1zZWFyY2glMjBkcm9wZG93biUyMC0lMjBjYXRlZ29yaWVzJmVuYl9tZWRpdW09bGluayZlbmJfc291cmNlPWh0dHBzJTNBJTJGJTJGd3d3LmVuZWJhLmNvbSUyRiZlbmJfdGVybT0mcGFnZT0xJnJlZ2lvbnNbXT1hcmdlbnRpbmEmcmVnaW9uc1tdPWFzaWEmcmVnaW9uc1tdPWJyYXppbCZyZWdpb25zW109Y2FuYWRhJnJlZ2lvbnNbXT1ldXJvcGUmcmVnaW9uc1tdPWZyYW5jZSZyZWdpb25zW109Z2VybWFueSZyZWdpb25zW109Z2xvYmFsJnJlZ2lvbnNbXT1pc3JhZWwmcmVnaW9uc1tdPWxhdGFtJnJlZ2lvbnNbXT1tZXhpY28mcmVnaW9uc1tdPXNhdWRpX2FyYWJpYSZyZWdpb25zW109dHVya2V5JnJlZ2lvbnNbXT11bml0ZWRfYXJhYl9lbWlyYXRlcyZyZWdpb25zW109amFwYW4mcmVnaW9uc1tdPWF1c3RyYWxpYSZyZWdpb25zW109dW5pdGVkX2tpbmdkb20mcmVnaW9uc1tdPXVuaXRlZF9zdGF0ZXMmc29ydEJ5PVBSSUNFX0RFU0MmdGV4dD0ke2dhbWVOYW1lfSZ0eXBlc1tdPWdhbWVgO1xuICBjb25zb2xlLmxvZyh0YXJnZXRVcmwpXG4gIGZldGNoRGF0YShwcm94eVVybCwgdGFyZ2V0VXJsKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHByb3h5VXJsLCB0YXJnZXRVcmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHByb3h5VXJsICsgdGFyZ2V0VXJsKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3I6IFxcJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTsgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NIHBhcnNlclxuICAgIGxldCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpOyAvLyBQYXJzZSB0aGUgdGV4dFxuXG4gICAgLy8gWW91IGNhbiBub3cgZXZlbiBzZWxlY3QgcGFydCBvZiB0aGF0IGh0bWwgYXMgeW91IHdvdWxkIGluIHRoZSByZWd1bGFyIERPTVxuICAgIHZhciByZXMgPSBkb2MucXVlcnlTZWxlY3RvcignLkpaQ0hfdCcpXG4gICAgbGV0IGdhbWVzID0gW11cblxuICAgIEFycmF5LmZyb20ocmVzLmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lID0ge1xuICAgICAgICBpbWc6IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5zcmMsXG4gICAgICAgIG5hbWU6IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQsXG4gICAgICAgIHJlZ2lvbjogZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLnRpdGxlLFxuICAgICAgICBsaW5rOiBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLmhyZWYsXG4gICAgICAgIHByaWNlOiBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzJdLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuWzJdLnRleHRDb250ZW50LnJlcGxhY2UoJ+KCrCcsICcnKSAqIDQuMTMsXG4gICAgICB9XG4gICAgICBnYW1lcy5wdXNoKGdhbWUpXG4gICAgfSk7XG5cbiAgICBnYW1lcy5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgY29uc3QgaHRtbFN0cmluZyA9IGBcbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlIGlzLTRieTVcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2dhbWUuaW1nfVwiIGFsdD1cIiR7Z2FtZS5uYW1lfVwiPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy00XCI+JHtnYW1lLm5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPiR7Z2FtZS5yZWdpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZW5lYmEuY29tJHtnYW1lLmxpbmsucmVwbGFjZSgnaHR0cHMvL2k0cGcuZ2l0aHViLmlvJyl9XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2VzcyBpcy1mdWxsd2lkdGhcIj5cblNBUiAke2dhbWUucHJpY2UudG9GaXhlZCgyKX1cbjwvYnV0dG9uPiBcbiAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgXG4gICAgICByZXN1bHRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWxTdHJpbmcpXG4gICAgfVxuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXN1bHRzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaXMtZGFuZ2VyIG5vdGlmaWNhdGlvblwiPlR1cm4gb24gQ3Jvcy1FdmVyeXdoZXJlPC9kaXY+YFxuICAgIGNvbnNvbGUuZXJyb3IoYEZldGNoIGZhaWxlZDogXFwke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==