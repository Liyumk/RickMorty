import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import Category from '../../components/Category';
import {colors, dimensions} from '../../styles/base';
import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackNavigatorParamList} from '../../navigation/types';

type HomeProps = NativeStackScreenProps<MainStackNavigatorParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const categories = [
    {
      title: 'Characters',
      onPress: () => {
        navigation.navigate('Characters');
      },
      source: require('../../assets/img/mad_rick_and_morty.png'),
    },
    {
      title: 'Places',
      onPress: () => console.log('Places'),
      source: require('../../assets/img/portal_travel.png'),
      imageStyle: {
        height: 250,
      },
    },
    {
      title: 'Episodes',
      onPress: () => console.log('Episodes'),
      source: require('../../assets/img/rick-morty-open-eye.png'),
    },
    {
      title: 'Others',
      onPress: () => console.log('Others'),
      source: require('../../assets/img/rick-and-morty-running.png'),
    },
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
              source={category.source}
              imageStyle={category?.imageStyle}
            />
          ))}
        </View>
        <View style={styles.bottomImageContainer}>
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
