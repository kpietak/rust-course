export default {

  index: {
    title: '🏠',
  },
  "---": {
    type: "separator"
  },

  topics: {
    title: "Rozdziały",
    type: 'menu',
    items: {
      "01-intro": {
        type: "page",
        title: "1. Podstawowe konstrukcje języka",
        href: "/topics/01-intro"
      },
      "02-ownership": {
        type: "page",
        title: "2. Posiadanie",
        href: "/topics/02-ownership"
      },
      "03-structures": {
        type: "page",
        title: "3. Struktury danych",
        href: "/topics/03-structures"
      },
      "04-pattern-matching": {
        type: "page",
        title: "4. Wyliczenia i dopasowanie wzorócw",
        href: "/topics/04-pattern-matching"
      },
      "05-generics-lifetimes": {
        type: "page",
        title: "5. Typy generyczne i czas życia",
        href: "/topics/05-generics-lifetimes"
      },
      "06-errors": {
        type: "page",
        title: "6. Obsługa błędów",
        href: "/topics/06-errors"
      },
      "07-collections": {
        type: "page",
        title: "7. Kolekcje i domknięcia",
        href: "/topics/07-collections"
      }
    }
  },
  "rust-docs": {
    title: "Dokumentacja Rust",
    type: "page",
    href: "https://doc.rust-lang.org/book/",
    "newWindow": true
  }
}