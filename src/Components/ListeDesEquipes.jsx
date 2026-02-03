import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function ListeDesEquipes() {
  const [equipes, setEquipes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:2005/Equipes`)
      .then((res) => res.json())
      .then((data) => setEquipes(data));
  }, []);
  const navigate = useNavigate();
  const handleBtnMatch = (param) => {
    navigate(`/matchs/${param}`);
  };
  return (
    <div>
      <h1>ListeDesEquipes</h1>
      <table border="2" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom De L'equipe</th>
            <th>Image De L'equipe</th>
            <th>Group De L'equipe</th>
            <th>Liste Des Match</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((e) => {
            return (
              <tr key={e.id}>
                <th>{e.id}</th>
                <th>{e.nom}</th>
                <th>
                  <img
                    src={e.photo}
                    style={{ width: "200px", height: "100px" }}
                  />
                </th>
                <th>{e.group}</th>
                <th>
                  <button onClick={() => handleBtnMatch(e.id)}>
                    voire les match
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
