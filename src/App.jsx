import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./assets/data.js";

export default function App() {
  let infoElement = data.map((item) => (
    <Entry
      key={item.id}
      // src={item.img.src}
      // alt={item.img.alt}
      // country={item.country}
      // googleLink={item.googleMapsLink}
      // title={item.title}
      // dates={item.dates}
      // text={item.text}
      entry={item}
    />
  ));
  return (
    <>
      <Header />
      {infoElement}
    </>
  );
}
