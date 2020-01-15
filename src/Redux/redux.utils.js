export const convertObjectToIngredientsList = foodData => {
  const transformedData = foodData.outputs[0].data.concepts;
  return transformedData;
};

export const convertObjectToImageUrl = foodData => {
  const transformedData = foodData.outputs[0].input.data.image.url;
  return transformedData;
};
