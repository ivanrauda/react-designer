(function() {
  "use strict";

  function ProductImage(props){
    return <img src="../../../assets/red.jpg" alt="Product image" />;
  }

  function ProductCustomizer(props){
    return (
      <div className="customizer">
        <div className="product-images">
          <ProductImage />
        </div>
      </div>
    );
  }

  reactDOM.render(<ProductCustomizer />, document.getElementById('react-root');

})();