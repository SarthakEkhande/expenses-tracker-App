import { colors } from "@/constants/theme"
import { TypoProps } from "@/types"
import { verticalScale } from "@/utils/styling"

import { Dimensions, Platform, StatusBar, StyleSheet, Text, TextStyle, View } from "react-native"



const Typo=({size,style,color=colors.text,fontWeight=400,children,textProps={}}:TypoProps)=>{

    const textStyles:TextStyle={
        fontSize:size?verticalScale(size):verticalScale(20),
        color,
        fontWeight

    }
   
    return (
        <Text style={[textStyles,style,]}{...textProps}>{children}</Text>
    )
}

export default Typo


const styles=StyleSheet.create({})