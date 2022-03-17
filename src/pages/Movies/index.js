import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationHelpersContext} from '@react-navigation/native';
import api, {getCredits, getDetails} from '../../service/api';
import styles from './styles';

export default function Movies({route, navigation}) {
  const id = route.params;
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState(null);

  useEffect(() => {
    async function awaitGetDetails() {
      try {
        const dataDetails = await getDetails(id);
        setDetails(dataDetails);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetDetails();
  }, [id]);

  useEffect(() => {
    async function awaitGetCredits() {
      try {
        const dataCredits = await getCredits(id);
        setCast(dataCredits.cast);
        setCrew(dataCredits.crew);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  const renderItem = ({item}) => {
    return (
      <View>
        <Image
          style={styles.imageFlatList}
          source={{
            uri: `https://image.tmdb.org/t/p/w45/${item.profile_path}`,
          }}
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.character}>{item.character}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <Image
          style={styles.backGroundMovie}
          source={{
            uri: `http://image.tmdb.org/t/p/w780/${details.backdrop_path}`,
          }}
        />
        <TouchableOpacity
          style={styles.containerButtonBack}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.buttonBack} name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButtonStar}>
          <Feather name="star" size={25} style={styles.buttonStar} />
        </TouchableOpacity>

        <View style={styles.detailsMovies}>
          <View>
            <Image
              style={styles.capaMovie}
              source={{
                uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
              }}
            />
          </View>

          <View style={styles.detaisMoviesTitle}>
            <Text style={styles.titleMovie}>
              {details.title}{' '}
              <Text style={styles.yearMovie}>
                {new Date(details.release_date).getFullYear()}
              </Text>{' '}
              <Text style={styles.timeMovie}>{details.runtime}min</Text>
            </Text>
            <View>
              <Text style={styles.textAutor}>
                Direção por{' '}
                <Text style={styles.autorMovie}>
                  {crew &&
                    crew.find(profile => profile.job === 'Director').name}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.datailRatedLiked}>
          <View style={styles.detailsRated}>
            <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
          </View>

          <View style={styles.datailsLiked}>
            <TouchableOpacity>
              <AntDesign name="heart" size={20} style={styles.heartIcon} />
            </TouchableOpacity>
            <Text style={styles.liked}>
              {details.length > 0 && details.popularity.toString()[0]+details.popularity[1]}K
            </Text>
          </View>
        </View>

        <View style={styles.detailsDescription}>
          <Text style={styles.descriptionMovie}>{details.overview}</Text>
        </View>
        <Text style={styles.elenco}>Elenco</Text>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.viewFLatList}
        data={cast}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}