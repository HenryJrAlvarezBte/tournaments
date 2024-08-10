import React, { useState } from 'react';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const handleToggleModal = (register: boolean) => {
    setIsRegister(register);
    setShowModal(!showModal);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // RECORDAR PONER ACA LOGICA DE AUTENTICACION Y EL ENVIO DE CONFIRMACION DEL CORREO
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <header className="flex justify-between items-center p-6 bg-gray-900 shadow-lg w-full">
        <h1 className="text-3xl font-bold tracking-wider text-indigo-500">GameTournaments</h1>
        <div>
          <button
            className="mr-6 text-sm font-semibold transition-colors duration-300 hover:text-indigo-400"
            onClick={() => handleToggleModal(false)}
          >
            Login
          </button>
          <button
            className="text-sm font-semibold transition-colors duration-300 hover:text-indigo-400"
            onClick={() => handleToggleModal(true)}
          >
            Register
          </button>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[calc(100vh-96px)] w-full px-4">
        <div className="text-center max-w-3xl w-full">
          <h2 className="text-4xl font-extrabold text-indigo-500 mb-4">Bienvenido a GameTournaments</h2>
          <p className="text-lg text-gray-300 mb-8">¡Únete a los mejores torneos de videojuegos y demuestra tu habilidad!</p>
          <button
            className="px-6 py-3 bg-indigo-600 text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 w-full sm:w-auto"
            onClick={() => handleToggleModal(true)}
          >
            ¡Regístrate Ahora!
          </button>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
            <h2 className="text-center text-3xl font-bold text-indigo-500 mb-6">
              {isRegister ? 'Crea tu cuenta' : 'Inicia sesión'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray-300">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="tucorreo@example.com"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300">Usuario o ID</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nombre de usuario o ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Contraseña</label>
                <input
                  type="password"
                  required
                  className="mt-1 w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                {isRegister ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </form>
            <button
              className="mt-4 text-sm underline text-gray-400 hover:text-gray-300"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;