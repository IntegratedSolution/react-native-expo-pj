import * as React from 'react';
import RootStackNavigation from './src/navigation/RootStackNavigation';
export type GlobalProps= {
  name: string;
  age: number;
}
const App=()=> {
  const name = "Arrkar";
  const globalProps : GlobalProps = {
    name,
    age:300
  }
  return (
    <RootStackNavigation globalProps={globalProps}/>
  );
}
export default App;
