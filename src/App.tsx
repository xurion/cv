import { CV } from './pages';
import { getConfig } from './Config';
import { Meta } from './components';

export function App() {
  const config = getConfig();
  const fullName = `${config.forenames} ${config.surname}`;
  return (
    <>
      <Meta title={`${fullName} - ${config.profession}`} />
      <CV profileImage="me.png" {...config} />
    </>
  );
}
