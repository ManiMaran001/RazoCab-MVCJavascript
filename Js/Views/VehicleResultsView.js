import View from "./View";

class VehicleResultsView extends View {
  _parentElement = document.querySelector(".board__list");
  _errorMessage="vehicle not found";
  _generateViewMarkup(rec) {
    console.log(rec)
    return `
        <a href=#${rec.id} class="board__link">
                <li class="board__item">
                  <figure class="board__shape">
                    <img src=${rec.image} class="board__logo"/>
                  </figure>
                  <div class="board__box">
                    <p class="board__box--p1">${rec.title}</p>
                    <p class="board__box--p2">${rec.seating}</p>
                  </div>
                </li>
              </a>
        `;
  }
  _generateMarkup() {
    return this._data.map(this._generateViewMarkup).join("");
  }
}

export default new VehicleResultsView();
