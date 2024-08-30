import axios from "axios";

export const fetchTrucksById = async (id) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
