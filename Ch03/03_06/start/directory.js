(function() {
  "use strict";

  function Person(props) {
    return (
      <div className="person">
        <h3>
          {props.person.name}, {props.person.title}
        </h3>

        <p>
          <img
            className="size-medium alignright"
            src={props.person.img}
            alt={props.person.name}
            width="300"
            height="300"
            sizes="(max-width: 300px) 100vw, 300px"
          />

          {props.person.bio}
        </p>
      </div>
    );
  }

  function People(props) {
    return (
      <div className="results">
        {props.people.map(function(person) {
          return <Person key={person.id} person={person} />;
        })}
      </div>
    );
  }

  function Filters(props) {
    var titles = window.LMDirectory.titles;

    return (
      <form action="" id="directory-filters">
        <div className="group">
          <label htmlFor="person-name">Name:</label>
          <input
            type="text"
            name="person_name"
            placeholder="Name of employee"
            id="person-name"
          />
        </div>
        <div className="group">
          <label htmlFor="person-title">Job Title:</label>
          <select name="person_title" id="person-title">
            <option value="">- Select -</option>
            {titles.map(function(title) {
              return (
                <option value={title.key} key={title.key}>
                  {title.display}
                </option>
              );
            })}
          </select>
        </div>
        <div className="group">
          <label>
            <input type="checkbox" value="1" name="person_intern" /> Intern
          </label>
        </div>
      </form>
    );
  }

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
