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
        const result = data[0].matchs.map((match) => {
          return { ...match, like: 0, deslike: 0 };
        });
        setEquipe(result);
        setNomEquipe(data.map((ele) => ele.name));
      });
  }, [id]);

  const handleBtnLike = (param) => {
    setEquipe(
      equipe.map((e) => {
        if (e.id == param) {
          return { ...e, like: (e.like += 1) };
        } else {
          return e;
        }
      }),
    );
  };

  const handleBtnDesLike = (param) => {
    setEquipe(
      equipe.map((e) => {
        if (e.id == param) {
          return { ...e, deslike: (e.deslike += 1) };
        } else {
          return e;
        }
      }),
    );
  };

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
                <button
                  style={{
                    marginInline: "5px",
                  }}
                  onClick={() => handleBtnLike(ele.id)}
                >
                  Like <span>{ele.like}</span>
                </button>
                <button
                  style={{
                    marginInline: "5px",
                  }}
                  onClick={() => handleBtnDesLike(ele.id)}
                >
                  Deslike <span>{ele.deslike}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
