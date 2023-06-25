import { View, Text, Button } from '@tarojs/components'

import './index.less'
import Taro from '@tarojs/taro';

const Index = () => {
  function jumpPage(url: string) {
    Taro.navigateTo({
      url
    })
  }
  return (
    <View>
      <View className='index'>
        <View><Text>测试案例：</Text></View>
        <View><Button onClick={() => jumpPage('/pages/translation/index')}>同声传译</Button></View>
        <View><Button onClick={() => jumpPage('/pages/speak/index')}>文字转语音</Button></View>
        <View><Button onClick={() => jumpPage('/pages/record/index')}>录音接口</Button></View>
      </View>
    </View>
  )
}
export default Index
