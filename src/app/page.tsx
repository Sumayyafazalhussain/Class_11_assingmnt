import React from "react";
import HelloMessage from '../components/HelloMesssage'

const Home = () => {
  const userName = "Sumayya Fazal Hussain" //my user name
const favoriteColor="blue"//my fvrt color
const  favoriteDish="biryani"//my fvrt dish
  return (
    <main>
      <HelloMessage name={userName}
      favoriteColor={favoriteColor}
      favoriteDish={favoriteDish}/>
    </main>
  );
};

export default Home;