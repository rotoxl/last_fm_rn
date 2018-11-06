import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, Button, FlatList, TouchableHighlight, ActivityIndicator, Dimensions, ScrollView} from 'react-native'

import {colors, styles} from './styles'

const dim = Dimensions.get('window')
const deviceWidth = dim.width
const deviceHeight = dim.height

const tagPadding=16
export class TagsTab extends React.Component {
    constructor(props){
        super(props)

        this.state={
            data:null,
            loading:true, 
            
            minFontSize: 12,
            colorList: ['#ff5722', '#efb340', '#00bcd4', '#c8c8c8', ],
            style: {
                width: deviceWidth / 1.2,
                paddingLeft: 15,
                paddingRight: 15,
            },
        }
        this.store=props.navigation.store
    }
    componentDidMount(){
        var self=this
        
        setTimeout(function(){
            this.store.data_getTopTags(function(data){
                console.log('about to show tag cloud')
                console.log( JSON.stringify(data) )
                self.setState({data: self.reorder(data), loading:false})
            })
        }, 10)
    }
    reorder(data){
        //[{"name":"rock","url":"https://www.last.fm/tag/rock","reach":"393343","taggings":"3934740","streamable":"1","wiki":{}},{"name":"electronic","url":"https://www.last.fm/tag/electronic","reach":"251620","taggings":"2335242","streamable":"1","wiki":{}},{"name":"seen live","url":"https://www.last.fm/tag/seen+live","reach":"81624","taggings":"2128032","streamable":"1","wiki":{}},{"name":"alternative","url":"https://www.last.fm/tag/alternative","reach":"260182","taggings":"2068461","streamable":"1","wiki":{}},{"name":"indie","url":"https://www.last.fm/tag/indie","reach":"251334","taggings":"1994982","streamable":"1","wiki":{}},{"name":"pop","url":"https://www.last.fm/tag/pop","reach":"222816","taggings":"1930969","streamable":"1","wiki":{}},{"name":"female vocalists","url":"https://www.last.fm/tag/female+vocalists","reach":"167295","taggings":"1586214","streamable":"1","wiki":{}},{"name":"metal","url":"https://www.last.fm/tag/metal","reach":"154699","taggings":"1247867","streamable":"1","wiki":{}},{"name":"alternative rock","url":"https://www.last.fm/tag/alternative+rock","reach":"165938","taggings":"1142339","streamable":"1","wiki":{}},{"name":"classic rock","url":"https://www.last.fm/tag/classic+rock","reach":"136454","taggings":"1137179","streamable":"1","wiki":{}},{"name":"jazz","url":"https://www.last.fm/tag/jazz","reach":"145645","taggings":"1135262","streamable":"1","wiki":{}},{"name":"ambient","url":"https://www.last.fm/tag/ambient","reach":"142603","taggings":"1033868","streamable":"1","wiki":{}},{"name":"experimental","url":"https://www.last.fm/tag/experimental","reach":"137709","taggings":"1033546","streamable":"1","wiki":{}},{"name":"folk","url":"https://www.last.fm/tag/folk","reach":"146269","taggings":"903187","streamable":"1","wiki":{}},{"name":"punk","url":"https://www.last.fm/tag/punk","reach":"140905","taggings":"867422","streamable":"1","wiki":{}},{"name":"indie rock","url":"https://www.last.fm/tag/indie+rock","reach":"132376","taggings":"864148","streamable":"1","wiki":{}},{"name":"Hip-Hop","url":"https://www.last.fm/tag/Hip-Hop","reach":"125080","taggings":"842614","streamable":"1","wiki":{}},{"name":"hard rock","url":"https://www.last.fm/tag/hard+rock","reach":"113432","taggings":"838535","streamable":"1","wiki":{}},{"name":"instrumental","url":"https://www.last.fm/tag/instrumental","reach":"122246","taggings":"828412","streamable":"1","wiki":{}},{"name":"singer-songwriter","url":"https://www.last.fm/tag/singer-songwriter","reach":"107593","taggings":"824152","streamable":"1","wiki":{}},{"name":"black metal","url":"https://www.last.fm/tag/black+metal","reach":"60908","taggings":"808173","streamable":"1","wiki":{}},{"name":"dance","url":"https://www.last.fm/tag/dance","reach":"131026","taggings":"789870","streamable":"1","wiki":{}},{"name":"80s","url":"https://www.last.fm/tag/80s","reach":"99627","taggings":"768707","streamable":"1","wiki":{}},{"name":"Progressive rock","url":"https://www.last.fm/tag/Progressive+rock","reach":"94824","taggings":"705672","streamable":"1","wiki":{}},{"name":"death metal","url":"https://www.last.fm/tag/death+metal","reach":"70439","taggings":"696826","streamable":"1","wiki":{}},{"name":"hardcore","url":"https://www.last.fm/tag/hardcore","reach":"96336","taggings":"679358","streamable":"1","wiki":{}},{"name":"british","url":"https://www.last.fm/tag/british","reach":"92373","taggings":"678930","streamable":"1","wiki":{}},{"name":"heavy metal","url":"https://www.last.fm/tag/heavy+metal","reach":"89125","taggings":"676321","streamable":"1","wiki":{}},{"name":"soul","url":"https://www.last.fm/tag/soul","reach":"99184","taggings":"659113","streamable":"1","wiki":{}},{"name":"chillout","url":"https://www.last.fm/tag/chillout","reach":"102841","taggings":"642652","streamable":"1","wiki":{}},{"name":"electronica","url":"https://www.last.fm/tag/electronica","reach":"101048","taggings":"625640","streamable":"1","wiki":{}},{"name":"Classical","url":"https://www.last.fm/tag/Classical","reach":"73190","taggings":"555537","streamable":"1","wiki":{}},{"name":"Soundtrack","url":"https://www.last.fm/tag/Soundtrack","reach":"83072","taggings":"545224","streamable":"1","wiki":{}},{"name":"industrial","url":"https://www.last.fm/tag/industrial","reach":"82477","taggings":"545122","streamable":"1","wiki":{}},{"name":"rap","url":"https://www.last.fm/tag/rap","reach":"100713","taggings":"541195","streamable":"1","wiki":{}},{"name":"blues","url":"https://www.last.fm/tag/blues","reach":"94753","taggings":"539673","streamable":"1","wiki":{}},{"name":"punk rock","url":"https://www.last.fm/tag/punk+rock","reach":"96461","taggings":"531543","streamable":"1","wiki":{}},{"name":"thrash metal","url":"https://www.last.fm/tag/thrash+metal","reach":"61666","taggings":"475720","streamable":"1","wiki":{}},{"name":"acoustic","url":"https://www.last.fm/tag/acoustic","reach":"109276","taggings":"469975","streamable":"1","wiki":{}},{"name":"psychedelic","url":"https://www.last.fm/tag/psychedelic","reach":"76701","taggings":"466153","streamable":"1","wiki":{}},{"name":"metalcore","url":"https://www.last.fm/tag/metalcore","reach":"66089","taggings":"465425","streamable":"1","wiki":{}},{"name":"90s","url":"https://www.last.fm/tag/90s","reach":"56263","taggings":"463821","streamable":"1","wiki":{}},{"name":"japanese","url":"https://www.last.fm/tag/japanese","reach":"47699","taggings":"449630","streamable":"1","wiki":{}},{"name":"post-rock","url":"https://www.last.fm/tag/post-rock","reach":"64059","taggings":"434724","streamable":"1","wiki":{}},{"name":"german","url":"https://www.last.fm/tag/german","reach":"58681","taggings":"419935","streamable":"1","wiki":{}},{"name":"Progressive metal","url":"https://www.last.fm/tag/Progressive+metal","reach":"61394","taggings":"417731","streamable":"1","wiki":{}},{"name":"funk","url":"https://www.last.fm/tag/funk","reach":"81417","taggings":"414899","streamable":"1","wiki":{}},{"name":"hip hop","url":"https://www.last.fm/tag/hip+hop","reach":"75148","taggings":"411388","streamable":"1","wiki":{}},{"name":"new wave","url":"https://www.last.fm/tag/new+wave","reach":"63012","taggings":"409731","streamable":"1","wiki":{}},{"name":"trance","url":"https://www.last.fm/tag/trance","reach":"63856","taggings":"404674","streamable":"1","wiki":{}}]
        var f0=data[0]

        for (var i=0; i<data.length; i++){
            data[i]._point=Math.round(100*Number(data[i].taggings)/Number(f0.taggings))
        }
        return data.slice(0, 20)
    }
    render() {
        if (this.state.loading){
            return (
                <View style={{backgroundColor:colors.screen_bg, flex:1,}}>
                    <ActivityIndicator animating={true} style={styles.throbber} size="large" color={colors.yellow_bg}/>
                </View>
            )
        }
        else {
            var l=[]
            for (var i=this.state.data.length-1; i>=0; i--){
                var item=this.state.data[i]
               
                l.push(
                    <TouchableHighlight 
                        onPress={()=>this.tag_onClick(item)}
                        key={item.name}
                        style={[
                            styles.fchip, 
                            {
                                left: this.getRandomPaddingLeft(),
                                top: this.getRandomPaddingTop(),
                                // right: this.getRandomPaddingRight(),
                                // bottom: this.getRandomPaddingBottom(),
                                backgroundColor: this.getColor(i),
                            }
                            ]}>
                            <Text key={item.reach} style={[
                                styles.chip_text, 
                                {fontSize: this.state.minFontSize+(item._point/4)}
                            ]}>{item.name}</Text>
                   </TouchableHighlight>
                )
            }
            return (
                <ScrollView style={{backgroundColor:colors.screen_bg, flex:1, paddingBottom:1400, }}>
                    {l}
                </ScrollView>
            )
        }
    }
    getColor(i){
        // var ii= i % this.state.colorList.length
        // return this.state.colorList[ii]

        var ret
        if (i<5) 
            ret=this.state.colorList[0]
        else if (i<10) 
            ret=this.state.colorList[1]
        else if (i<15)
            ret=this.state.colorList[2]
        else 
            ret=this.state.colorList[3]

        return ret
    }
    getRandomPaddingLeft() {
        var d=Math.floor(Math.random() * deviceWidth * .8)
        // console.log('left', d)
        return d
    }
    getRandomPaddingTop() {
        var d=Math.floor(Math.random() * deviceHeight * .8)
        // console.log('top', d)
        return d
    }
    tag_onClick = (item) => {
        this.props.navigation.navigate('tag', item.name)
    }
}