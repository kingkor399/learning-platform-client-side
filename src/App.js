import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
    
  );
}

export default App;
