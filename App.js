import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, characteres: {} };
  }

  componentDidMount() {
    return fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          characteres: responseJson.results
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.characteres}
          renderItem={({ item }) => (
            <Text>aeae</Text>
            // <Card style={{ maxWidth: 345 }}>
            //   <CardMedia
            //     style={{ height: 280 }}
            //     image={item.image}
            //     title="Contemplative Reptile"
            //   />
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="h2">
            //       {item.name}
            //     </Typography>
            //     <Typography variant="body2" color="textSecondary" component="p">
            //       {item.species}
            //     </Typography>
            //   </CardContent>
            // </Card>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
