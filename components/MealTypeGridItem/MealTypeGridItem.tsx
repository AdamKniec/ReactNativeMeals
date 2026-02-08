import { Link } from "expo-router";
import { Text, View } from "react-native";
import Styles from "./MealTypeGridItem.styles";

interface MealItemGridType {
  name: string;
  id: number;
  label: string;
}
const MealItemGridType = (props: MealItemGridType) => {
  return (
    <View style={Styles.wrapper}>
      <Link
        href={{ pathname: "/meal/[meals]", params: { meals: props.label } }}
      >
        <Text>{props.label}</Text>
      </Link>
    </View>
  );
};

export default MealItemGridType;
