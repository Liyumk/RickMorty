import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import Category from '../../components/Category';
import {colors, dimensions} from '../../../app/styles/base';

const Home = () => {
  const categories = [
    {title: 'Characters', onPress: () => console.log('Characters')},
    {title: 'Places', onPress: () => console.log('Places')},
    {title: 'Episodes', onPress: () => console.log('Episodes')},
    {title: 'Others', onPress: () => console.log('Others')},
  ];

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
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              onPress={category.onPress}
            />
          ))}
        </View>
        <View>
          <Image
            source={require('../../assets/img/ricknmorty.png')}
            style={styles.bottomImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
