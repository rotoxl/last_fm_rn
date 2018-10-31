import {StyleSheet} from 'react-native'

import { Dimensions } from 'react-native';
export const colors={
    yellow_bg:'#f9c632',
    yellow_fg_active:'#ffffff',
    yellow_fg_inactive:'#fdf7e4',

    header_bg:'#3c3c3c',
    accent:'#f9c632', //yellow
    white:'#ffffff',
    black:'black',
    // darkgray:'#4A4A4A',
    // lightgray:'#9B9B9B',
    // white:'white',

    // red:'#ff6347',
    // orange:'#eb993d',
    // yellow:'#e6c045',
    // green:'#62bc46',
    // blue:'#40ade4',
    // purple:'#c17fd2',
}
var screen=Dimensions.get('window')

const posterWidth=screen.width/2.5
const posterHeight=screen.width/(.7*2.5)

const marginH=16, paddingH=8, paddingV=5
const barHeight=85
const headerHeight=posterHeight+2*marginH

export const styles = StyleSheet.create({
    throbber:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        flex:1,
        backgroundColor:colors.white, 
    },
    // list: {
    //     justifyContent: 'flex-start',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    // },
    item: {
        flex: 1,
        margin: 0,
        width:screen.width/2,
        height: 204,
        maxHeight:204,

        backgroundColor:colors.yellow_fg_inactive,
    }, 

    backdrop_container:{
        flex:1
    },
    backdrop_image: {
        left:0, width: screen.width,
        top:0, bottom:0,
        flex:1, 
        position: 'absolute',
        resizeMode: 'cover',
    },

    header_container:{
        top:barHeight,
        height:headerHeight,
    },
    poster_container:{
        top:marginH,
        left:marginH,
        width:posterWidth,
        height:posterHeight,

        borderRadius:marginH,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 5,},
        shadowOpacity: 0.25,
    }, 
    poster_image:{
        left:0, top:0, width:'100%', height:'100%', flex:1,
    },

    title_block:{
        position:'absolute',
        left:marginH*2+posterWidth,
        top:marginH+(posterHeight/2)
    },
    textWithShadow:{
        color:'black',
        textShadowColor: 'white',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 7
    },

    chips_container:{
        position:'absolute',
        left:0,
        top:marginH*2.5,

        flex:1, 
        width:screen.width-(marginH*2+posterWidth)
    }, 
    chip:{
        position:'relative',
        backgroundColor:colors.accent,
        borderRadius:marginH,
        padding:paddingH,
        margin:2, width:null
    },
    chip_text:{
        color:colors.white,
        width:null,
    },


    bio_container:{
        left:marginH, width:screen.width-2*marginH,
        top:barHeight,
        minHeight:150,

        paddingLeft:paddingH,
        paddingRight:paddingH,
        paddingTop:paddingV,
        paddingBottom:paddingV,
        
        backgroundColor:'rgba(52, 52, 52, 0.4)', 
    },
    bio_moreButton:{
        position:'absolute', 
        left:0, right:0,
        bottom:-25,height:15,

        flex:1, 

        flexDirection:'row', 
        justifyContent: 'flex-end',
    },

    relatedArtist_container:{        
        top:barHeight+marginH,
        //top:posterHeight*2-marginH+barHeight,
        height:140,
        // backgroundColor:'rgba(52, 52, 52, 0.4)', 
    },
    relatedArtist_title:{
        left:marginH, paddingLeft:paddingH,
        color:'white',
    },
    relatedArtist_list:{
        left: marginH,
        height:90,

    },
    relatedArtist_artist_circle:{
        marginLeft:marginH,

        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor:'rgba(52, 52, 52, 0.4)', 
    },
    relatedArtist_img:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor:'rgba(52, 52, 52, 0.4)', 
    }
    

})