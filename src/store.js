import React, { Component } from 'react'
// import * as firebase from 'firebase'

// const firebaseConfig = {
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)

export default store={
    data_getCharts(numpage, fnCallBack){
        var url=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            fnCallBack(responseJson.artists.artist)
          })
    },
    data_getArtistInfo(artist, fnCallBack){
        //http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the%20beatles&api_key=a75185adbaec912b811ba1a63a931b59&format=json
        var url=`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            fnCallBack(responseJson.artist)
          })
    },
    data_getArtistAlbums(artist, fnCallBack){
      var url=`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            fnCallBack(responseJson.topalbums.album)
          })
    },
//------------
    data_getArtistSearch(artist, fnCallBack){
      //http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the%20beatles&api_key=a75185adbaec912b811ba1a63a931b59&format=json
      var url=`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          fnCallBack(responseJson.results.artistmatches.artist)
        })
    },
    data_getAlbumSearch(album, fnCallBack){
      //http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the%20beatles&api_key=a75185adbaec912b811ba1a63a931b59&format=json
      var url=`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          fnCallBack(responseJson.results.albummatches.album)
        })
    },
//------------
    data_getTopTags(fnCallBack){
      var url=`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
        fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            fnCallBack(responseJson.tags.tag)
          })
    },
    data_getTagTopArtists(tag, fnCallBack){
      var url=`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${tag}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          fnCallBack(responseJson.topartists.artist)
        })
    },
    data_getTagTopAlbums(tag, fnCallBack){
      var url=`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=a75185adbaec912b811ba1a63a931b59&format=json`
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          fnCallBack(responseJson.albums.album)
        })
    },
//------------    
    _mock_getCharts:function(){
        return {
            "artists":{
                "artist":[
                    {"name":"Panic! at the Disco","playcount":"104886563","listeners":"2120346","mbid":"b9472588-93f3-4922-a1a2-74082cdf9ce8","url":"https://www.last.fm/music/Panic%21+at+the+Disco","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/981699b166422c17b479eb69b8c3409b.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/981699b166422c17b479eb69b8c3409b.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/981699b166422c17b479eb69b8c3409b.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/981699b166422c17b479eb69b8c3409b.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/981699b166422c17b479eb69b8c3409b.png","size":"mega"}]},
                    {"name":"Tame Impala","playcount":"68089809","listeners":"1067875","mbid":"63aa26c3-d59b-4da4-84ac-716b54f1ef4d","url":"https://www.last.fm/music/Tame+Impala","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/a87a6e1f791a40549eddae42df72e70a.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/a87a6e1f791a40549eddae42df72e70a.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/a87a6e1f791a40549eddae42df72e70a.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/a87a6e1f791a40549eddae42df72e70a.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/a87a6e1f791a40549eddae42df72e70a.png","size":"mega"}]},
                    {"name":"Khalid","playcount":"6958689","listeners":"337288","mbid":"c6bfb05d-f570-46c8-98e1-e25441189770","url":"https://www.last.fm/music/Khalid","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/ff8d8c1d7870942425fc44ac48b13251.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/ff8d8c1d7870942425fc44ac48b13251.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/ff8d8c1d7870942425fc44ac48b13251.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/ff8d8c1d7870942425fc44ac48b13251.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/ff8d8c1d7870942425fc44ac48b13251.png","size":"mega"}]},
                    {"name":"Beyoncé","playcount":"149386113","listeners":"3502973","mbid":"859d0860-d480-4efd-970c-c05d5f1776b8","url":"https://www.last.fm/music/Beyonc%C3%A9","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/cce2f1a5fd0cbff5c11479d6d1a4eb21.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/cce2f1a5fd0cbff5c11479d6d1a4eb21.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/cce2f1a5fd0cbff5c11479d6d1a4eb21.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/cce2f1a5fd0cbff5c11479d6d1a4eb21.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/cce2f1a5fd0cbff5c11479d6d1a4eb21.png","size":"mega"}]},
                    {"name":"The Chainsmokers","playcount":"18120996","listeners":"736240","mbid":"91a81925-92f9-4fc9-b897-93cf01226282","url":"https://www.last.fm/music/The+Chainsmokers","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/ca98a740c6487115c8bde0d89d4a47ed.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/ca98a740c6487115c8bde0d89d4a47ed.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/ca98a740c6487115c8bde0d89d4a47ed.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/ca98a740c6487115c8bde0d89d4a47ed.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/ca98a740c6487115c8bde0d89d4a47ed.png","size":"mega"}]},
                    {"name":"The Cure","playcount":"152443848","listeners":"2888044","mbid":"69ee3720-a7cb-4402-b48d-a02c366f2bcf","url":"https://www.last.fm/music/The+Cure","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/c0246a80dd73471f83e56c569fd47a7e.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/c0246a80dd73471f83e56c569fd47a7e.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/c0246a80dd73471f83e56c569fd47a7e.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/c0246a80dd73471f83e56c569fd47a7e.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/c0246a80dd73471f83e56c569fd47a7e.png","size":"mega"}]},
                    {"name":"Green Day","playcount":"185307236","listeners":"3692077","mbid":"084308bd-1654-436f-ba03-df6697104e19","url":"https://www.last.fm/music/Green+Day","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/7116191298ed6f839cd3965c533368d0.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/7116191298ed6f839cd3965c533368d0.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/7116191298ed6f839cd3965c533368d0.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/7116191298ed6f839cd3965c533368d0.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/7116191298ed6f839cd3965c533368d0.png","size":"mega"}]},
                    {"name":"Marshmello","playcount":"4454536","listeners":"323856","mbid":"","url":"https://www.last.fm/music/Marshmello","streamable":"0","image":[{"#text":"https://lastfm-img2.akamaized.net/i/u/34s/3f632084024e5540bbe717fd4692ca28.png","size":"small"},{"#text":"https://lastfm-img2.akamaized.net/i/u/64s/3f632084024e5540bbe717fd4692ca28.png","size":"medium"},{"#text":"https://lastfm-img2.akamaized.net/i/u/174s/3f632084024e5540bbe717fd4692ca28.png","size":"large"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/3f632084024e5540bbe717fd4692ca28.png","size":"extralarge"},{"#text":"https://lastfm-img2.akamaized.net/i/u/300x300/3f632084024e5540bbe717fd4692ca28.png","size":"mega"}]}
                ],
            "@attr":{"page":"1","perPage":"50","totalPages":"229461","total":"11473023"}
            }
        };
    },
    _mock_getArtistInfo:function(){
        return {
            "artist": {
              "name": "The Beatles",
              "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
              "url": "https://www.last.fm/music/The+Beatles",
              "image": [
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/34s/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": "small"
                },
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/64s/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": "medium"
                },
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/174s/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": "large"
                },
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": "extralarge"
                },
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": "mega"
                },
                {
                  "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/047a20990f8ffd0442352e67c4e0bcdc.png",
                  "size": ""
                }
              ],
              "streamable": "0",
              "ontour": "0",
              "stats": { "listeners": "3613740", "playcount": "505428022" },
              "similar": {
                "artist": [
                  {
                    "name": "John Lennon",
                    "url": "https://www.last.fm/music/John+Lennon",
                    "image": [
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/df509760a62f4587838bc68b35a81a9b.png",
                        "size": "small"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/df509760a62f4587838bc68b35a81a9b.png",
                        "size": "medium"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/df509760a62f4587838bc68b35a81a9b.png",
                        "size": "large"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/df509760a62f4587838bc68b35a81a9b.png",
                        "size": "extralarge"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/df509760a62f4587838bc68b35a81a9b.png",
                        "size": "mega"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/df509760a62f4587838bc68b35a81a9b.png",
                        "size": ""
                      }
                    ]
                  },
                  {
                    "name": "Paul McCartney",
                    "url": "https://www.last.fm/music/Paul+McCartney",
                    "image": [
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": "small"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": "medium"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": "large"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": "extralarge"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": "mega"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/b5f5ddbcd804480cac99139823eeb74c.png",
                        "size": ""
                      }
                    ]
                  },
                  {
                    "name": "George Harrison",
                    "url": "https://www.last.fm/music/George+Harrison",
                    "image": [
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": "small"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": "medium"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": "large"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": "extralarge"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": "mega"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/1f63ae2efbf74a82ab7aa5fc68ec7607.png",
                        "size": ""
                      }
                    ]
                  },
                  {
                    "name": "Paul McCartney & Wings",
                    "url": "https://www.last.fm/music/Paul+McCartney+&+Wings",
                    "image": [
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/9a485c2dc59e43d0a64a850599492640.png",
                        "size": "small"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/9a485c2dc59e43d0a64a850599492640.png",
                        "size": "medium"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/9a485c2dc59e43d0a64a850599492640.png",
                        "size": "large"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9a485c2dc59e43d0a64a850599492640.png",
                        "size": "extralarge"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9a485c2dc59e43d0a64a850599492640.png",
                        "size": "mega"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/9a485c2dc59e43d0a64a850599492640.png",
                        "size": ""
                      }
                    ]
                  },
                  {
                    "name": "Ringo Starr",
                    "url": "https://www.last.fm/music/Ringo+Starr",
                    "image": [
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": "small"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": "medium"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": "large"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": "extralarge"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": "mega"
                      },
                      {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/22f73c11a39942d5bd1068b9a6f35aad.png",
                        "size": ""
                      }
                    ]
                  }
                ]
              },
              "tags": {
                "tag": [
                  { "name": "classic rock", "url": "https://www.last.fm/tag/classic+rock"},
                  { "name": "rock", "url": "https://www.last.fm/tag/rock" },
                  { "name": "british", "url": "https://www.last.fm/tag/british" },
                  { "name": "60s", "url": "https://www.last.fm/tag/60s" },
                  { "name": "pop", "url": "https://www.last.fm/tag/pop" }
                ]
              },
              "bio": {
                "links": {
                  "link": {
                    "#text": "",
                    "rel": "original",
                    "href": "https://last.fm/music/The+Beatles/+wiki"
                  }
                },
                "published": "03 Feb 2006, 06:05",
                "summary": "\nThe Beatles were an iconic rock group from Liverpool, England. They are frequently cited as the most commercially successful and critically acclaimed band in modern history, with innovative music, a cultural impact that helped define the 1960s and an enormous influence on music that is still felt today. Currently, The Beatles are one of the two musical acts to sell more than 1 billion records, with only Elvis Presley having been able to achieve the same feat. <a href=\"https://www.last.fm/music/The+Beatles\">Read more on Last.fm</a>",
                "content": "\nThe Beatles were an iconic rock group from Liverpool, England. They are frequently cited as the most commercially successful and critically acclaimed band in modern history, with innovative music, a cultural impact that helped define the 1960s and an enormous influence on music that is still felt today. Currently, The Beatles are one of the two musical acts to sell more than 1 billion records, with only Elvis Presley having been able to achieve the same feat.\n     \nAfter conquering Europe, with successful tours to Germany and Sweden, the Beatles led the mid-1960s musical 'British Invasion' into the United States. Although their initial musical style was rooted in 1950s rock and roll and homegrown skiffle, the group explored a great variety of musical styles including Psychedelic Rock, Experimental, Ballads, Western and Indian Classical among others. Their clothes, hairstyles, and statements made them trend-setters, while their growing social awareness saw their influence extend into the social and cultural revolutions of the 1960s. \n     \nEarly on, the band consisted of George Harrison, John Lennon, Paul McCartney, Stuart Sutcliffe, and Pete Best. The band got its first major break playing in Hamburg, Germany, at some rather seedy nightclubs, beginning in 1960. While in Germany, they also met Klaus Voormann, who would later design the cover of the group's 1966 album Revolver. Sutcliffe remained in Germany when the others returned to England and became engaged to fellow artist Astrid Kirchherr, only to die a few years later of a brain hemorrhage. \n\nIn 1961, Brian Epstein heard their sound and was thrilled enough to sign on as their manager, even though he had no previous experience in that field. After Decca Records rejected the band with the famous comment \"guitar groups are on the way out, Mr. Epstein\", his efforts eventually led, in 1962, to an audition with EMI producer George Martin, who signed them to EMI's Parlaphone label. \n\nLater, due in part to Martin's refusal to use him on recordings, Pete Best was replaced by Ringo Starr, the drummer from another big Liverpool band known as Rory Storm and the Hurricanes. Ringo was supposed to play on their first single, \"Love Me Do\", but George Martin had Andy White, a session drummer, play instead (Ringo can be heard on the album version of the song).\n     \nIn 1963, The Beatles initiated a craze known as \"Beatlemania\" in the UK with the song \"Please Please Me\". Their first album of the same title was recorded in just one day. This fame spread internationally and, in February of 1964, they arrived in the United States. Their first appearance in the States was on the Ed Sullivan Show, following \"I Want to Hold Your Hand\" going #1 in the States. With this success, the Beatles released two feature length films within the space of two years: A Hard Day's Night and Help!. The songs from both films were penned by Lennon and McCartney, and albums followed their release. In Help!, the Beatles were given greater creative freedom, deciding for example to head to the exotic location of the Bahamas simply to shoot one scene.  \n     \nThe Beatles were comprised of four members in the long run: John Lennon (vocals, rhythm guitar, piano), Paul McCartney (vocals, bass guitar, piano, guitar), George Harrison (lead guitar, vocals), and Ringo Starr (percussion, vocals). Lennon and McCartney were the main songwriters and singers, although songs penned by George started showing up more frequently on later albums. Ringo traditionally sang one song on each record. George Martin produced most of the Beatles' records, and was a highly influential part of the band's sound on most of their records. He also played the renowned solo on \"In My Life\" (Rubber Soul). \n     \nFor years, The Beatles showed an amazing talent for writing hit after hit. In 1966, they ceased performing in concert (apparently they grew weary of the constant screaming from the fans, which always got so loud they could never hear themselves play; another contributing factor was the extraordinary lengths they had to go to for security reasons before and after each performance) and began exploring new sounds in the studio. This is especially apparent in albums such as Rubber Soul, Revolver, Sgt. Pepper's Lonely Hearts Club Band and The Beatles, sometimes known as \"The White Album\". The White Album  is considered the band's most experimental. The novel sounds featured are due to the growing presence of Yoko Ono (Lennon's wife), as demonstrated by the song \"Revolution 9\", and the band's increasing use of drugs. The song \"Lucy in the Sky with Diamonds\" (from Sgt. Pepper's) was rumored to be an ode to LSD, although the band vehemently denied any link; they instead insisted that it described a drawing made by John Lennon's son, Julian Lennon. After the death of Brian Epstein, the Beatles began to unravel at the seams. The Beatles officially split at the dawn of 1970; Lennon had unofficially quit the previous year and the band had maintained the front of being together to protect their business interests. McCartney, who was the first to announce that he had officially \"quit\" the band and that they no longer existed, was often blamed for the band's ending although by the end he was the only one willing to carry on and was, by stating the group no longer existed, admitting to the facts.  \n     \nThe Beatles never reunited properly in the 1970s as they never fully recovered from the acrimony associated with their breakup. They did, however, make two new records in 1994, despite Lennon's 1980 death, for the Anthology project. \"Free as a Bird\" and \"Real Love\" were based on demo tapes made by Lennon and sent to McCartney by his widow Yoko Ono. They charted in the UK at #2 and #4 respectively.\n  \nThe Beatles also created some of the first music videos, having filmed promotional films in 1965 for broadcasters to show across the US and Europe rather than have to appear live. Their 1967 film promos for \"Strawberry Fields Forever\" and \"Penny Lane\" have even more similarity to modern music videos, with each one created for just the individual song, and without the appearance of being a recording of a live performance. \n\nThe Beatles were also the source of a number of controversies and conspiracy theories. John Lennon was quoted in 1966 as saying the Beatles were \"more popular than Jesus Christ\", causing protests in many parts of the USA; although he publicly apologized for the statement, he also later claimed it was a contributing factor in the Beatles ending touring. \n\nA widespread urban legend that started in 1969 claimed that Paul McCartney was dead and had been replaced by a lookalike. The rumor was referred to by members of the Beatles a number of times, including John Lennon's song \"How Do You Sleep?\".\n   \nGeorge Harrison passed away in 2001. His death was marked by a large concert event in the Albert Hall. The Concert for George took place a year to the day of George's death. Ringo Starr and Paul McCartney continue to make music. Ringo released Choose Love and Paul released Chaos and Creation in the Backyard both in 2005. Paul's latest release is 2007's Memory Almost Full. Also in 2008 Ringo released Liverpool 8.\n\nGeorge Harrison once said “The Beatles will exist without us.” Deftly short and simple, this quote surmises their legacy, showing how The Beatles as an entity transcends not only the music or entertainment industry, but even the members themselves. \n     \nIn 2006, a collaboration between Apple Corps, and Cirque du Soleil, culminated in a show called Love, showing only in Las Vegas. Starr, McCartney, Ono and Harrison's widow, Olivia, all were involved in the production. The accompanying album is composed of new takes on original Beatles recordings, spliced together and creating new feels for several of their songs. The project was put together by renowned Beatles producer George Martin and his son Giles.  \n     \nThe tracks in \"Love\" contain parts from original Beatles demo recordings, and George Martin created a new orchestral arrangement for an acoustic demo version of Harrison's \"While My Guitar Gently Weeps\". \n\nIn October 2007, Across the Universe, a musical film which incorporated Beatles songs into its narrative, was released in cinemas to mixed reviews. The film incorporates, and indeed appears to be built around, various songs throughout the Beatles' career, sung by the principles. Songs such as \"I Want to Hold Your Hand\" and \"Dear Prudence\" actually tell the story at hand, while songs such as \"Let it Be\" and \"Across the Universe\" seem instead to provide a background or atmosphere around which the story is built.\n\n <a href=\"https://www.last.fm/music/The+Beatles\">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply."
              }
            }
          }          
    },
}
