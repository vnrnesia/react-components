import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ["Fundamental", 'Crucial', 'Coree']

export function genRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
}

export default function Header() {
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }


