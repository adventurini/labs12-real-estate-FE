import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import { nextPage } from '../../../actions/designStudioActions';
import Button from '../../buttons/Button';

function ImageGallery({ searchResults, nextPage, currentSearch }) {
  // () => nextPage(currentSearch)
  return (
    <div className="design_studio_img_container">
      {/* <Button clickEvent={() => nextPage(currentSearch)} buttonText="Next" buttonStyle="pagination_btn" /> */}
      {searchResults &&
        searchResults.map(result => {
          return <ImageCard result={result} key={result.id} />;
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchResults: state.designStudioReducer.searchResults.results,
    currentSearch: state.designStudioReducer.currentSearch
  };
};

export default connect(
  mapStateToProps,
  { nextPage }
)(ImageGallery);