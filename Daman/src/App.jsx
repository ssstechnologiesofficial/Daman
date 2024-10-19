// import Login from './Login_registration/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-secondary bg-slate-100">
        <div className="lg:w-6/12 xl:w-[400px] sm:w-8/12 w-full min-h-screen border shadow-md shadow-zinc-300 relative">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
