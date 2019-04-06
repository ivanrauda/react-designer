(function() {
  "use strict";

  function ProductImage(props) {
    return <img src="../../../assets/red.jpg" alt="Product Image" />;
  }

  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
