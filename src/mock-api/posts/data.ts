import authorImage from "assets/images/person.jpg";

export const posts = [
  {
    id: "1",
    title: "How to use React Query",
    excerpt: "React Query is a library that helps you fetch, cache and update data in your React applications.",
    content:
      "React Query is a library that helps you fetch, cache and update data in your React applications. It will automatically keep your UI in sync with the latest data and reduce the amount of boilerplate in your application.",
    categories: ["Technology"],
    author: {
      name: "John Doe",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: "https://images.unsplash.com/photo-1581084514319-8e8b6b5b5d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      alt: "How to use React Query",
    },
  },
];
