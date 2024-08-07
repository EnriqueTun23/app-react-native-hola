import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import FontAwesone from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './src';
import {store} from './src/store';

export default () => {
  return (
    <Provider store={store} children={undefined}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#d13030',
        }}>
        <FontAwesone name={'animation-play'} size={30} color={'#ffffff'} />
        <Text>Demo para el audio</Text>
        <App />
      </View>
    </Provider>
  );
};
