import authorImage from "../../assets/images/person.jpg";
import postImage1 from "../../assets/images/posts/1.jpg";
import postImage2 from "../../assets/images/posts/2.jpg";
import postImage3 from "../../assets/images/posts/3.jpg";
import postImage4 from "../../assets/images/posts/4.jpg";
import postImage5 from "../../assets/images/posts/5.jpg";
import postImage6 from "../../assets/images/posts/6.jpg";
import postImage7 from "../../assets/images/posts/7.jpg";

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel mauris. Nulla facilisi. Donec auctor, nisl eget aliquam tincidunt, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel mauris. Nulla facilisi. Donec auctor, nisl eget aliquam tincidunt, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel mauris. Nulla facilisi. Donec auctor, nisl eget aliquam tincidunt, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel mauris. Nulla facilisi. Donec auctor, nisl eget aliquam tincidunt, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel mauris. Nulla facilisi.`;

const markdown = `
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
### Horizontal Rule
***
## Typographic replacements
## Emphasis
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
## Blockquotes
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
## Lists
Unordered
+ Create a list by starting a line with 
+ Create a list by starting a line with 
+ Create a list by starting a line with 
+ Create a list by starting a line with 
## Code
Indented code
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
## Tables
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
Right aligned columns
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
## Links
[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ "title text!")
Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
## Images
![Minion](https://octodex.github.com/images/minion.png)
`;

export const posts = [
  {
    id: "0",
    featured: true,
    title: "How to use React Query",
    excerpt: loremIpsum,
    content: markdown,
    category: "Programming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "1",
    featured: false,
    title: "Is the bigger screen on the new nintendo switch worth it?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Gaming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage1,
      alt: "Computer Screen",
    },
  },
  {
    id: "2",
    featured: false,
    title: "What does the future of electric mobiles look like?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage2,
      alt: "Computer Screen",
    },
  },
  {
    id: "3",
    featured: false,
    title: "How version control is properly done in a team?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Programming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage6,
      alt: "Computer Screen",
    },
  },
  {
    id: "4",
    featured: false,
    title: "How many monitors are too many monitors?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "5",
    featured: false,
    title: "How gaming has changed over the last 10 years",
    excerpt: loremIpsum,
    content: markdown,
    category: "Gaming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage4,
      alt: "Computer Screen",
    },
  },
  {
    id: "6",
    featured: true,
    title: "What makes processor architecture different from GPU?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage3,
      alt: "Computer Screen",
    },
  },
  {
    id: "7",
    featured: false,
    title: "How robots will change our daily lives in the future",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage5,
      alt: "Computer Screen",
    },
  },
  {
    id: "8",
    featured: true,
    title: "How long will it take us to replace conventioanl cars with electric ones?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage2,
      alt: "Computer Screen",
    },
  },
  {
    id: "9",
    featured: false,
    title: "How can you jailbreak your nintendo switch?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Gaming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage1,
      alt: "Computer Screen",
    },
  },
  {
    id: "10",
    featured: false,
    title: "Should you use a GPU or CPU for your machine learning?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Programming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage3,
      alt: "Computer Screen",
    },
  },
  {
    id: "11",
    featured: false,
    title: "What are robots already capable of?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Technology",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage3,
      alt: "Computer Screen",
    },
  },
  {
    id: "12",
    featured: false,
    title: "Does using dark modes really reduce the strain on our eyes?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Programming",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  // ########################
  {
    id: "13",
    featured: false,
    title: "10 Ways to decrease the time you train your models",
    excerpt: loremIpsum,
    content: markdown,
    category: "Machine Learning",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "14",
    featured: false,
    title: "The best way to learn to Data Science?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Data Science",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "16",
    featured: false,
    title: "Does computer vision really help us to recognize cancer?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Computer Vision",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "17",
    featured: false,
    title: "Will Transformers completely replace LSTMs?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Language Processing",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "18",
    featured: false,
    title: "How can you jailbreak your PSP?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Console",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "19",
    featured: false,
    title: "Stay healthy at work with these 10 tips",
    excerpt: loremIpsum,
    content: markdown,
    category: "Health",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "20",
    featured: false,
    title: "How our working habits have changed over the years",
    excerpt: loremIpsum,
    content: markdown,
    category: "Office",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "21",
    featured: false,
    title: "Can you really learn to code in 10 minutes?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Learning",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
  {
    id: "22",
    featured: false,
    title: "How many hours should work out?",
    excerpt: loremIpsum,
    content: markdown,
    category: "Sports",
    author: {
      name: "Akira Bauer",
      image: authorImage,
    },
    date: "2020 01, 2021",
    read: 5,
    coverImage: {
      src: postImage7,
      alt: "Computer Screen",
    },
  },
];
