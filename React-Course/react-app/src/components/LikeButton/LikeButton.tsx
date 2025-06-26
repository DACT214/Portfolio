import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState, MouseEvent } from "react";

interface Props {
  onClick: () => void;
}

function LikeButton({ onClick }: Props) {
  const [liked, setLikeStatus] = useState(false);

  const handleClick = () => {
    setLikeStatus(!liked);
    onClick();
  };

  return (
    <>
      {liked && <FaHeart color="red" onClick={handleClick} />}
      {!liked && <FaRegHeart onClick={handleClick} />}
    </>
  );
}

export default LikeButton;
