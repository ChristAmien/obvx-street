import pullTwo from "../assets/image/pulls/pull-2.png"
import pullThree from "../assets/image/pulls/pull-3.png"
import casquette from "../assets/image/casquettes/casquette.png"
import tshirtBlancFreedomFace from "../assets/image/t-shirts/tshirt-blanc-freedom-face.png"
import tshirtBlancFreedomDos from "../assets/image/t-shirts/tshirt-blanc-freedom-dos.png"
import tshirtBlancGraphicFace from "../assets/image/t-shirts/tshirt-blanc-graphic-face.png"
import tshirtBlancGraphicDos from "../assets/image/t-shirts/tshirt-blanc-graphic-dos.png"
import tshirtBlancRoseFace from "../assets/image/t-shirts/tshirt-blanc-rose-face.jpg"
import tshirtBlancRoseDos from "../assets/image/t-shirts/tshirt-blanc-rose-dos.jpg"
import tshirtBlancStreetFace from "../assets/image/t-shirts/tshirt-blanc-street-culture-face.png"
import tshirtBlancStreetDos from "../assets/image/t-shirts/tshirt-blanc-street-culture-dos.png"
import tshirtNoirLimiteFace from "../assets/image/t-shirts/tshirt-noir-limite-face.png"
import tshirtNoirLimiteDos from "../assets/image/t-shirts/tshirt-noir-limite-dos.png"
import tshirtNoirOrbitFace from "../assets/image/t-shirts/tshirt-noir-orbit-face.png"
import tshirtNoirOrbitDos from "../assets/image/t-shirts/tshirt-noir-orbit-dos.png"
import tshirtNoirStandardFace from "../assets/image/t-shirts/tshirt-noir-standard-face.jpg"
import tshirtNoirStandardDos from "../assets/image/t-shirts/tshirt-noir-standard-dos.jpg"
import tshirtRoseLimiteFace from "../assets/image/t-shirts/tshirt-rose-limite-face.png"
import tshirtRoseLimiteDos from "../assets/image/t-shirts/tshirt-rose-limite-dos.png"

export const PRODUCTS = [
    {
        id: "obvx-tee-globe-noir",
        name: "T-shirt Globe",
        category: "Vêtements",
        price: 15000,
        image: tshirtNoirStandardFace,
        isNew: true,
    },
    {
        id: "obvx-tee-globe-blanc",
        name: "T-shirt Globe Blanc",
        category: "Vêtements",
        price: 15000,
        image: tshirtBlancFreedomFace,
        isNew: true,
    },
    {
        id: "obvx-t-shirt-globe",
        name: "T-shirt Multiface",
        category: "Vêtements",
        price: 9000,
        image: tshirtBlancGraphicFace,
        isNew: false,
    },
    {
        id: "obvx-tee-culture",
        name: "T-shirt Culture",
        category: "Vêtements",
        price: 15000,
        image: tshirtBlancStreetFace,
        isNew: false,
    },
    {
        id: "obvx-sac-tote",
        name: "T-Shirt pyramid",
        category: "Vêtements",
        price: 7000,
        image: tshirtNoirOrbitFace,
        isNew: true,
    },
    {
        id: "obvx-spida-heritage",
        name: "Spida OBVX",
        category: "Vêtements",
        price: 8500,
        image: tshirtRoseLimiteFace,
        isNew: true,
    },
    {
        id: "obvx-globe-essence",
        name: "Globe Essence",
        category: "Vêtements",
        price: 8000,
        image: tshirtBlancRoseFace,
        isNew: true,
    },
    {
        id: "obvx-sweat-city",
        name: "Sweat City",
        category: "Vêtements",
        price: 8000,
        image: pullTwo,
        isNew: false,
    },
    {
        id: "obvx-tee-urban",
        name: "T-shirt Urban",
        category: "Vêtements",
        price: 8000,
        image: tshirtNoirLimiteFace,
        isNew: false,
    },
    {
        id: "obvx-bonnet-signature",
        name: "Casquette Signature",
        category: "Accessoires",
        price: 8000,
        image: casquette,
        isNew: true,
    },
    {
        id: "obvx-tee-identity",
        name: "T-shirt Identity",
        category: "Vêtements",
        price: 8000,
        image: tshirtBlancFreedomDos,
        isNew: false,
    },
    {
        id: "obvx-tee-echo",
        name: "T-shirt Echo",
        category: "Vêtements",
        price: 8000,
        image: tshirtNoirStandardDos,
        isNew: true,
    },
    {
        id: "obvx-sac-commute",
        name: "Pyramid OBVX",
        category: "Vêtements",
        price: 8000,
        image: tshirtBlancStreetDos,
        isNew: false,
    },
    {
        id: "obvx-pull-collective",
        name: "Pull Collective",
        category: "Vêtements",
        price: 18000,
        image: pullThree,
        isNew: true,
    },
]

export const VALUES = [
    {
        number: "01",
        title: "Identité",
        text: "Des pièces qui parlent pour toi. OBVX transforme les codes de la rue en silhouettes reconnaissables et sincères.",
    },
    {
        number: "02",
        title: "Culture",
        text: "Nos collections puisent dans les rencontres, les rythmes et les images qui font vivre notre quotidien.",
    },
    {
        number: "03",
        title: "Mouvement",
        text: "Nous avançons avec celles et ceux qui créent, osent et donnent une nouvelle direction à leur génération.",
    },
]
