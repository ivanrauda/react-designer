class {
  // search the whole employee list with current filters
  updatePeopleList() {
    var filteredPeople = window.LMDirectory.people.filter(
      function(person) {
        return (
          person.intern === this.state.isIntern &&
          (this.state.currentName === "" ||
            person.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !==
              -1) &&
          (this.state.currentTitle === "" || person.title_cat === this.state.currentTitle)
        );
      }.bind(this)
    );

    this.setState({
      people: filteredPeople
    });
  }
}
