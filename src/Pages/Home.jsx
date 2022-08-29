import Form from "../Components/Form";
import { useEffect, useState } from "react";
const Home = () => {
  const [data, setData] = useState("");
  const [dados, setDados] = useState({});

  async function handleRequisicao() {
    const apiKey = "4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM";
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`
    );
    const json = await response.json("");
    setDados(json)
  }
  const handleClick = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  useEffect(() => {
    console.log(dados)
    handleRequisicao();
  }, [data]);

  return (
    <div>
      <div>
        <Form func={handleClick} />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
