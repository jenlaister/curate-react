import React, { Component } from 'react'
import Piece from './Piece'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGallery, deleteGallery } from '../actions'
import loading from '../assets/images/koolaid.png'
import Search from './Search'
import SearchResults from './SearchResults'
import EditGallery from './EditGallery'


class Gallery extends Component{

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
        <EditGallery name={gallery.name} description={gallery.description} gallery={gallery.id}/>
        <h1>{gallery.name}</h1>
        <h2>{gallery.description}</h2>
        <Search />
          {gallery.piece_ids.map( piece_id => <Piece key={piece_id} id={piece_id} gallery_id={gallery.id}/>)}
          <button className="btn" type="submit" onClick={this.handleDelete.bind(this)}>Delete Gallery</button>

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
