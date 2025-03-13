import { useEffect, useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import { getVehicles } from './services/vehicles.service';

import "./styles/main.scss"

function App() {
  const [vehiculos, setVehiculos] = useState([]);
  const [vehiculo, setVehiculo] = useState<any | null>(null);

  useEffect(() => {
    fetchVehicles();
  }, [])

  const fetchVehicles = async () => {
    setVehiculos(await getVehicles())
  }

  const handleSuccess = () => {
    setVehiculo(null);
    fetchVehicles();
  }

  return (
    <div className="App">
      <header className="app-header">
        <p className='app-container'>
          Prueba técnica frontend Santiago Meneses L
        </p>
      </header>

      <div className='app-container'>
        <List vehiculos={vehiculos} setVehiculo={setVehiculo} />
        <Form vehiculo={vehiculo} onSuccess={handleSuccess} />
      </div>
      
    </div>
  );
}

export default App;
