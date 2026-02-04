import { Link } from "expo-router";
import { Text, View } from "react-native";
import Styles from "./MealTypeGridItem.styles";

interface MealItemGridType {
  name: string;
  id: number;
  category: string;
}
const MealItemGridType = (props: MealItemGridType) => {
  return (
    <View style={Styles.wrapper}>
      <Link
        href={{ pathname: "/meal/[meal]", params: { meal: props.category } }}
      >
        <Text>{props.name}</Text>
      </Link>
    </View>
  );
};

export default MealItemGridType;
