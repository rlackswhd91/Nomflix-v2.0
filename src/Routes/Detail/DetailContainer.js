import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      history: { push },
      match: {
        params: { id }
      }
    } = this.props;
    const { isMovie } = this.state;
    // id must be number, if string is passed, parseInt will return NaN.
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        //   save data as result that we declared above
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch (error) {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter>
    );
  }
}
