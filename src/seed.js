import moment from "moment";

const notes = [
  {
    id: "1",
    createdAt: moment("2018-06-08"),
    isTrash: false,
    title: "This is my first note item.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum amet, autem molestiae laboriosam esse quibusdam illum libero odio itaque id exercitationem nesciunt labore eaque iste temporibus laudantium incidunt blanditiis doloremque inventore doloribus. Inventore tempore quo ipsa iure, cupiditate unde incidunt."
  },
  {
    id: "2",
    createdAt: moment("2018-06-06"),
    isTrash: true,
    title: "Am I trashed?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum amet, autem molestiae laboriosam esse quibusdam illum libero odio itaque id exercitationem nesciunt labore eaque iste temporibus laudantium incidunt blanditiis doloremque inventore doloribus. Inventore tempore quo ipsa iure, cupiditate unde incidunt."
  },
  {
    id: "3",
    createdAt: moment("2018-05-07"),
    isTrash: false,
    title: "How about a third item?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum amet, autem molestiae laboriosam esse quibusdam illum libero odio itaque id exercitationem nesciunt labore eaque iste temporibus laudantium incidunt blanditiis doloremque inventore doloribus. Inventore tempore quo ipsa iure, cupiditate unde incidunt."
  },
  {
    id: "4",
    createdAt: moment("2017-11-07"),
    isTrash: false,
    title: "Even the all-powerful Pointing has no control",
    content:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
  },
  {
    id: "5",
    createdAt: moment("2018-05-17"),
    isTrash: false,
    title: "Last view back on the skyline of her hometown Bookmarksgrove",
    content:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then"
  },
  {
    id: "6",
    createdAt: moment("2018-03-14"),
    isTrash: false,
    title: "Far far away, behind the word mountains",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  },
  {
    id: "7",
    createdAt: moment("2018-02-07"),
    isTrash: false,
    title: "A small river",
    content:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
  }
];

export { notes };
