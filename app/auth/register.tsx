import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/input'
import * as Icons from "phosphor-react-native"
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
const Register = () => {
 const [isLoding,setisLoading]=useState(false)
    const emailRef=useRef("")
    const Passwordref=useRef("")
    const nameref=useRef("")

  const router=useRouter()
    const handleSubmit=async()=>{
   if(!emailRef.current || !Passwordref.current ||nameref.current) {
    Alert.alert("Sign up", "Please fill all the fields")
    return
   }

   console.log("email",emailRef.current)
   console.log("name",nameref.current)

   console.log("password",Passwordref.current)


    }
  return (
    <ScreenWrapper>
   <View style={styles.container}>
    {/* back button */}
    <BackButton iconSize={28}/>
    <view style={{gap:5,marginTop:spacingY._20}}>
        <Typo size={30} fontWeight={"800"}>Let`s</Typo>
        <Typo size={30} fontWeight={"800"}>Get started</Typo>
    </view>


 {/* login form */}

 <View style={styles.form}>
    <Typo size={60} color={colors.textLighter}>Create an account to track your expenses </Typo>
    <Input onChangeText={value=> nameref.current=value} placeholder='Enter Your name' icon={<Icons.User size={verticalScale(26)} color={colors.neutral300} weight='fill' />} />

<Input onChangeText={value=> emailRef.current=value} placeholder='Enter Your Email' icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} weight='fill' />} />
<Input secureTextEntry onChangeText={value=> Passwordref.current=value} placeholder='Enter Your Password' icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight='fill' />} />
{/* <Typo size={14} color={colors.text} style={{alignSelf:"flex-end"}}> Forgot Password</Typo> */}

<Button loading={isLoding} onPress={handleSubmit}>
    <Typo fontWeight={"700"} color={colors.black} size={21} >Sign up</Typo>
</Button>
 </View>

 {/* footer */}

 <View style={styles.footer}>
<Typo size={15} >Allready have an account</Typo>
<Pressable onPress={()=>router.navigate('/auth/login')}>
    <Typo size={15} fontWeight={"700"} color={colors.primary}>Login In</Typo>
</Pressable>

 </View>
 
   </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:spacingY._30,
        paddingHorizontal:spacingX._20
    },
    welcomeText:{
        fontSize:verticalScale(20),
        fontWeight:"bold",
        color:colors.text
    },
    form:{
        gap:spacingY._20
    },
    forgotPassword:{
        textAlign:"right",
        fontWeight:"500",
        color:colors.text

    },
    footer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:5
    },
    footerText:{
        textAlign:"center",
        color:colors.text,
        fontSize:verticalScale(15)
    }
})