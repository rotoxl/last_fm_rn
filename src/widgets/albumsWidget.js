import React from 'react'
import {
    Text, View, 
    Image, FlatList, 
    ActivityIndicator} from 'react-native'
import {colors, styles} from '../styles'
import { material } from 'react-native-typography'

export class AlbumsWidget extends React.Component {
    render(){
        if (this.props.albums==null){
            return (
                <View style={styles.album_container}>
                    <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Albums</Text>
                    <View style={{backgroundColor:colors.white, flex:1,}}>
                        <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
                    </View>
                </View>
            )
        }
        return (<View style={styles.album_container}>
                    <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Albums</Text>
                    <FlatList
                        horizontal={true}
                        style={{marginTop:22}}
                        renderItem={({item, i}) => this.albumAvatar(item, i)}
                        data={this.props.albums}
                        keyExtractor={(item, index) => index}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>)
    }
    albumAvatar=(r)=>{
        var img=r.image[3]['#text']
        console.log(img);
        // return <TouchableHighlight style={styles.artist_album} onPress={()=>this.item_onClick(r)}>
        //         <Image source={{ uri:img }} style={[styles.artist_album_img]}/>
        //     </TouchableHighlight>
        return <View style={styles.artist_album}> 
                <Image source={{ uri:img }} style={[styles.artist_album_img]}/>
            </View>
    }
}
