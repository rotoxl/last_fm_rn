import React from 'react'
import {
    Text, View, 
    FlatList, 
    ActivityIndicator, TouchableHighlight} from 'react-native'
import {colors, styles} from '../styles'
import { material } from 'react-native-typography'

export class ChipsWidget extends React.Component {
    render(){
        // if (this.props.albums==null){
        //     return (
        //         <View style={styles.album_container}>
        //             <Text style={[material.headline, styles.relatedArtist_title]} numberOfLines={1}>Albums</Text>
        //             <View style={{backgroundColor:colors.white, flex:1,}}>
        //                 <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.accent}/>
        //             </View>
        //         </View>
        //     )
        // }
        return (
            <FlatList
                horizontal={true}
                style={styles.chips_container}
                renderItem={({item, i}) => this.chip(item, i)}
                data={this.props.data}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
    chip=(c)=>{
        return (
            <TouchableHighlight style={styles.chip} onPress={()=>this.tag_onClick(c.name)}>
                <Text style={styles.chip_text}>{c.name}</Text>
            </TouchableHighlight>
        )
    }
    tag_onClick = (name) => {
        this.props.navigation.navigate('tag', name)
    }
}
