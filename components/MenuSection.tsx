"use client";

import { useState } from "react";

type Category = "entrees" | "plats" | "desserts" | "boissons";

const menuData: Record<Category, { name: string; description: string; price: string }[]> = {
  entrees: [
    { name: "Tartare de Saumon", description: "Avocat, mangue, sésame noir, vinaigrette yuzu", price: "18€" },
    { name: "Velouté de Champignons", description: "Cèpes, truffe noire, crème fouettée au parmesan", price: "16€" },
    { name: "Carpaccio de Bœuf", description: "Roquette, copeaux de parmesan, huile de truffe", price: "22€" },
    { name: "Foie Gras Maison", description: "Chutney de figues, brioche toastée, fleur de sel", price: "26€" },
  ],
  plats: [
    { name: "Filet de Bœuf Wagyu", description: "Purée de céleri, jus corsé, légumes glacés", price: "52€" },
    { name: "Homard Rôti", description: "Beurre de corail, risotto crémeux, asperges vertes", price: "48€" },
    { name: "Canard Laqué", description: "Sauce aux cerises, polenta crémeuse, pousses d'épinard", price: "38€" },
    { name: "Bar en Croûte de Sel", description: "Fenouil braisé, citron confit, émulsion safranée", price: "42€" },
  ],
  desserts: [
    { name: "Soufflé au Chocolat", description: "Grand cru Valrhona, glace vanille de Madagascar", price: "16€" },
    { name: "Tarte Tatin", description: "Pommes caramélisées, crème fraîche épaisse", price: "14€" },
    { name: "Crème Brûlée", description: "Vanille Bourbon, caramel craquant", price: "12€" },
    { name: "Assiette de Fromages", description: "Sélection affinée, confiture de noix, pain aux figues", price: "18€" },
  ],
  boissons: [
    { name: "Champagne Millésimé", description: "Dom Pérignon 2012, flûte", price: "45€" },
    { name: "Bordeaux Grand Cru", description: "Château Margaux 2015, verre", price: "35€" },
    { name: "Cocktail Signature", description: "The 416 Special — gin, elderflower, gold leaf", price: "18€" },
    { name: "Thé Rare Collection", description: "Oolong fumé ou Darjeeling first flush", price: "8€" },
  ],
};

const categoryLabels: Record<Category, string> = {
  entrees: "Entrées",
  plats: "Plats",
  desserts: "Desserts",
  boissons: "Boissons",
};

export default function MenuSection() {
  const [active, setActive] = useState<Category>("entrees");

  return (
    <section id="menu" className="menu">
      <div className="menu__inner">
        <p className="menu__overline">Saveurs d'Exception</p>
        <h2 className="menu__heading">
          Notre <span>Menu</span>
        </h2>
        <div className="menu__divider" />

        <div className="menu__tabs">
          {(Object.keys(menuData) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`menu__tab${active === cat ? " menu__tab--active" : ""}`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="menu__items">
          {menuData[active].map((item) => (
            <div key={item.name} className="menu__item">
              <div className="menu__item-info">
                <h3 className="menu__item-name">{item.name}</h3>
                <p className="menu__item-desc">{item.description}</p>
              </div>
              <span className="menu__item-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
