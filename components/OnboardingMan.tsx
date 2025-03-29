import { View, Image } from 'react-native'
import React from 'react'

const OnboardingMan = () => {
  return (
    <View className='flex-1 w-full bg-light-primary'>
      {/* <Image source={require('../assets/images/Man.png')}/> */}
      <View className='flex-1 items-center justify-end relative'>
        {/* Images */}
        <View className='relative'>
          <Image source={require('../assets/images/Man.png')} className='w-man' />
          <Image source={require('../assets/images/Coin.png')} className='z-10 absolute left-[-20px]' />
          <Image source={require('../assets/images/Donut.png')} className='z-10 absolute right-[-20px] top-16' />
        </View>
        <Image source={require('../assets/images/Shadow.png')} className='w-full' />
      </View>
    </View>
  )
}

export default OnboardingMan