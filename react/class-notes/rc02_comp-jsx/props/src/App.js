// ? deafult exportun importu, istediğimiz isimle import edebiliriz
// import MyCat from "./components/Cat";
import Cat from "./components/Cat";

function App() {
  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat
        name="Cenitin"
        img="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
        color="grey"
        // isBlueEyed={true}
        isBlueEyed
      />
      <Cat
        name="Garfield"
        img="https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_640.jpg"
        color="blue"
        // isBlueEyed={false}
      />
      <Cat
        name="Şerafettin"
        img="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_640.jpg"
        // isBlueEyed={true}
        isBlueEyed
      />
      {/* <MyCat /> */}
    </div>
  );
}

export default App;
