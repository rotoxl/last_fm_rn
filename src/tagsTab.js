import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, Button, FlatList, TouchableHighlight, ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {colors, styles} from './styles'

export class TagsTab extends React.Component {
    constructor(props){
        super(props)

        this.state={
            data:null,
        }
        this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this
        // this.store.data_getMyCharts(function(data){
        //     self.setState({data:data})
        // })
    }
    renderRow(item){
        return (
            <ListingRow item={item} onPress={this.chart_onClick}/>
        )
    }
    render() {
        if (this.state.data==null){
            return (
                <View style={{backgroundColor:colors.white, flex:1,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.yellow_bg}/>
                </View>
            )
        }
        else {
            return (
                <FormattedWrapper locale={store.i18n.locale} currency={store.i18n.currency} messages={store.i18n.messages}>
                    <View style={{backgroundColor:colors.white, flex:1,}}>
                        <FlatList 
                            data={this.state.data} 
                            renderItem={({item}) => this.renderRow(item)} 
                            />
                    </View>
                </FormattedWrapper>
            )
        }
    }
    chart_onClick = (item) => {
        // this.props.navigation.navigate('chartDetails', { ...item })
    }
}