import React, { Component } from 'react'
import Piece from './Piece'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGallery, deleteGallery } from '../actions'
import loading from '../assets/images/koolaid.png'
import Search from './Search'
import SearchResults from './SearchResults'


class Gallery extends Component{

  componentDidMount(){
    this.props.fetchGallery()
  }

  handleDelete(event) {
  
    this.props.deleteGallery(this.props.gallery.id)
  }


  render(){
    const {gallery} = this.props
    if (!gallery.piece_ids) {
      return <div>loading gallery<img src={loading} className="loading" alt="spinner" /></div>
      }
    else {
    return(
      <div className="gallery">
        <h1>Gallery Component</h1>
        <h1>{gallery.name}</h1>
        <h2>{gallery.description}</h2>
          {gallery.piece_ids.map( piece_id => <Piece key={piece_id} id={piece_id} gallery_id={gallery.id}/>)}
          <button className="btn" type="submit" onClick={this.handleDelete.bind(this)}>Delete Gallery</button>
        <Search />
        <SearchResults gallery={gallery.id} />
    </div>
    )
  }
}
}

function mapStateToProps(state){
  return {
    gallery: state.gallery
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchGallery, deleteGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
