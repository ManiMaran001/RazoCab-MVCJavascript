import AggridView from "../Views/AggridView";
import * as model from '../model';


class ImageCellRender {
  init(params) {
    console.log(params)
    this._parentElement=document.createElement("span")
    this._parentElement.innerHTML = `<img style="width:50%; height:100%; border-radius:50%; display:flex;align-tems:center;" src="${params.data.image}" />`;
  }

  getGui() {
    return this._parentElement;
  }

  refresh(params) {
    return false;
  }
}

const controlAggrid = async() => {
  AggridView.renderSpinner();
  await model.LoadtimeShowVehicle();
  var gridOptions = {
    columnDefs: [
      {headerName:"Car Image",field:"image" ,cellRenderer:ImageCellRender},
      { headerName: "Car Name", field: "title",},
      { headerName: "Seating", field: "seating",width:100 },
      { headerName: "Tank Capacity", field: "tank",width:150 },
      { headerName: "Mileage", field: "mileage",width:150 },
      { headerName: "Fuel Type", field: "fuel",width:150 },
    ],
rowData: model.state.search.results,
rowHeight: 80,
paginationAutoPageSize: true,
pagination:true
}

AggridView.render(gridOptions);
};
//publisher subscriber pattern need to start a program from here
const init = function () {
  AggridView.addHandler(controlAggrid);
  AggridView.initHandler();
};
init();

