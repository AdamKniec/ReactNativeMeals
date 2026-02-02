import { Link } from "expo-router";
import { Text, View } from "react-native";
import Styles from "./MealTypeGridItem.styles";

interface MealItemGridType {
  name: string;
  id: number;
}
const MealItemGridType = (props: MealItemGridType) => {
  return (
    <View style={Styles.wrapper}>
      <Link href={{ pathname: "/meal/[meal]", params: { meal: props.id } }}>
        <Text>{props.name}</Text>
      </Link>
    </View>
  );
};

export default MealItemGridType;
