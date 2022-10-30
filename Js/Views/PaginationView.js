import View from "./View";
import icons from 'url:../../img/sprite.svg';

class PaginationView extends View{
    _parentElement=document.querySelector(".pagination");
    addHandlerClick=(handler)=>{
        //going to do event delegation
    this._parentElement.addEventListener("click",function(e){
            const btn=e.target.closest(".btn--inline");
            console.log(btn)
            const page=+btn.dataset.goto;
            handler(page)
        })
    }
    _generateMarkup(){
        console.log(this._data)
        const current_page=this._data.page;
        const NumofPage=Math.ceil(this._data.results.length / this._data.resultsPerPage)
        console.log(current_page,NumofPage)
        //first page and have another page
        if(current_page===1 && NumofPage>1){
            return this._generateNextButton(current_page)
        }
        if(NumofPage==current_page && NumofPage>1){
            return this._generatePreviousButton(current_page)
        }
        if(current_page < NumofPage){
            return [this._generatePreviousButton(current_page),this._generateNextButton(current_page)]
        }
        return ""
        //last page
        //other or current page
    }
    _generateNextButton(current_page){
        return `
        <button data-goto=${current_page + 1} class="btn--inline pagination__btn--next">
        <span>page ${current_page + 1}</span>
        <svg>
          <use xlink:href="${icons}#icon-arrow-long-right"></use>
          </svg>
      </button>
        `
    }
    _generatePreviousButton(current_page){
        return `
        <button data-goto=${current_page - 1} class="btn--inline pagination__btn--previous">
                <svg>
                  <use xlink:href="${icons}#icon-arrow-long-left"></use>
                  </svg>
                  <span>page ${current_page - 1}</span>
              </button>

        `
    }
}
export default new PaginationView()