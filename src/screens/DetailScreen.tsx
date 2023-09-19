import { RootStackParamList } from "@navigation/RootStackNavigation";
import { StackScreenProps } from "@react-navigation/stack/lib/typescript/src/types";
import { Button, Text, View } from "react-native";

const DetailScreen=({route}:StackScreenProps<RootStackParamList>)=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        {/* <Text>Name {name} & Age {age} From App.tsx(Global Data) </Text> */}
        <Text>itemId From HomeScreen (ScreenData): {JSON.stringify(route.params?.id)}</Text>
        <Button
          title="Go to Details... again"
         />
      </View>
    );
  }
  export default DetailScreen