import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [panels, setPanels] = useState([
    { id: 0, isActive: false },
    { id: 1, isActive: false },
  ]);

  const setPanelActive = (id) => {
    const panel = panels.map((item) => {
      return item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false };
    });
    setPanels(panel);
  };

  console.log(panels);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        id={0}
        isActive={panels[0].isActive}
        setActive={setPanelActive}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        id={1}
        isActive={panels[1].isActive}
        setActive={setPanelActive}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
