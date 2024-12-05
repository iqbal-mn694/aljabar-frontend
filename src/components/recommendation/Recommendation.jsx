import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import Table from "./Table";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";

function Recommendation() {
  const [searchParams] = useSearchParams();
  const [recommendations, setRecommendations] = useState([]);
  const song = searchParams.get("song");
  const navigate = useNavigate();
 
  useEffect(() => {
    if(!song) {
      navigate('/');
    }
  }, [song, navigate]);

  useEffect(() => {
    if(song) {
      const recommendationData = async () => {
        try {
          const response = await fetch(`http://localhost:8000/match?song=${song}`);
          const data = await response.json();
          setRecommendations(data);
        } catch (error) {
          console.log(error);
        }
      }

      recommendationData();
    }
  }, [song])
  return (
    <> 
      <Header />
      <Table songs={recommendations} />
      <ButtonBack />
      <Footer />
    </>
  )
}

export default Recommendation;