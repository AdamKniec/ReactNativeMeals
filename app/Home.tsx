import MealItemGridType from "@/components/MealTypeGridItem/MealTypeGridItem";
import { SAMPLE_DATA } from "@/constants/dummyData";
import { FlatList, View } from "react-native";
import { Styles } from "./Styles";

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
