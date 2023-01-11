import { $authHost, $host } from ".";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};
export const createBrand = async (bradn) => {
  const { data } = await $authHost.post("api/brand", bradn);
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");

  return data;
};
export const createCar = async (car) => {
  const { data } = await $authHost.post("api/car", car);
  return data;
};
export const fetchCars = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/car", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });

  return data;
};
export const fetchOneCars = async (id) => {
  const { data } = await $host.get("api/car/" + id);

  return data;
};
