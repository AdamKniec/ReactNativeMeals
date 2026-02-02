import MealItemGridType from "@/components/MealTypeGridItem/MealTypeGridItem";
import { SAMPLE_DATA } from "@/constants/dummyData";
import { FlatList, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={SAMPLE_DATA}
        numColumns={2}
        renderItem={(item) => (
          <MealItemGridType name={item.item.name} id={item.item.id} />
        )}
      />
    </View>
  );
}
