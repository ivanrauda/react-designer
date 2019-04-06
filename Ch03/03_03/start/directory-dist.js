"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  "use strict";

  var Directory = function (_React$Component) {
    _inherits(Directory, _React$Component);

    function Directory(props) {
      _classCallCheck(this, Directory);

      var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

      _this.state = {
        people: window.LMDirectory.people
      };
      return _this;
    }

    _createClass(Directory, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "company-directory" },
          React.createElement(
            "h2",
            null,
            "Company Directory"
          ),
          React.createElement(
            "p",
            null,
            "Learn more about each person at Leaf & Mortar in this company directory."
          ),
          React.createElement(Filters, null),
          React.createElement(People, { people: this.state.people })
        );
      }
    }]);

    return Directory;
  }(React.Component);

  ReactDOM.render(React.createElement(Directory, null), document.getElementById("directory-root"));
})();
//# sourceMappingURL=directory-dist.js.map