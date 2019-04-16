(function() {
  "use strict";

  function ProductImage(props){
    <img src="../../../assets/red.jpg" alt="" />
    retun React.createElement('img', {src="../../../assets/red.jpg", alt='Product image' })
  }

  function ProductCustomizer(props){
    return React.createElement(
      'div', 
      {className: 'customizer'}, 
      React.createElement('div', { className: 'product-image'}, React.createElement(ProductImage) )
    );
  }

  reactDOM.render(React.createElement(ProductCustomizer), document.getElementById('react-root');

})();
