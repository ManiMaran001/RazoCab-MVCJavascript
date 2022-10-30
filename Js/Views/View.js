import icons from 'url:../../img/sprite.svg'
export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0)){
      return this.renderError()
    }
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this._generateMarkup()
    );
  }
  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-rocket"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  renderSpinner(){
    const markup= `
    <div class="spinner">
    <svg class="spinner__loader">
      <use xlink:href="${icons}#icon-loader"></use>
    </svg>
  </div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin",markup)
  }
}
