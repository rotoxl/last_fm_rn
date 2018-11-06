import React, { Component } from 'react'
import {
    StyleSheet, Text, View, 
    Image, Button, FlatList, 
    TouchableHighlight, ActivityIndicator, ScrollView,
    ImageBackground} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { material } from 'react-native-typography'

import {AlbumsWidget} from './widgets/albumsWidget'
import {RelatedArtistsWidget} from './widgets/relatedArtistsWidget'
import {ExpandableText} from './widgets/expandableText'
import {ChipsWidget} from './widgets/chipsWidget'

import {colors, styles} from './styles'


export class ArtistScreen extends React.Component {
    constructor(props){
        super(props)
        
        this.state={
            artist:null, 
            loading:true,
            layout:{},

            trimSummary:true,
        }
        this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this

        setTimeout(function(){
            var n=self.props.navigation.state.params.name
            this.store.data_getArtistInfo(n, function(data){
                self.setState({artist:data, loading:false})
            })
            this.store.data_getArtistAlbums(n, function(data){
                self.setState({albums:data, })
            })
        }, 50)
    }
    backdrop = (img) => {
        return (
            
            <Image 
                style={styles.backdrop_image}
                source={{ uri:img, cache:'force-cache', }}
                blurRadius={2}/>
            
            )
    }
    poster = (img) => {
        return (<View style={styles.poster_container}>
                <Image
                    style={styles.poster_image}
                    resizeMode={'cover'}
                    source={{uri:img, cache:'force-cache', }}
                />
        </View>)
    }
    titleBlock=(artist)=>{
        return (
            <View style={styles.title_block}>
                <Text style={[material.headline, styles.textWithShadow]}>
                    {artist.name}
                </Text>
                <ChipsWidget data={artist.tags.tag} navigation={this.props.navigation} />
            </View>
        )
    }
//------------
    render = () => {
        console.log(this.props)
        if (this.state.loading){
            return (
                <View style={{backgroundColor:colors.screen_bg, flex:1,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
                </View>
            )
        }
        else {
            var artist=this.state.artist
            var img=artist.image[3]['#text']
            
            return (
                <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor:colors.screen_bg}}>
                    {/* {this.backdrop(img)} */}
                    
                    <View style={styles.header_container}>
                        {this.poster(img)}
                        {this.titleBlock(artist)}
                    </View>
                    
                    <ExpandableText trimText={this.state.trimSummary} text={artist.bio.summary} setState={(param)=>this.setStateFromChild(param)}/>
                    <AlbumsWidget albums={this.state.albums}/>
                    <RelatedArtistsWidget navigation={this.props.navigation} artists={artist.similar.artist}/>

                </ScrollView>
            )
        }
    }
    setStateFromChild(dic){
        this.setState(dic)
    }
}


