import { ScreenProps } from "@navigation/RootStackNavigation";
import { Button, Text, View } from "react-native";
const HomeScreen = ({navigation,name}:ScreenProps)=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Name {name} From App.tsx(Global Data) </Text>
        <Button
          title="Go to Detail"
          onPress={() => {
            navigation.navigate('Detail',{
              id:24
            });
          }}
        />
      </View>
    )
}
export default HomeScreen;