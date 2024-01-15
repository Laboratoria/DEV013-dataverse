export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  //-----------------------------------------------------------

  console.log(data);
  const listNames = data.map((item) => item.name);
  const listDesc = data.map((item) => item.shortDescription);

  return {
    names: listNames,
    description: listDesc,
  };
};
