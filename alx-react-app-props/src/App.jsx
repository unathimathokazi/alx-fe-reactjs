import { UserProvider } from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserProvider>
      {/* other components */}
      <UserProfile />
    </UserProvider>
  );
}

export default App;
