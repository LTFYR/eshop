import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../action/actions";

const FilterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let max_price = action.payload.map((mp) => mp.price);
    max_price = Math.max(...max_price);
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filter: {
        ...state.filter,
        max: max_price,
        price: max_price,
      },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid: true };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sorting: action.payload,
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sorting, filteredProducts } = state;
    console.log(filteredProducts);
    let updatedProducts = [...filteredProducts];
    console.log(updatedProducts);
    if (sorting === "low") {
      updatedProducts = updatedProducts.sort(
        (high, low) => high.price - low.price
      );
    }
    if (sorting === "high") {
      updatedProducts = updatedProducts.sort(
        (low, high) => high.price - low.price
      );
    }
    if (sorting === "a") {
      updatedProducts = updatedProducts.sort((a, z) => {
        return a.name.localeCompare(z.name);
      });
    }
    if (sorting === "z") {
      updatedProducts = updatedProducts.sort((a, z) => {
        return z.name.localeCompare(a.name);
      });
    }
    return { ...state, filteredProducts: updatedProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, val } = action.payload;
    return {
      ...state,
      filter: { ...state.filter, [name]: val },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    let temporary = [...allProducts];

    const { search, category, company, color, min, max, price, shipping } =
      state.filter;

    if (search) {
      temporary = temporary.filter((tempproduct) => {
        return tempproduct.name
          .toLowerCase()
          .startsWith(/*I could use includes() method here too.*/ search);
      });
    }
    if (category !== "all") {
      temporary = temporary.filter((p) => {
        return p.category === category;
      });
    }
    if (company !== "all") {
      temporary = temporary.filter((product) => {
        return product.company === company;
      });
    }
    if (color !== "all") {
      temporary = temporary.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    if (price) {
      temporary = temporary.filter((product) => {
        return product.price <= price;
      });
    }
    if (shipping) {
      temporary = temporary.filter((product) => {
        return product.shipping === true;
      });
    }
    return { ...state, filteredProducts: temporary };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filter: {
        ...state.filter,
        search: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filter.max,
        shipping: false,
      },
    };
  }
  throw new Error("Error happeeeeeeneed :)");
};

export default FilterReducer;
