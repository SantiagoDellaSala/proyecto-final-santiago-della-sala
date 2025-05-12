import React from 'react';

function ErrorPage({ error }) {
  return (
    <div className="container mt-5">
      <h1>¡Vaya! Algo salió mal.</h1>
      <p>{error || 'No pudimos cargar la información en este momento. Por favor, intenta nuevamente más tarde.'}</p>
    </div>
  );
}

export default ErrorPage;
