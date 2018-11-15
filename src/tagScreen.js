import React, { Component } from 'react'
import {Text, View, ActivityIndicator, ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { material } from 'react-native-typography'

import {AlbumsWidget} from './widgets/albumsWidget'
import {RelatedArtistsWidget} from './widgets/relatedArtistsWidget'
import {colors, styles} from './styles'


export class TagScreen extends React.Component {
    constructor(props){
        super(props)
        
        this.state={
            tag:this.props.navigation.state.params, 
            loading:true,
            
            artists:null, albums:null,

            trimSummary:true,
        }
        this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this

        setTimeout(function(){
            var n=self.state.tag
            // this.store.data_getTagTopArtists(n, function(data){
            //     self.setState({artists:data, loading:false})
            // })
            this.store.data_getTagTopArtists(n, function(data){
                self.setState({artists:data, loading:false})
            })
            this.store.data_getTagTopAlbums(n, function(data){
                self.setState({albums:data, })
            })
        }, 50)
        

    }
    titleBlock=(tag)=>{
        return (
            <View style={styles.title_lblock}>
                <Text style={[material.display1, styles.textWithShadow]}>
                    {this.capitalize(tag)}
                </Text>
                {/* {this.chips(tag)} */}
            </View>
        )
    }
//------------
    capitalize(t){
        return t.slice(0,1).toUpperCase() + t.slice(1)
    }
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
            return (
                <ScrollView contentContainerStyle={{backgroundColor:colors.screen_bg}}>
                    {/* {this.backdrop(img)} */}
                    
                    {/* <View style={styles.header_container}> */}
                        {this.titleBlock(this.state.tag)}
                    {/* </View> */}
                    
                    <AlbumsWidget albums={this.state.albums}/>
                    <RelatedArtistsWidget navigation={this.props.navigation} artists={this.state.artists}/>
                </ScrollView>
            )
        }
    }
}


