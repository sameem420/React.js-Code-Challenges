import { useState, useEffect } from "react";

const getDogPic = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};

export default function DogPics() {
  const [dogPic, setDogPic] = useState("");

  useEffect(() => {
    setDogPic(
      "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
    );
  }, []);

  return (
    <div className="dog-pics">
      <img src={dogPic} alt="Dog pic" />
      <br />
      <button onClick={async () => setDogPic(await getDogPic())}>🐶</button>
    </div>
  );
}
