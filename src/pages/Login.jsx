import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'test@test.com' && password === '123456') {
      navigate('/projects');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          Field Manager
        </h1>
        <h2 className="text-xl text-center text-gray-600 dark:text-gray-300 mb-8">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-3 mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-3 mt-2 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-700 text-white p-3 rounded mt-4 hover:bg-blue-700 dark:hover:bg-blue-800 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
          Test credentials: test@test.com / 123456
        </p>
      </div>
    </div>
  );
}

export default Login;
