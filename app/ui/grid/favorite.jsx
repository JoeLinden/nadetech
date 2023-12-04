import { useState } from "react"
import axios from "axios";

const Favorite = ({ videoID }) => {

  // Create a new entry in the favorites table with the clicked nade's id
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = async () => {
    try {
      await axios.post("/api/favorites", { videoID }, { withCredentials: true });
      setIsFavorited(true);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <button 
      className="favorite"
      onClick={handleFavorite}>
        {isFavorited ? "Favorited" : "Favorite"}
    </button>
  )
}

export default Favorite