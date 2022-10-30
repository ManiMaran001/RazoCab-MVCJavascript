import * as model from "../model";
import SearchView from "../Views/SearchView";
import VehicleResultsView from "../Views/VehicleResultsView";
import VehicleView from "../Views/VehicleView";
import PaginationView from "../Views/PaginationView";

const ControlVehicle = async () => {
  const id = window.location.hash.slice(1);
  if (!id) return;
  VehicleView.renderSpinner();
  await model.loadVehicle(id);
  VehicleView.render(model.state.vehicle);
};

const ControllSearchResults = async () => {
  const query = SearchView.getQuery();
  VehicleResultsView.renderSpinner();
  await model.loadSearchResults(query);
  //VehicleResultsView.render(model.state.search.results);
  VehicleResultsView.render(model.getSearchResultSPerPage());
  //render inital pafination button
  PaginationView.render(model.state.search);

};

const LoadTimeShowResults = async () => {
  VehicleResultsView.renderSpinner();
  await model.LoadtimeShowVehicle();
  VehicleResultsView.render(model.getSearchResultSPerPage());
  PaginationView.render(model.state.search);
};

const controlPagination = (pgnum) => {
  VehicleResultsView.render(model.getSearchResultSPerPage(pgnum));
  PaginationView.render(model.state.search);
};

//publisher subscriber pattern need to start a program from here
const init = function () {
  SearchView.PageLoadHandler(LoadTimeShowResults);
  SearchView.addSearchHandler(ControllSearchResults);
  VehicleView.addLoadHandler(ControlVehicle);
  PaginationView.addHandlerClick(controlPagination);
  document.querySelector(".header__icon").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.remove("navigation--active")
  })
  document.querySelector(".navigation__close").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.add("navigation--active")
  })
};
init();
