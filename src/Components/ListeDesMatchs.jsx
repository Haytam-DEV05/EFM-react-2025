import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setMatchs,
  likeMatch,
  deslikeMatch,
} from "../Features/Slice/SliceMatchs";

export default function ListeDesMatchs() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [nomEquipe, setNomEquipe] = useState("");

  const matchs = useSelector((state) => state.matchs.matchs);

  useEffect(() => {
    fetch(`http://localhost:2005/Equipes?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNomEquipe(data[0].name);
        const result = data[0].matchs.map((m) => ({
          ...m,
          like: 0,
          deslike: 0,
        }));
        dispatch(setMatchs(result));
      });
  }, [id, dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ListeDesMatchs De L'equipe {nomEquipe}
      </h1>

      <div style={{ maxWidth: "400px", marginInline: "auto" }}>
        {matchs.map((ele) => (
          <div
            key={ele.id}
            style={{
              border: "2px solid black",
              padding: "10px",
              marginBlock: "10px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2>
                {nomEquipe} VS {ele.contre}
              </h2>
              <span>{ele.date}</span>
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <button onClick={() => dispatch(likeMatch(ele.id))}>
                Like {ele.like}
              </button>

              <button onClick={() => dispatch(deslikeMatch(ele.id))}>
                Deslike {ele.deslike}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
