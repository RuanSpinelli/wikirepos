
import Input from '../components/Input';
import gitlogo from "../assets/github-logo.png";
import {Container} from './styles';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from "../components/Button";
import {api} from "../service/api"

function App() {

  const [currentRepo, setCurrentRepo] = useState("");
  const [respos, setRespos] =useState([]);
  
  const handleRemoveRepo = (id) => {
  setRespos(prev => prev.filter(repo => repo.id !== id));
  };

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {

        const isExist = respos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRespos(prev => [...prev, data]);
          setCurrentRepo("");
          return
        }
        
      }
    } catch (error) {
      console.error("Erro ao buscar repositório:", error);
      alert("Repositório não encontrado!");
    }
  };


  return (
    <Container>
      <img src={gitlogo} width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button children={"Buscar"} onClick={handleSearchRepo}/>
      {respos.map(repo => (<ItemRepo repo={repo} onRemove={handleRemoveRepo}/>))}
      
    </Container>
  );
}

export default App;
