import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function ListeDesMatchs() {
  const { id } = useParams();
  const [equipe, setEquipe] = useState([]);
  const [nomEquipe, setNomEquipe] = useState("");

  useEffect(() => {
    fetch(`http://localhost:2005/Equipes?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const foundMatchs = data.map((ele) => ele.matchs);
        // console.log(...foundMatchs);
        setEquipe(...foundMatchs);
        setNomEquipe(data.map((ele) => ele.name));
      });
  }, [id]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ListeDesMatchs De L'equipe : Maroc
      </h1>
      <div
        className="matchs-equipes"
        style={{ maxWidth: "400px", marginInline: "auto" }}
      >
        {equipe.map((ele, index) => {
          return (
            <div
              key={index}
              style={{
                border: "2px solid black",
                padding: "10px",
                marginBlock: "10px",
              }}
            >
              <div
                className="info"
                style={{ textAlign: "center", borderBottom: "2px solid black" }}
              >
                <h2>
                  {nomEquipe}{" "}
                  <span style={{ fontSize: "40px", fontWeight: "900" }}>
                    VS
                  </span>
                  {ele.contre}
                </h2>
                <span>{ele.date}</span>
              </div>
              <div
                className="buttons"
                style={{
                  maxWidth: "fit-content",
                  marginInline: "auto",
                  marginTop: "10px",
                }}
              >
                <button style={{ marginInline: "5px" }}>Like</button>
                <button style={{ marginInline: "5px" }}>Deslike</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
