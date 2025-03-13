export const getVehicles = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/vehiculos`, {
    method: 'get',
    headers: {
      'x-api-key': process.env.REACT_APP_API_KEY
    }
  })
  
  if (response) {
    return response.json();
  }
}

export const recordVehicle = async ({
  marca, modelo, anio, precio
}) => {
  const data = { Marca: marca, Modelo: modelo, Anio: anio, Precio: precio };
  console.log("data to record", data)
  const response = await fetch(`${process.env.REACT_APP_URL}/vehiculos`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify(data)
  });

  console.log("response add vechicle", response)
  
  if (response) {
    return response.json();
  }
}
export const updateVehicle = async ({
  id, marca, modelo, anio, precio
}) => {

  const response = await fetch(`${process.env.REACT_APP_URL}/vehiculos/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({ Marca: marca, Modelo: modelo, Anio: anio, Precio: precio })
  });
  
  if (response) {
    return response.json();
  }
}