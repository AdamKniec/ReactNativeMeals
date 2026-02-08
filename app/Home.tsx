import MealItemGridType from "@/components/MealTypeGridItem/MealTypeGridItem";
import { SAMPLE_DATA } from "@/constants/dummyData";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={Styles.wrapper}>
      <FlatList
        data={SAMPLE_DATA}
        numColumns={2}
        renderItem={(item) => (
          <MealItemGridType
            name={item.item.name}
            id={item.item.id}
            label={item.item.category}
          />
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
