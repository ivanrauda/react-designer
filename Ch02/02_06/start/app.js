(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      var sizes = window.Inventory.allSizes;

      return sizes.map(function(num) {
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
        <select name="sizeOptions" id="size-options">
          {sizeOptions()}
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    return <img src="../../../assets/red.jpg" alt="Product Image" />;
  }

  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
        <div className="selectors">
          <SizeSelector />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
