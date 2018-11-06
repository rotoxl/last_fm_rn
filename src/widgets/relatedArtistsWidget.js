import React from 'react'
import {
    Text, View, 
    Image, FlatList, 
    ActivityIndicator, TouchableHighlight} from 'react-native'
import {colors, styles} from '../styles'
import { material } from 'react-native-typography'

export class RelatedArtistsWidget extends React.Component {
    render(){
        if (this.props.artists==null){
            return (
                <View style={styles.relatedArtist_container}>
                    <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Related</Text>
                    <View style={{backgroundColor:colors.white, flex:1,}}>
                        <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
                    </View>
                </View>
            )
        }
        return (<View style={styles.relatedArtist_container}>
                    <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Related</Text>
                    <FlatList
                        horizontal={true}
                        style={{marginTop:22}}
                        renderItem={({item, i}) => this.artistAvatar(item, i)}
                        data={this.props.artists}
                        keyExtractor={(item, index) => index}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>)
    }
    artistAvatar=(r)=>{
        var img=r.image[3]['#text']
        console.log(img);
        return <TouchableHighlight style={styles.relatedArtist_artist_circle} onPress={()=>this.artist_onClick(r)}>
                <Image source={{ uri:img }} style={[styles.relatedArtist_img]}/>
            </TouchableHighlight>
    }
    artist_onClick = (item) => {
        console.log('item click', item)
        this.props.navigation.navigate({
            routeName:'artist', 
            params:{ ...item }, 
            key:item.name
        })
    }
}
