import { useState } from "react";

function AddMovies({ addMovieHandler }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const addImage = (e) => {
    setImage(e.target.value);
  };
  const addRating = (e) => {
    setRating(e.target.value);
  };

  const submitHandler = () => {
    addMovieHandler({
      id: Math.random(),
      title: title,
      description: description,
      posterURL: image,
      rating: rating,
    });
  };

  return (
    <>
      <div className="new-movie">
        <div className="input-group">
          <label>Title: </label>
          <input type="text" onChange={addTitle} />
        </div>
        <div className="input-group">
          <label>Description: </label>
          <input type="text" onChange={addDescription} />
        </div>
        <div className="input-group">
          <label>Rating: </label>
          <input type="text" onChange={addRating} />
        </div>
        <div className="input-group">
          <label>Image: </label>
          <input type="text" onChange={addImage} />
        </div>

        <button className="add-movie" onClick={submitHandler}>
          Add Movie
        </button>
      </div>
      <div className="list"></div>
    </>
  );
}

export default AddMovies;