
import React, { useState } from "react";

const Profile = () => {
  const [person, setPerson] = useState({
    fullName: "Ibrahima Mbaye",
    bio: "Joueur Paris SG, Nationalité Sénégalaise, poste attaquant",
    img: "https://www.onzedafrik.com/wp-content/uploads/2025/11/mbaye-810x580.webp",
    profession: "Joueur",
  });

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <h1>{person.fullName}</h1>
      ) : (
        <p>profile caché</p>
      )}

      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Profile;
