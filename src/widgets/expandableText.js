import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {colors, styles} from '../styles'
import { material } from 'react-native-typography'

import Icon from 'react-native-vector-icons/MaterialIcons'

export class ExpandableText extends React.Component {
    render(){
        var trim=this.props.trimText

        var moreTextButton=(<View></View>)
        if (trim){
            moreTextButton=(
                <View style={styles.bio_moreButton}>
                    <Text style={[{color:colors.accent}, material.body] }>more</Text>
                    <Icon name="expand-more" size={20} color={colors.accent} />
                </View>
                )
        }

        var t=this.props.text.trim()
        return (
            <TouchableHighlight style={styles.bio_container} onPress={()=>this.props.setState({trimSummary:!trim})}>
                <View>
                    <Text style={[material.headline, {color:'white', paddingBottom:10, }]}>Bio</Text>
                    <Text style={[material.body1,    {color:'white', textAlignVertical:'top',  }]} numberOfLines={trim? 4: 300}>{t}</Text>
                    {moreTextButton}
                </View>
            </TouchableHighlight>
        )
    }
}