import { Outlet } from 'react-router-dom';
import { FONT } from '../../styles';

const MainLayout = () => {
  return (
    <div className={`${FONT.contentText} bg-app-bg-color`}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
