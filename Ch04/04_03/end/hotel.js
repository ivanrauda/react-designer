class PostForm extends React.Component {
  constructor(props) {
    super(props);

    // Type options are an object; convert to an array and map
    this.typeOptions = Object.keys(props.messageTypes).map(function(key) {
      if (props.messageTypes.hasOwnProperty(key)) {
        return (
          <option key={key} value={key}>
            {props.messageTypes[key]}
          </option>
        );
      }
    });

    // so we don't have to type this over and over
    this.defaultType = this.typeOptions[0].key;
  }

  render() {
    return (
      <form>
        <h3>Post an Update</h3>

        <div className="field-group">
          <label htmlFor="txt-message">Message</label>
          <textarea id="txt-message" rows="2" />
        </div>

        <div className="field-group">
          <label htmlFor="txt-type">Type</label>
          <select id="txt-type">{this.typeOptions}</select>
        </div>

        <div className="field-group action">
          <input type="submit" value="Post Update" />
        </div>
      </form>
    );
  }
}

function StatusMessage(props) {
  var statusDate = date.parse(props.time, "YYYY-MM-DD, HH:mm"),
    dateFormat = "M/D/Y, h:mm A";

  return (
    <div className="status-message">
      {props.msg}
      <span className="name">— {props.type}</span>
      <span className="time">{date.format(statusDate, dateFormat)}</span>
    </div>
  );
}

class StatusMessageList extends React.Component {
  constructor(props) {
    super(props);

    this.stubStatuses = [
      {
        id: 1,
        msg:
          "The hot tub is currently closed for maintenance.  We expect it to be back up and running within 48 hours.",
        type: "management",
        time: "2018-03-30, 09:15"
      },
      {
        id: 2,
        msg: "The hot tub maintenance is complete.  Please enjoy a dip!",
        type: "management",
        time: "2018-03-30, 17:12"
      },
      {
        id: 3,
        msg:
          "The rice cooker is on the fritz, any fried rice dishes will require some extra time to cook.",
        type: "dining",
        time: "2018-04-02, 15:00"
      }
    ];

    this.state = {
      statuses: this.stubStatuses
    };
  }

  componentDidMount() {
    this.retrieveStatusMessages();
  }

  retrieveStatusMessages() {
    axios.get("http://localhost/reactjs/status_api/get.php").then(
      function(response) {
        this.setState({
          statuses: response.data
        });
      }.bind(this)
    );
  }

  displayStatusMessages() {
    return this.state.statuses.map(
      function(status) {
        return (
          <li key={status.id}>
            <StatusMessage
              msg={status.msg}
              type={this.props.messageTypes[status.type]}
              time={status.time}
            />
          </li>
        );
      }.bind(this)
    );
  }

  render() {
    return <ul id="status-list">{this.displayStatusMessages()}</ul>;
  }
}

class StatusMessageManager extends React.Component {
  constructor(props) {
    super(props);

    // just a property, doesn't have to be state
    this.messageTypes = {
      management: "Management",
      dining: "Dining Services",
      ops: "Operations",
      plumbing: "Plumbing",
      pool: "Pool"
    };

    this.apiUrl = "http://localhost/reactjs/status_api";

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div id="post-status">
          <PostForm messageTypes={this.messageTypes} />
        </div>
        <StatusMessageList messageTypes={this.messageTypes} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<StatusMessageManager />, document.getElementById("react-statusmanager"));
