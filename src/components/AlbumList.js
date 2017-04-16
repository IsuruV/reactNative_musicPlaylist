import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import Album from './Album';
// import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  constructor(props){
    super(props);
    this.state = {albums:[]};
  }

  componentWillMount(){
    this.fetchAlbums();
  }

  fetchAlbums(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}))
  }

  renderAlbums(){
    return this.state.albums.map((al) => <Album key={al.title} album={al}/> )
  }

  render(){
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}
export default AlbumList;

// http://rallycoding.herokuapp.com/api/music_albums
