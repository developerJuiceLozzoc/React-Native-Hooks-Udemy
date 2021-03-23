import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen"
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/RandoColorScreen"
import SquareScreen from "./src/screens/ColorAdjuster"
import TextInputScreen from "./src/screens/TextInput"
import BoxScreen from "./src/screens/BoxScreen"


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageList: ImageScreen,
    Counter: CounterScreen,
    RandoColor: ColorScreen,
    Adjuster: SquareScreen,
    TInput: TextInputScreen,
    Layouts: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
