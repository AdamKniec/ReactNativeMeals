import MealItemGridType from "@/components/MealTypeGridItem/MealTypeGridItem";
import { SAMPLE_DATA } from "@/constants/dummyData";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, View } from "react-native";

const MealScreen = () => {
  const searchParams = useLocalSearchParams();
  const selectedCategory = searchParams.meal;

  const filteredCategories = SAMPLE_DATA.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <>
      <Stack.Screen
        options={{
          title: `Wybrana kategoria produktu`,
        }}
      />
      <View>
        <FlatList
          data={filteredCategories}
          renderItem={(item) => (
            <MealItemGridType
              category={item.item.category}
              name={item.item.name}
              id={item.item.id}
            />
          )}
        />
      </View>
    </>
  );
};

export default MealScreen;
