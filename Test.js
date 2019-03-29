import React from 'react';
import {FlatList, ActivityIndicator, Text, View, Button} from 'react-native';
import RestAPIHelper from './app/common/RestAPIHelper';

export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    onPressLoad() {
        RestAPIHelper.sendRestAPI('http://10.15.155.78/restapi.php?abc=123',
            (result) => {
                alert(JSON.stringify(result));
            },
            (error) => {
                alert(error);
            }, {}
        );
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <Button title="Fetch Data" onPress={this.onPressLoad} />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}