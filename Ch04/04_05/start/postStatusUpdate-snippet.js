class {
	postStatusUpdate(evt) {
    evt.preventDefault();

    var newStatus = {
      msg: this.state.messageText,
      type: this.state.messageType,
      time: date.format(new Date(), "YYYY-MM-DD, HH:mm")
    };

    axios.post(this.props.apiUrl + "/post.php", newStatus).then(
      function(response) {
        console.log(response);
        
        if (response.data.success) {
          // Update state
        }
      }.bind(this)
    );
  }
}
