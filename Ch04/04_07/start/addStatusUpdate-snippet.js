class {
  addStatusMessage(status) {
    var updatedStatuses = this.state.statuses.slice(0);

    updatedStatuses.push(status);

    this.setState({
      statuses: updatedStatuses
    });
  }
}