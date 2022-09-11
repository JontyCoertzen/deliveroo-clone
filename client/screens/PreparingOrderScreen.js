import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] items-center justify-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 max-w-full"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="#fff" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
