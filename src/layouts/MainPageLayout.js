import { Outlet } from 'react-router-dom';

const MainPageLayout = () => {
  return (
    <div>
      {/* header */}
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default MainPageLayout;
