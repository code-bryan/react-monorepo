import CoreApp from 'core/src/pages/app';
import { Platform } from 'react-native';

export default function App() {
  return <CoreApp platform={Platform.OS} />
}