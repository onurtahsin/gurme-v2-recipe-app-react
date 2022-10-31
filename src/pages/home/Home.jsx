import { HeaderText, HomeImg, ImgDiv } from "./Home.styles";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import Plate from "../../img/plate.svg";
import { StyledImg } from "../login/Login.styles";
// import homeSvg from "../../assets/home.svg";
const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState("");

  const apiKey = "5de7c992664038498e1977584dd23e10";
  const appId = "b94aa4b9";
  const url = `https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${selectedMeal}`;
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        // <ImgDiv>
        //   <HomeImg src={homeSvg} />
        // </ImgDiv>
        <p>burası</p>
      )}

      {recipes?.length === 0 && (
        <>
          <StyledImg src={Plate} />
          <HeaderText>No food found, Maybe it was eaten</HeaderText>
        </>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
