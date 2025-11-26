import { useState } from "react";
import CatCard from "../card";
import CatModal from "../popup";
import imgCat_1 from "../../assets/cat_1.jpg"
import imgCat_2 from "../../assets/cat_2.jpg"
import imgCat_3 from "../../assets/cat_3.jpg"
import imgCat_4 from "../../assets/cat_4.jpg"
import imgCat_5 from "../../assets/cat_5.jpg"
import imgCat_6 from "../../assets/cat_6.jpg"
import imgCat_7 from "../../assets/cat_7.jpg"
import imgCat_8 from "../../assets/cat_8.jpg"
import imgCat_9 from "../../assets/cat_9.jpg"
import "./style.css";

function CatsGrid() {
  const [selectedCat, setSelectedCat] = useState(null);

  const cats = [
    {
    id: 1,
    name: "Beberto",
    image: imgCat_1,
    shortDescription: "Ele é carente...",
    description:
        "Beberto é um gato muito amoroso e muito safado. Ele é um morto de fome que ama petiscos e miia o dia inteiro por mais ração.",
    gender: "Macho",
    age: "8 meses",
    },

    {
    id: 2,
    name: "Lele",
    image: imgCat_2,
    shortDescription: "Uma diva cheia de charme.",
    description:
        "Lele é uma gatinha elegante e muito tranquila. Adora tirar longas sonecas ao sol e ronronar enquanto recebe carinho no queixo.",
    gender: "Fêmea",
    age: "1 ano",
    },

    {
    id: 3,
    name: "Tigrinho",
    image: imgCat_4,
    shortDescription: "Pequeno, rápido e malandro.",
    description:
        "O Tigrinho é cheio de energia e curioso ao extremo. Ama brincar com qualquer coisa que se mova e vive aprontando traquinagens pela casa.",
    gender: "Macho",
    age: "5 meses",
    },

    {
    id: 4,
    name: "Marie",
    image: imgCat_3,
    shortDescription: "Simpática e observadora.",
    description:
        "Marie gosta de acompanhar tudo que acontece ao seu redor. Ela é calma, muito carinhosa e adora dormir enroladinha em uma manta macia.",
    gender: "Fêmea",
    age: "2 anos",
    },

    {
    id: 5,
    name: "Capuccino",
    image: imgCat_5,
    shortDescription: "Fofinho e adora colo.",
    description:
        "Capuccino é doce como o nome. Muito apegado, ele segue seus humanos pela casa e pede carinho com pequenos miadinhos. Um verdadeiro companheiro.",
    gender: "Macho",
    age: "7 meses",
    },

    {
    id: 6,
    name: "Ronron",
    image: imgCat_6,
    shortDescription: "Nobre e dorminhoco.",
    description:
        "Ronron age como um verdadeiro cavaleiro felino. É calmo, inteligente e ronrona tão alto que parece uma motocicleta. Adora carinho atrás da orelha.",
    gender: "Macho",
    age: "3 anos",
    },

    {
    id: 7,
    name: "Frajola",
    image: imgCat_7,
    shortDescription: "Arteiro nível avançado.",
    description:
        "Frajola é esperto e cheio de energia. Vive pulando, brincando e explorando cada cantinho. Perfeito para quem gosta de um gatinho animado.",
    gender: "Macho",
    age: "6 meses",
    },

    {
    id: 8,
    name: "Bolota",
    image: imgCat_8,
    shortDescription: "A preguiça em forma de gata.",
    description:
        "Bolota ama duas coisas: dormir e comer. É extremamente fofa, calma e gosta de deitar ao lado de quem ama. Uma companheira tranquila e amorosa.",
    gender: "Fêmea",
    age: "1 ano e 4 meses",
    },

    {
    id: 9,
    name: "Pixel",
    image: imgCat_9,
    shortDescription: "Pequenino e curioso.",
    description:
        "Pixel é um gatinho curioso, sempre explorando tudo ao seu redor. Ama brincar com luzes, cordões e qualquer coisa que se mova. Muito afetuoso.",
    gender: "Macho",
    age: "4 meses",
    },

  ];

  return (
    <div className="cats-container">
      <h2 className="title">Conheça os gatinhos disponíveis!</h2>

      <div className="cats-grid">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={setSelectedCat} />
        ))}
      </div>

      <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
    </div>
  );
}

export default CatsGrid;