/** @format */
import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, Button, FlatList, TouchableHighlight, Dimensions, Platform} from 'react-native'

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {colors} from './styles'
import {store} from './store'
import {ChartsTab} from './chartsTab'
import {TagsTab} from './tagsTab'
import {ArtistScreen} from './artistScreen'


const tabs=createBottomTabNavigator({
    charts: {
        screen: ChartsTab,
        navigationOptions: ({navigation, navigationOptions}) => {
            return {
                tabBarLabel: 'Charts',
                tabBarIcon: ({ focused, tintColor }) => (<Icon name={'touch-app'} size={26} color={tintColor}/>)
            }
        }
    },
    tags: {
        screen: TagsTab,
        navigationOptions: ({navigation, navigationOptions}) => {
            return {
                tabBarLabel: 'Tags',
                tabBarIcon: ({ focused, tintColor }) => (<Icon name={'library-music'} size={26} color={tintColor}/>)
            }
        }
    }
  }, {
    initialRouteName:'charts',
    tabBarOptions: {
        activeTintColor: colors.yellow_fg_active, inactiveTintColor:colors.yellow_fg_inactive,
        style:{backgroundColor:colors.header_bg, },
        // indicatorStyle:{backgroundColor:colors.yellow_fg_active},
        // swipeEnabled:true,
    },
  }
)

const Stack=createStackNavigator({
    tabs:{
        screen:tabs,
        navigationOptions: ({navigation, navigationOptions}) => {
            var params=navigation.state.params
            navigation.store=navigationOptions.store

            return {
                title: 'last.fm',
                headerRight:(<TouchableHighlight style={{width:30, height:35, paddingTop:7, marginRight:8}} onPress={function(){navigation.navigate('searchScreen')}} >
                                <Icon name='search' size={26} color={colors.yellow_fg_active}/>
                            </TouchableHighlight>
                            )
            }
        }
    }, 
    artist:{
        screen:ArtistScreen,
        navigationOptions: ({navigation, navigationOptions}) => {
            navigation.store=navigationOptions.store
            return {
                headerTintColor:colors.yellow_fg_inactive,
                headerTransparent:true,
            }
        }
    }
  },{
    initialRouteName:'tabs',
    headerMode: 'screen',
    navigationOptions:{
        store:store,
        headerStyle:{
            elevation:0, //next gen hack
            shadowOpacity: 0,
            backgroundColor:colors.header_bg,
        },
    }
  }
)

export default class App extends React.Component {
    render() {
      return <Stack />;
    }
  }