import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
    return (
        <button className="reload-movies-button" onClick={props.reloadMovies}> Reload movies</button>
    )
}

export default ReloadMovieButton