import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
export default function Header ({showMenu,showLogo,showCart,showHeader}) {
   const navigation = useNavigation()
   return (
    <SafeAreaView>
        <View className="bg-red-500 flex-1"/>
    </SafeAreaView>
   )
}