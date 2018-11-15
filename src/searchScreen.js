import React, { Component } from 'react'
import {
    StyleSheet, Text, View,
    Image, Button, FlatList, 
    TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { material } from 'react-native-typography'
import Search from 'react-native-search-box'

import {colors, styles} from './styles'
import {AlbumsWidget} from './widgets/albumsWidget'


const marginH=16
export class SearchScreen extends React.Component {
    constructor(props){
        super(props)
        
        this.state={
            loading:false,
            data:null,
        }
        // this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this

        // setTimeout(function(){
        //     self.searchBar.show()
        // }, 1000)
    }
    render = () => {        
        
        if (this.state.artists || this.state.albums){
            var artist=(<View/>)
            if (this.state.artists){
                artist=[
                        (<Text style={[material.headline, styles.relatedArtist_title, {paddingTop:20}]} numberOfLines={1}>Artists</Text>),
                        (<FlatList
                            horizontal={true}
                            renderItem={({item, index}) => this._renderArtist(item, index)}
                            data={this.state.artists}
                            keyExtractor={(item, index) => index}/>
                        )
                ]
            }
            
            var albums=(<View/>)
            if (this.state.albums){
                albums=<AlbumsWidget albums={this.state.albums}/>
            }

            container=(
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom:90}}>
                    <View style={{flex: 1,}}>{artist}</View>
                    <View style={{flex: 1,}}>{albums}</View>
                </ScrollView>
            )
        }
        else if (this.state.loading){
            container=(
                <View style={{padding:20,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
                </View>
            )
        }
        else {
            container=(
                <View style={{padding:20,}}>
                    <Text style={{color:'white'}}>Type to search</Text>
                </View>
            )
        }

        return (
            <View style={{position:'absolute', top:70, bottom:0, left:0, right:0}}>
                <Search ref="searchBar" onSearch={(input)=>this._handleSearch(input)}/>
                {container}
            </View>
        )
    }
//------------    
    _renderArtist = (item, index) => { 
        var img=item.image[3]['#text']

        var newItemStyle={...styles.item}
        if (index==0) newItemStyle.marginLeft=marginH

        if (img==null || img=='') {
            
            console.log(item)
        }
        return (
            <View style={newItemStyle} key={index}>
                <TouchableOpacity style={styles.item} onPress={()=>this._artist_onClick(item)}>
                    <Image source={{ uri:img, cache:'force-cache', }} style={[styles.item, {backgroundColor:colors.placeholder}]} />
                </TouchableOpacity>
            </View>
        )
    }
    _artist_onClick= (item) => {
        this.props.navigation.navigate({
            routeName:'artist', 
            params:{ ...item }, 
            key:item.name
        })
    }
//------------    
    _handleSearch = (input) => {
        var self=this

        console.log('Search', input)
        
        self.setState({artists:null, loading:true})
        store.data_getArtistSearch(input, function(data){
            console.log(data)

            self.setState({artists:data, loading:false})
        })

        store.data_getAlbumSearch(input, function(data){
            console.log(data)

            self.setState({albums:data, loading:false})
        })
    }
    _onBack = () => {
        this.props.navigation.goBack()
    } 
}
