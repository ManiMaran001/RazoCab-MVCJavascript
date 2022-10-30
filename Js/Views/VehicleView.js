import View from "./View";

class VehicleView extends View {
  _parentElement = document.querySelector(".carsboard__content");
  _errorMessage="vehicle not found";
  addLoadHandler(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return `
        <div class="vehicle-board">
        <figure class="vehicle-board__fig">
          <img src=${this._data.image} alt="pic one" class="vehicle-board__img">
          <h1 class="vehicle-board__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>
      </div>
        `;
  }
}

export default new VehicleView();
