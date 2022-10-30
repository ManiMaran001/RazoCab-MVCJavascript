import { BASE_URL } from "./config";
export const state = {
  vehicle: {},
  search: {
    query: {},
    results: [],
    page: 1,
    resultsPerPage: 10,
  },
};

export const loadVehicle = async (id) => {
  try {
    const data = await fetch(`${BASE_URL}/getVehicleById/${id}`);
    const res = await data.json();
    let vehicle = res.data;
    state.vehicle = {
      id: vehicle.id,
      title: vehicle.title,
      image: vehicle.carImage,
      seating:vehicle.seating
    };
  } catch (err) {
   throw err;
  }
};

export const LoadtimeShowVehicle = async () => {
  try {
    const data = await fetch(`${BASE_URL}/getAllVehicle`);
    const res = await data.json();
    state.search.results = res.carDetails.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.carImage,
        seating:rec.seating,
        mileage:rec.mileage,
        tank:rec.tank_capacity,
        fuel:rec.fuel_type[0],
        image:rec.carImage
      };
    });
  } catch (err) {
   throw err;
  }
};

export const loadSearchResults = async (query) => {
  try{
    const data = await fetch(`${BASE_URL}/getSearchTitle?search=${query}`);
    const res = await data.json();
    state.search.results = res.data.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        image: rec.carImage,
        seating:rec.seating
      };
    });
  }
  catch(err){
    throw err;
  }
};

export const getSearchResultSPerPage = (page = state.search.page) => {
  state.search.page=page
  //set per page for 10 counts
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  console.log(state.search.results.slice(start, end));
  return state.search.results.slice(start, end);
};
