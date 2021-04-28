import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import * as data from '../MoviesList.json';
import { Dimensions } from 'react-native';

const postersSwitch = (key) => {
    switch (key) {
        case 'Poster_01.jpg':
            return require('../assets/posters/Poster_01.jpg')
        case 'Poster_02.jpg':
            return require('../assets/posters/Poster_02.jpg')
        case 'Poster_03.jpg':
            return require('../assets/posters/Poster_03.jpg')
        case 'Poster_05.jpg':
            return require('../assets/posters/Poster_05.jpg')
        case 'Poster_06.jpg':
            return require('../assets/posters/Poster_06.jpg')
        case 'Poster_07.jpg':
            return require('../assets/posters/Poster_07.jpg')
        case 'Poster_08.jpg':
            return require('../assets/posters/Poster_08.jpg')
        case 'Poster_10.jpg':
            return require('../assets/posters/Poster_10.jpg')

        default:
            return require('../assets/posters/no-poster.jpg')
    }
}

const DATA = data.Search

const getItemCount = (data) => data.length;

const getItem = (data, index) => {
    return ({
        id: Math.random().toString(12).substring(0),
        title: `${data[index].Title}`,
        year: `${data[index].Year}`,
        type: `${data[index].Type}`,
        poster: `${data[index].Poster}`
    })
};

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function FilmsScreen() {

    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const orientation = () => {
        if (dimensions.window.height >= dimensions.window.width) {
            return portrait
        } else {
            return landscape
        }
    }

    const Item = ({ title, year, type, poster }) => (
        <View style={portrait.item}>
            <View style={portrait.posterViev}>
                <Image
                    style={orientation().poster}
                    source={postersSwitch(poster)}
                />
            </View>
            <View style={orientation().textViev}>
                <Text style={portrait.title}>{title}</Text>
                <Text style={portrait.details}>{year}</Text>
                <Text style={portrait.details}>{type}</Text>
            </View>
        </View>
    );

    const ItemSeparator = () => {
        return (
            <View
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: '#C8C8C8',
                    width: '92%',
                    height: 0.5,

                }}
            />
        );
    };

    return (
        <SafeAreaView style={portrait.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={5}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) =>
                    <Item title={item.title} year={item.year} type={item.type} poster={item.poster} />}

                keyExtractor={(item, index) => {
                    return item.id;
                }}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
}

const portrait = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
    },

    item: {
        flexDirection: 'row',
        height: 'auto',
        marginVertical: 8,
        marginHorizontal: 0,
        marginBottom: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,

    },

    title: {
        fontSize: 18,
    },

    poster: {
        width: 70,
        height: 120,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
    },

    posterViev: {
        flex: 2
    },

    textViev: {
        flex: 10,
        marginLeft: 28,

    },

    details: {
        fontSize: 16,
        marginTop: 10,
    }
});

const landscape = StyleSheet.create({
    textViev: {
        marginRight: 80,
        flex: 10,
    },

    poster: {
        marginLeft: 12,
        width: 70,
        height: 120,
    },

    poster: {
        width: 70,
        height: 120,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
    },
})
