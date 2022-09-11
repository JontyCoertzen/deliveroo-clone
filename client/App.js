import { store } from "./store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ headerShown: false, presentation: "modal" }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{ headerShown: false, presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ headerShown: false, presentation: "fullScreenModal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
