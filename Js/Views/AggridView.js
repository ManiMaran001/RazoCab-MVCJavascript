import { Grid } from 'ag-grid-community';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import View from './View';
class AggridView extends View{
    _parentElement=document.getElementById("myGrid");

    addHandler(handler){
        window.addEventListener('load',function(){
            handler();
        })
    }
    _generateMarkup(){
         new Grid(this._parentElement,this._data)
         return ''
    }
}
export default new AggridView()