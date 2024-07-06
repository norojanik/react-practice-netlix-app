import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deleteMovies}>Delete all</button>
    )
}

export default AllDeleteButton