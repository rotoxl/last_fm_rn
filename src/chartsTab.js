import React, { Component } from 'react'
import {
    StyleSheet, Text, View, 
    Image, Button, FlatList, 
    TouchableOpacity, ActivityIndicator, ScrollView,
    ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {colors, styles} from './styles'
import { Dimensions } from 'react-native';


export class ChartsTab extends React.Component {
    constructor(props){
        super(props)

        this.state={
            data:null, 
            loading:true,
            layout:{},
        }
        this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this

        setTimeout(function(){
            this.store.data_getCharts(0, function(data){
                console.log('about to show artists')
                self.setState({data:data, loading:false})
            })
        }, 10)
        
    }
    render = () => {
        // return (<Text>ChartsTab</Text>)
        console.log('ChartsTab.render')
        if (this.state.loading){
            return (
                <View style={{backgroundColor:colors.white, flex:1,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.yellow_bg}/>
                </View>
            )
        }
        else {
            return (
                <View style={{backgroundColor:colors.white, flex:1, paddingLeft:0, left:0, right:0, top:0, bottom:0,}}>
                    <FlatList
                        style={{flex:1}}
                        numColumns={3} horizontal={false}

                        renderItem={({item, i}) => this.renderRow(item, i)}
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                )
        }
    }
    item_onClick = (item) => {
        // this.props.navigation.navigate({routeName:'artist', params:{ ...item }, key: 'samepage-'+new Date()})
        this.props.navigation.navigate({
            routeName:'artist', 
            params:{ ...item }, 
            key:item.name
        })
    }
    renderRow = (data, i) => { 
        var img=data.image[3]['#text']
        return (
            <View style={styles.item} key={i}>
                <TouchableOpacity style={styles.item} onPress={()=>this.item_onClick(data)}>
                    <Image source={{ uri:img, cache:'force-cache', }} style={[styles.item, {backgroundColor:colors.debug}]} />
                </TouchableOpacity>
            </View>
        );
    }
}   
