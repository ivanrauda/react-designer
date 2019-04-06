(function() {
  "use strict";

  class Directory extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        people: window.LMDirectory.people
      };
    }

    render() {
      return (
        <div className="company-directory">
          <h2>Company Directory</h2>
          <p>Learn more about each person at Leaf & Mortar in this company directory.</p>

          <Filters />

          <People people={this.state.people} />
        </div>
      );
    }
  }

  ReactDOM.render(<Directory />, document.getElementById("directory-root"));
})();
