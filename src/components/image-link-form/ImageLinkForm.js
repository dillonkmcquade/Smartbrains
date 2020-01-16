import React from "react";
import { connect } from "react-redux";
import { fetchFoodDataStartAsync } from "../../Redux/food/food.actions";
import "./imagelinkform.css";

class ImageLinkForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    const { fetchFoodDataStartAsync } = this.props;
    return (
      <div className="image-link-form">
        <div>
          <p className="f2 courier black">
            Insert a photo URL of your favorite food to see what ingredients it
            contains!
          </p>
        </div>
        <div className="center br-pill bg-light-green bbg">
          <form className="f4 center">
            <input
              className="f4 shadow-5"
              type="text"
              placeholder="Insert image url here.."
              onChange={this.onInputChange}
              required
            />
            <button
              type="button"
              className="f4 grow link ph3 pv2 dib white pointer bg-green"
              onClick={() => fetchFoodDataStartAsync(this.state.input)}
            >
              Detect
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFoodDataStartAsync: input => dispatch(fetchFoodDataStartAsync(input))
});

export default connect(null, mapDispatchToProps)(ImageLinkForm);
