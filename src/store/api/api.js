import _axios from "./_axios";

export const fetchSingleProduct = async (id) => {
  return await _axios.get(`/product/${id}`);
};
