(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      return props.sizes.map(function(num) {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select defaultValue={props.size} name="sizeOptions" id="size-options">
          {sizeOptions()}
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    return (
      <img src={`../../../assets/${props.color}.jpg`} alt="Product Image" />
    );
  }

  var ProductCustomizer = createReactClass({
    getInitialState: function() {
      var sizes = window.Inventory.allSizes;

      return {
        color: "red",
        size: 8,
        sizes: sizes
      };
    },

    render: function() {
      return (
        <div className="customizer">
          <div className="product-image">
            <ProductImage color={this.state.color} />
          </div>
          <div className="selectors">
            <SizeSelector size={this.state.size} sizes={this.state.sizes} />
          </div>
        </div>
      );
    }
  });

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
