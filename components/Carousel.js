import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://cdn.dribbble.com/users/5190261/screenshots/11808866/media/4b7c13fe01afdfd905475017048030dc.png?resize=1000x750&vertical=center",
    "https://cdn.dribbble.com/users/3366206/screenshots/14693716/media/775782b7c8d0cfd9c7c02dbb8e8c36f2.jpg?resize=1000x750&vertical=center",
    "https://cdn.dribbble.com/users/1855626/screenshots/3750468/media/45d0388accc8ede23372e7884efffbc7.jpg?resize=800x600&vertical=center",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
        autoplayInterval = {2000}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
