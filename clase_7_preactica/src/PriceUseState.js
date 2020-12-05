import React, { useState } from 'react';

import './style.css';

//? useState, persiste el estado entre re-renders y lanza un re-render cuando el estado cambia

const PriceUseState = () => {
  const [precio, setPrecio] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const handlerPrecio = (evento) => {
    console.dir(evento.target);
    setPrecio(evento.target.value);
  };
  const handlerPorcentaje = (e) => setPorcentaje(e.target.value);

  const componente = (
    <div>
      <div className="counter">
        <div>
          <input type="number" value={precio} onChange={handlerPrecio} />
        </div>

        <div>
          <input
            type="number"
            value={porcentaje}
            onChange={handlerPorcentaje}
          />
        </div>

        <div className="number-counter">
          {parseFloat((precio * porcentaje) / 100) + parseFloat(precio)}
        </div>
      </div>
    </div>
  );
  console.log(componente);
  return componente;
};

export default PriceUseState;

// val ? true : fals
