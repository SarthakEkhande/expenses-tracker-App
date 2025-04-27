import { colors, radius } from "@/constants/theme"
import { CustomButtonProps } from "@/types"
import { verticalScale } from "@/utils/styling"
import { Text, View ,StyleSheet, TouchableOpacity} from "react-native"
import Loading from "./Loading"



const Button=({style,onPress,loading=false,children}:CustomButtonProps)=>{

    if(loading){
        return (
            <View style={[styles.button,style,{backgroundColor:'transparent'}]}>
         {/* loading */}
         <Loading/>
            </View>
        )
    }
    return(
      <View style={{flex:1,paddingHorizontal:20}}>
          <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
      {children}

       </TouchableOpacity>
      </View>
    )

}

export default Button


const styles=StyleSheet.create({
    button: {
        // flex:1,
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: "continuous",
        height: verticalScale(52),
 
        justifyContent: "center",
        alignItems: "center",
    }
    

})