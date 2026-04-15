"use client";

import { useState } from "react";

type Item = { name: string; desc?: string; price: string };
type Sub = { title: string; items: Item[] };
type Category = { id: string; label: string; subs: Sub[] };

const categories: Category[] = [
  {
    id: "entrees",
    label: "Entrées",
    subs: [
      {
        title: "Froides",
        items: [
          { name: "Salade Niçoise", price: "500 DA" },
          { name: "Salade Caprice", price: "800 DA" },
          { name: "Salade César", price: "700 DA" },
          { name: "Salade Burrata", price: "1000 DA" },
          { name: "Dom du Saumon Fumé Sauce Roquefort", price: "1500 DA" },
        ],
      },
      {
        title: "Chaudes",
        items: [
          { name: "Boureke Poulet", price: "250 DA" },
          { name: "Boureke V.H", price: "300 DA" },
          { name: "Boureke Crevette", price: "400 DA" },
          { name: "Brik Tunisien", price: "500 DA" },
          { name: "Hrira", price: "400 DA" },
          { name: "Soupe de Lentilles", price: "400 DA" },
          { name: "Soupe de Poisson", price: "500 DA" },
          { name: "Camembert au Four", price: "1000 DA" },
        ],
      },
      {
        title: "Gratins",
        items: [
          { name: "Gratin de Poulet", price: "600 DA" },
          { name: "Gratin de V.H", price: "700 DA" },
          { name: "Gratin Mixte", price: "900 DA" },
          { name: "Gratin Fruit de Mer", price: "1000 DA" },
        ],
      },
      {
        title: "Pâtes",
        items: [
          { name: "Spaghetti Bolognaise", price: "800 DA" },
          { name: "Tagliatelle Carbonara", price: "900 DA" },
          { name: "Penne Arrabbiata", price: "600 DA" },
          { name: "Farfar au Saumon", price: "1200 DA" },
          { name: "Spaghetti aux Crevettes", price: "1400 DA" },
          { name: "Penne 4 Fromages", price: "1400 DA" },
        ],
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    subs: [
      {
        title: "Viandes & Poissons",
        items: [
          { name: "Escalope Grillé", price: "1200 DA" },
          { name: "Escalope Panée", price: "1400 DA" },
          { name: "Escalope Milanaise", price: "—" },
          { name: "Cordon Bleu", price: "1600 DA" },
          { name: "Stroganoff au Champignons", price: "2900 DA" },
          { name: "Mhamar", price: "3800 DA" },
          { name: "Mfawar", price: "3500 DA" },
          { name: "Dorade à la Façon du Chef", price: "2500 DA" },
          { name: "Crevette en Sauce", price: "2600 DA" },
          { name: "Crevette Grillée", price: "2600 DA" },
          { name: "Calamar Frite", price: "2800 DA" },
        ],
      },
      {
        title: "Pizzas",
        items: [
          { name: "Marguerite", desc: "Sauce tomate, mozza, gouda, gruyère, olive", price: "600 DA" },
          { name: "Végétarienne", desc: "Sauce tomate, poivrons, onion, champignons, maïs, tomates cerises, mozza, gouda, gruyère, olive", price: "700 DA" },
          { name: "Thon", desc: "Sauce tomate, thon, mozza, gouda, gruyère", price: "800 DA" },
          { name: "Hawaïenne", desc: "Sauce tomate, poulet, ananas, mozza, gouda, gruyère, olive", price: "1000 DA" },
          { name: "Américane", desc: "Sauce tomate, viande hachée, champignons frais, mozza, gouda, gruyère, olive", price: "1000 DA" },
          { name: "Crevette", desc: "Sauce tomate, crevettes, mozza, gouda, gruyère, olive", price: "1600 DA" },
          { name: "Fruit de Mer", desc: "Sauce tomate, crevettes, calamar, poulpe, mozza, gouda, gruyère, olive", price: "1800 DA" },
          { name: "5 Fromages", desc: "Sauce blanche, rockfort, camembert, mozza, gouda, gruyère, olive", price: "1200 DA" },
          { name: "Chiken", desc: "Sauce blanche, poulet, mozza, gouda", price: "900 DA" },
          { name: "La Reine", desc: "Sauce blanche, poulet, viande hachée, camembert, mozza, gouda, gruyère, olive", price: "1200 DA" },
          { name: "Fumato", desc: "Sauce blanche, dinde fumée, pepperoni, fromage fumé, mozza, gouda, gruyère, olive", price: "900 DA" },
          { name: "Mexicaine", desc: "Sauce téxane, poulet, poivron, onion, maïs, champignons", price: "1000 DA" },
          { name: "Téxane", desc: "Sauce téxane, viande hachée, poivron, champignons frais, sauce barbecue, mozza, gouda, gruyère, olive", price: "1100 DA" },
          { name: "Saumon", desc: "Sauce blanche, saumon fumé, fromage fumé, mozza, gouda, gruyère, olive", price: "1500 DA" },
          { name: "Pizza Enfant", price: "400 DA" },
        ],
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    subs: [
      {
        title: "Burgers",
        items: [
          { name: "Forest Burger", desc: "V.H, fromage, sauce classique, crudité", price: "600 DA" },
          { name: "El Pollo", desc: "Chicken, fromage, sauce tartare, crudité", price: "700 DA" },
          { name: "Egg Burger", desc: "V.H, fromage, oignon caramélisé, oeuf, sauce biggy, crudité", price: "900 DA" },
          { name: "Maystro Burger", desc: "V.H, poulet pané, fromage, sauce classique, champignon, oignon caramélisé, crudité", price: "1000 DA" },
        ],
      },
      {
        title: "Tacos",
        items: [
          { name: "Tacos Viande", desc: "Viande hachée, frite, sauce fromagère", price: "900 DA" },
          { name: "Tacos Poulet", desc: "Poulet, frite, sauce fromagère", price: "900 DA" },
          { name: "Tacos Mixte", desc: "Poulet, viande hachée, frite, sauce fromagère", price: "1000 DA" },
        ],
      },
      {
        title: "Sandwiches",
        items: [
          { name: "Américain", desc: "Steak haché, fromage, sauce, crudité", price: "700 DA" },
          { name: "Suisse", desc: "Poulet, sauce fromagère, gruyère", price: "800 DA" },
          { name: "Mexicain", desc: "Poulet mexicain, fromage, sauce", price: "800 DA" },
          { name: "Beef", desc: "Filet de veau, oignons caramélisés, fromage", price: "1200 DA" },
          { name: "Buffalo", desc: "Steak haché, fromage, oeuf, dinde", price: "900 DA" },
          { name: "Cordon Bleu", desc: "Poulet pané, dinde fumée, sauce", price: "900 DA" },
        ],
      },
      {
        title: "Club Sandwiches",
        items: [
          { name: "Club Poulet", price: "800 DA" },
          { name: "Club V.H", price: "1000 DA" },
          { name: "Club Thon", price: "800 DA" },
          { name: "Club Saumon", price: "1200 DA" },
        ],
      },
      {
        title: "Nachos",
        items: [
          { name: "Nachos Poulet", price: "800 DA" },
          { name: "Nachos V.H", price: "1000 DA" },
          { name: "Nachos Mix", price: "1200 DA" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    subs: [
      {
        title: "Desserts",
        items: [
          { name: "Tartelette", price: "500 DA" },
          { name: "Tranche", price: "400 DA" },
          { name: "Trompe Oeil", price: "600 DA" },
          { name: "Mille Feuille", price: "300 DA" },
          { name: "Viennoiseries", price: "100 DA" },
          { name: "Tiramisu", price: "450 DA" },
          { name: "Crème Brûlée", price: "350 DA" },
          { name: "Mousse au Chocolat Côte d'Or", price: "600 DA" },
          { name: "Panacota", price: "200 DA" },
          { name: "M'Semen", price: "200 DA" },
          { name: "Fondue au Chocolat", price: "500 DA" },
          { name: "Chamia", price: "150 DA" },
          { name: "Salade de Fruit", price: "500 DA" },
          { name: "Assiette Fruit", price: "800 DA" },
          { name: "Assiette de Fruit 2P", price: "1300 DA" },
          { name: "Assiette de Fruit 4P", price: "2500 DA" },
        ],
      },
      {
        title: "Crêpes & Pancakes",
        items: [
          { name: "Nutella", price: "500 DA" },
          { name: "Oreo", price: "900 DA" },
          { name: "Banane", price: "700 DA" },
          { name: "Fraise", price: "700 DA" },
          { name: "Fruit", price: "800 DA" },
          { name: "Lotus", price: "900 DA" },
          { name: "Dubaï", price: "900 DA" },
        ],
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    subs: [
      {
        title: "Boissons Chaudes",
        items: [
          { name: "Espresso Carte Noir", price: "300 DA" },
          { name: "Capsule Nespresso L'Or Illy", price: "350 DA" },
          { name: "Americano", price: "350 DA" },
          { name: "Lait au Chocolat", price: "450 DA" },
          { name: "Latte Macchiato", price: "500 DA" },
          { name: "Cappuccino", price: "450 DA" },
          { name: "Cappuccino Parfumé", desc: "Caramel, vanille, noisettes", price: "500 DA" },
          { name: "Late Art", price: "500 DA" },
          { name: "Chocolat Chaud", price: "550 DA" },
          { name: "Café Bon Bon", price: "350 DA" },
          { name: "Moccacino", price: "500 DA" },
          { name: "Thé Maison", price: "200 DA" },
          { name: "Thé Infusion", price: "200 DA" },
        ],
      },
      {
        title: "Boissons Fraiches",
        items: [
          { name: "Ice Coffee", price: "500 DA" },
          { name: "Affogato Coffee", price: "450 DA" },
          { name: "Flat White", price: "600 DA" },
          { name: "Ice Tea Parfumé", desc: "Pêche ou fraise", price: "450 DA" },
          { name: "Frappé", desc: "Vanille, caramel ou chocolat", price: "600 DA" },
        ],
      },
      {
        title: "Jus Naturels",
        items: [
          { name: "Jus de Citron", price: "450 DA" },
          { name: "Jus d'Orange", price: "450 DA" },
          { name: "Jus de Banane", price: "600 DA" },
          { name: "Jus d'Ananas", price: "650 DA" },
          { name: "Jus de Fraise", price: "600 DA" },
          { name: "Jus de Kiwi", price: "600 DA" },
          { name: "Jus de Pomme", price: "800 DA" },
        ],
      },
      {
        title: "Jus Spéciaux",
        items: [
          { name: "Pina Colada", desc: "Ananas, crème de coco, sirop pinacolada", price: "700 DA" },
          { name: "Bora Bora", desc: "Ananas, citron, sirop fruit de la passion", price: "700 DA" },
          { name: "Hawaï & Bleu", desc: "Ananas, crème de coco, sirop blue lagune", price: "600 DA" },
          { name: "Pink Lady", desc: "Ananas, sirop de grenadine", price: "700 DA" },
          { name: "Rio", desc: "Citron, orange, sirop fruit de la passion", price: "600 DA" },
        ],
      },
      {
        title: "Cocktails",
        items: [
          { name: "Banana Citrus", desc: "Banane, orange, citron", price: "600 DA" },
          { name: "Paradise Punch", desc: "Kiwi, ananas, banane", price: "800 DA" },
          { name: "Balboa", desc: "Banane, fraise", price: "700 DA" },
          { name: "L'Acidule", desc: "Fraise, kiwi, ananas, citron", price: "800 DA" },
          { name: "Red Juce", desc: "Ananas, pomme, fruit du bois", price: "800 DA" },
          { name: "Fleur d'Amour", desc: "Banane, mangue, ananas", price: "900 DA" },
          { name: "Le 416", desc: "Cocktail du jour", price: "1000 DA" },
        ],
      },
      {
        title: "Milkshakes & Smoothies",
        items: [
          { name: "Nutella", price: "700 DA" },
          { name: "Bueno", price: "800 DA" },
          { name: "Fraise", price: "600 DA" },
          { name: "Banane", price: "600 DA" },
          { name: "Gourmand (Nutella Banane)", price: "800 DA" },
          { name: "Lotus", price: "900 DA" },
          { name: "Oreo", price: "900 DA" },
          { name: "Balboa (Fraise Banane)", price: "700 DA" },
        ],
      },
      {
        title: "Mojotos",
        items: [
          { name: "Mojito Classique", price: "700 DA" },
          { name: "Mojito Black", price: "800 DA" },
          { name: "Mojito Fraise", price: "800 DA" },
          { name: "Mojito Blue", price: "800 DA" },
          { name: "Mojito Strange", price: "900 DA" },
        ],
      },
      {
        title: "Sodas",
        items: [
          { name: "Canette", price: "150 DA" },
          { name: "Schweppes", price: "150 DA" },
          { name: "Eau Minérale PM", price: "50 DA" },
          { name: "Eau Minérale GM", price: "100 DA" },
        ],
      },
    ],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState("entrees");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="menu">
      <div className="menu__inner">
        <p className="menu__overline">Saveurs d'Exception</p>
        <h2 className="menu__heading">
          Notre <span>Menu</span>
        </h2>
        <div className="menu__divider" />

        <div className="menu__tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`menu__tab${active === cat.id ? " menu__tab--active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu__content">
          {current.subs.map((sub) => (
            <div key={sub.title} className="menu__sub">
              <h3 className="menu__sub-title">{sub.title}</h3>
              <div className="menu__items">
                {sub.items.map((item) => (
                  <div key={item.name} className="menu__item">
                    <div className="menu__item-info">
                      <span className="menu__item-name">{item.name}</span>
                      {item.desc && <p className="menu__item-desc">{item.desc}</p>}
                    </div>
                    <span className="menu__item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu__order-wrap">
          <a href="tel:+213551158020" className="menu__order-btn">
            Commander
          </a>
        </div>
      </div>
    </section>
  );
}
