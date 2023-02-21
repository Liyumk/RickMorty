import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import Category from '../../components/Category';
import {colors, dimensions} from '../../../app/styles/base';

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.darker},
      ]}>
      <View>
        <Image
          style={styles.titleImage}
          source={require('../../assets/img/rick-and-morty-title.png')}
        />
        <View style={styles.categoryContainer}>
          <Category
            onPress={() => {
              console.log('Category 1');
            }}
          />
          <Category
            onPress={() => {
              console.log('Category 1');
            }}
          />
          <Category
            onPress={() => {
              console.log('Category 1');
            }}
          />
          <Category
            onPress={() => {
              console.log('Category 1');
            }}
          />
        </View>
        <View>
          <Image
            source={require('../../assets/img/ricknmorty.png')}
            style={{
              marginTop: 10,
              width: dimensions.fullWidth,
              height: 400,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
