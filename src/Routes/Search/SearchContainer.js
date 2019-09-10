import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    searchTerm: "",
    movieResults: null,
    tvResults: null,
    error: null,
    loading: false
  };
  // componentDidMount() {
  //   this.handleSubmit();
  // }
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { searchTerm } = this.state;
      this.setState({
        loading: true
      });
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch (error) {
      this.setState({ error: "Can't search the title" });
    } finally {
      this.setState({ loading: false });
    }
  };

  updateTerm = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  render() {
    const { searchTerm, movieResults, tvResults, error, loading } = this.state;

    return (
      <SearchPresenter
        searchTerm={searchTerm}
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    );
  }
}
