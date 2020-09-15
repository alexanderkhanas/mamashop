import _axios from "./_axios";

export const loginRequest = (data) => {
  return _axios.post("/login", data).catch((e) => e.response);
};

export const registerRequest = (data) => {
  return _axios.post("/register", data, {});
};

export const fetchProducts = () => _axios.get("/products");

export const fetchSingleProduct = async (id) => {
  return await _axios.get(`/product/${id}`);
};
