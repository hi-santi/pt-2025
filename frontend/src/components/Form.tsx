import { useEffect, useState } from "react";
import { recordVehicle, updateVehicle } from "../services/vehicles.service";
import { Vehiculo } from "../types";

function Form ({
    vehiculo, onSuccess
}: { vehiculo: Vehiculo, onSuccess: () => void }) {
    const [marca, setMarca] = useState<string>("");
    const [modelo, setModelo] = useState<string>("");
    const [anio, setAnio] = useState<number>(0);
    const [precio, setPrecio] = useState<number>(0);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = vehiculo
            ? await updateVehicle({
                id: vehiculo.VehiculoID, marca, modelo, anio, precio
            })
            : await recordVehicle({
                marca, modelo, anio, precio
            })

        if (response) {
            onSuccess();
        }
    }

    useEffect(() => {
        if (vehiculo) {
            setMarca(vehiculo.Marca); 
            setModelo(vehiculo.Modelo); 
            setAnio(vehiculo.Anio); 
            setPrecio(vehiculo.Precio); 
        }
    }, [vehiculo])


    return (
        <form onSubmit={handleSubmit}>
            <h2>{vehiculo ? 'Editar' : 'Agregar'} vehiculo</h2>

            <div>
                <label>Marca:</label>
                <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} required />
            </div>
            <div>
                <label>Modelo:</label>
                <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
            </div>
            <div>
                <label>Año:</label>
                <input type="text" value={anio} onChange={(e) => setAnio(Number(e.target.value))} required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="text" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} required />
            </div>

            <button>{vehiculo ? 'Editar' : 'Agregar'}</button>
        </form>
    )
}

export default Form;