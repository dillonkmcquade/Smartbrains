import React from "react";
import {connect} from 'react-redux';
import {fetchFoodDataStartAsync} from '../Redux/food/food.actions';

class ImageLinkForm extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  render(){
    const { fetchFoodDataStartAsync} = this.props;
  return (
    <div>
      <div>
        <p className="f2 courier light-gray">
          {
            "Insert a photo URL of your favorite food to see what ingredients it contains!"
          }
        </p>
      </div>
      <div className="center mw7 br-pill bg-light-green br2 pa3 bbg">
        <form className="f4 pa2 w-70 center">
          <input
            className="f4 pa2 w-70 shadow-5 center"
            type="text"
            placeholder="Insert image url here.."
            onChange={this.onInputChange}
            required
          />
          <button
            type="button"
            className="f4 w-30 grow link ph3 pv2 dib white pointer bg-green"
            onClick={fetchFoodDataStartAsync(this.state.input)}
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  )};
};

const mapDispatchToProps = dispatch => ({
  fetchFoodDataStartAsync: () => dispatch(fetchFoodDataStartAsync())
})

export default connect(null, mapDispatchToProps)(ImageLinkForm);
