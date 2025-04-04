import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Card from "../components/Card";
import CardImage from "../components/CardImage";
import { movies } from "../data/movies";

export default function Home({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  function handleOnClickCard(movie) {
    // setMovieSelected(movie);
    // setModalVisible(true);
    navigation.navigate("DetailMovie", { filme: movie });
  }

  function handleOnClickCloseModal() {
    setModalVisible(false);
    setMovieSelected(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Função map: itera sobre a lista e transforma cada dado em um novo valor */}
      {/* <ScrollView>
        {movies.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              year={movie.year}
              imageUri={movie.poster}
            />
          );
        })}
      </ScrollView> */}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            year={item.year}
            imageUri={item.poster}
            handleClick={() => handleOnClickCard(item)}
          />
        )}
        ItemSeparatorComponent={<View style={styles.separator} />}
        ListFooterComponent={<View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.containerModal}>
            <ScrollView
              style={styles.containerMovie}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.containerImage}>
                <CardImage imageUri={movieSelected?.poster} />
              </View>
              <Text style={styles.movieTitle}>{movieSelected?.title}</Text>
              <Text style={styles.movieYear}>{movieSelected?.year}</Text>
              <Text style={styles.movieDescription}>
                {movieSelected?.description}
              </Text>
              <Text style={styles.movieDescription}>
                Diretor: {movieSelected?.director}
              </Text>
              <Text style={styles.movieDescription}>
                Elenco: {movieSelected?.cast}
              </Text>
              <Text style={styles.movieDescription}>
                Duração: {movieSelected?.duration}
              </Text>
              <Text style={styles.movieDescription}>
                Gêneros: {movieSelected?.genre}
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => handleOnClickCloseModal()}
            >
              <Text style={styles.buttonTextModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 16,
    gap: 15,
  },
  separator: {
    height: 16,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerModal: {
    width: "100%",
    backgroundColor: "#FFF",
    height: 600,
    borderRadius: 15,
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "space-between",
    gap: 20,
  },
  buttonModal: {
    width: "100%",
    padding: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextModal: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
  },
  containerMovie: {},
  containerImage: {
    width: "100%",
    alignItems: "center",
  },
  movieTitle: {
    width: "100%",
    marginTop: 26,
    fontSize: 22,
    fontWeight: 700,
    color: "#333",
  },
  movieYear: {
    width: "100%",
    marginTop: 8,
    fontSize: 18,
    fontWeight: 400,
    color: "#666",
  },
  movieDescription: {
    width: "100%",
    marginTop: 12,
    fontSize: 16,
    fontWeight: 400,
    color: "#444",
  },
});
