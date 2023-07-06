import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./productsContext";
import reducer from "../reducers/filterReducer";
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../action/actions";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  grid: true,
  sorting: "low",
  filter: {
    search: "",
    category: "all",
    company: "all",
    color: "all",
    min: 0,
    max: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    console.log("first");
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sorting, state.filter]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setColumnView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const changeSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const handleFilters = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    if (name === "category") {
      val = e.target.textContent;
    }
    if (name === "color") {
      val = e.target.dataset.color;
    }
    if (name === "price") {
      val = Number(val);
    }
    if (name === "shipping") {
      val = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, val } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setColumnView,
        setGridView,
        changeSort,
        handleFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
