// ============================================================
//  API DE PLAYLIST - Relacionando Musicas e Artistas
//  Backend 2DAT2 - 3o Trimestre
// ============================================================
const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static("public"));

const artistas = [
  { id: 1, nome: "Lorde", pais: "Nova Zelândia" },
  { id: 2, nome: "ROSALÌA", pais: "Espanha" },
  { id: 3, nome: "Björk", pais: "Islandia" },
  { id: 4, nome: "C418", pais: "Alemanha" },
];

const musicas = [
  { titulo: "Liability", duracao: 171, artistaId: 1 },
  { titulo: "Hard Feelings/loveless ", duracao: 367, artistaId: 1 },
  { titulo: "Hammer", duracao: 193, artistaId: 1 },
  { titulo: "G3 N15", duracao: 252, artistaId: 2 },
  { titulo: "Harm of Will", duracao: 276, artistaId: 3 },
  { titulo: "Biome Fest", duracao: 378, artistaId: 4 },
];

app.get("/artistas", (req, res) => {
  res.status(200).json(artistas);
});

app.get("/musicas", (req, res) => {
  const playlist = musicas.map((musica) => {
    const artista = artistas.find((artista) => artista.id === musica.artistaId);
    return {
      titulo: musica.titulo,
      duracao: musica.duracao,
      artista: artista ? artista.nome : "Artista não encontrado",
      pais: artista ? artista.pais : "País não encontrado",
    };
  });
  res.status(200).json(playlist);
});

app.listen(PORT, () => {
  console.log(`Playlist rodando em http://localhost:${PORT}`);
});