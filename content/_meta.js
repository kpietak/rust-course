export default {

  index: {
    title: '🏠',
    display: 'hidden',
  },

  topics: {
    title: "Rozdziały",
    type: 'menu',
    items: {
      "01-intro": {
        title: "1. Podstawowe konstrukcje języka",
        href: "/topics/01-intro"
      },
      "02-ownership": {
        title: "2. Posiadanie",
        href: "/topics/02-ownership"
      },
      "03-structures": {
        title: "3. Struktury danych i moduły",
        href: "/topics/03-structures"
      },
      "04-pattern-matching": {
        title: "4. Wyliczenia i dopasowanie wzorócw",
        href: "/topics/04-pattern-matching"
      },
      "05-generics-lifetimes": {
        title: "5. Typy generyczne i czas życia",
        href: "/topics/05-generics-lifetimes"
      },
      "06-errors": {
        title: "6. Obsługa błędów",
        href: "/topics/06-errors"
      },
      "07-collections": {
        title: "7. Kolekcje i domknięcia",
        href: "/topics/07-collections"
      }
    }
  },

  
  "rust-docs": {
    title: "Dokumentacja Rust",
    type: "page",
    href: "https://doc.rust-lang.org/book/"
  }
}