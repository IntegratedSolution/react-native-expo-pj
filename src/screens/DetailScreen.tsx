import { Button, Text, View } from "react-native";
import { ScreenProps } from "../navigation/RootStackNavigation";

const DetailScreen=({route,name,age}:ScreenProps)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Name {name} & Age {age} From App.tsx(Global Data) </Text>
        <Text>itemId From HomeScreen (ScreenData): {JSON.stringify(route.params?.id)}</Text>
        <Button
          title="Go to Details... again"
         />
      </View>
    );
  }
  export default DetailScreen