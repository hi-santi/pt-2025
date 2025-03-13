import { Vehiculo } from "../types"
import Icons from "./Icons"

function List ({
  vehiculos,
  setVehiculo
}: { vehiculos: Vehiculo[], setVehiculo: (vehicle: Vehiculo) => void }) {

  return (
    <div className="app-card">
      <h2>Lista de vehiculos</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Precio</th>
            <th className="tr">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => 
            <tr key={vehiculo.VehiculoID}>
              <td>{vehiculo.VehiculoID}</td>
              <td>{vehiculo.Marca}</td>
              <td>{vehiculo.Modelo}</td>
              <td>{vehiculo.Anio}</td>
              <td>{vehiculo.Precio}</td>
              <td className="tr">
                <button onClick={() => {
                  setVehiculo(vehiculo);
                }}>
                  <Icons name="edit" />
                </button>
                <button>
                  <Icons name="delete" />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default List