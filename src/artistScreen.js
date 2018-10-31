import React, { Component } from 'react'
import {
    StyleSheet, Text, View, 
    Image, Button, FlatList, 
    TouchableHighlight, ActivityIndicator, ScrollView,
    ImageBackground} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { material } from 'react-native-typography'

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
        }, 50)
        

    }
    backdrop = (img) => {
        return (
            
            <Image 
                style={styles.backdrop_image}
                source={{ uri:img, cache:'only-if-cached', }}
                blurRadius={2}/>
            
            )
    }
    poster = (img) => {
        return (<View style={styles.poster_container}>
                <Image
                    style={styles.poster_image}
                    resizeMode={'cover'}
                    source={{uri:img, cache:'only-if-cached', }}
                />
        </View>)
    }
    titleBlock=(artist)=>{
        return (
            <View style={styles.title_block}>
                <Text style={[material.headline, styles.textWithShadow]}>
                    {artist.name}
                </Text>
                {this.chips(artist)}
            </View>
        )
    }
    chips=(artist)=>{
        return <FlatList
                    horizontal={true}
                    style={styles.chips_container}
                    renderItem={({item, i}) => this.chip(item, i)}
                    data={artist.tags.tag}
                    keyExtractor={(item, index) => index}
                    showsHorizontalScrollIndicator={false}
                />
    }
    chip=(c)=>{
        return (
            <View style={styles.chip}>
                <Text style={styles.chip_text}>{c.name}</Text>
            </View>
        )
    }
    bioBlock=(artist)=>{
        var trim=this.state.trimSummary

        var moreTextButton=(<View></View>)
        if (trim){
            moreTextButton=(<View style={styles.bio_moreButton}>
                <Text style={[{color:colors.accent}, material.body] }>more</Text>
                    <Icon name="expand-more" size={20} color={colors.accent} />
                </View>)
        }
        return (
            <TouchableHighlight style={styles.bio_container} onPress={()=>this.setState({trimSummary:!this.state.trimSummary})}>
                <View >
                    <Text style={[material.headline, {color:'white'}]} numberOfLines={1}>Bio</Text>
                    <Text style={[material.body1,    {color:'white'}]} numberOfLines={trim? 4: -1}>{artist.bio.summary}</Text>
                    {moreTextButton}
                </View>
            </TouchableHighlight>
        )
    }
    relatedArtistBlock=(artist)=>{
        return (<View style={styles.relatedArtist_container}>
                    <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Related</Text>
                    <FlatList
                        horizontal={true}
                        style={{marginTop:22}}
                        renderItem={({item, i}) => this.artistAvatar(item, i)}
                        data={artist.similar.artist}
                        keyExtractor={(item, index) => index}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>)
    }
    artistAvatar=(r)=>{
        var img=r.image[3]['#text']
        console.log(img);
        return <TouchableHighlight style={styles.relatedArtist_artist_circle} onPress={()=>this.item_onClick(r)}>
                <Image source={{ uri:img }} style={[styles.relatedArtist_img]}/>
            </TouchableHighlight>
    }

    render = () => {
        console.log(this.props)
        if (this.state.loading){
            return (
                <View style={{backgroundColor:colors.white, flex:1,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
                </View>
            )
        }
        else {
            var artist=this.state.artist
            var img=artist.image[3]['#text']
            
            
            
            
            return (
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
                    {this.backdrop(img)}
                    
                    <View style={styles.header_container}>
                        {this.poster(img)}
                        {this.titleBlock(artist)}
                    </View>
                    
                    {this.bioBlock(artist)}

                    {this.relatedArtistBlock(artist)}
                </ScrollView>
            )
        }
    }
    item_onClick = (item) => {
        console.log('item click', item)
        // this.props.navigation.navigate('artist', { ...item })
        this.props.navigation.navigate({
            routeName:'artist', 
            params:{ ...item }, 
            key:item.name
        })
    }
}


