// const myarr = ["js", "java", "cpp", "rust"]

// //for-each never return a value , it will always give undefine whenever we store it in a variable
//  const loop = myarr.forEach((item) =>{
//     console.log(item);
//     return item;
// })
// console.log(loop);


//++++++++++++++ FILTER ++++++++++++++++++++++++++
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = mynum.filter((num) => num > 4);
console.log(newNums);

// //by scope (here in arrow fun we must use retirn keyword in scope)
// const newNums = mynum.filter((num) => {
//    return num > 4
// });
// console.log(newNums);




//++++++++++++++++++++++++++++++++++++++ BOOK PROJECT +++++++++++++++++++++++++
     const books =[
    {
      "name": "To Kill a Mockingbird",
      "genre": "Fiction",
      "latest_edition_date": "2023-05-15",
      "publish_date": "1960-07-11"
    },
    {
      "name": "The Great Gatsby",
      "genre": "Fiction",
      "latest_edition_date": "2023-02-28",
      "publish_date": "1925-04-10"
    },
    {
      "name": "1984",
      "genre": "Dystopian",
      "latest_edition_date": "2022-12-20",
      "publish_date": "1949-06-08"
    },
    {
      "name": "Harry Potter and the Philosopher's Stone",
      "genre": "Fantasy",
      "latest_edition_date": "2024-01-10",
      "publish_date": "1997-06-26"
    },
    {
      "name": "The Catcher in the Rye",
      "genre": "Fiction",
      "latest_edition_date": "2023-09-05",
      "publish_date": "1951-07-16"
    },
    {
      "name": "Pride and Prejudice",
      "genre": "Romance",
      "latest_edition_date": "2023-11-30",
      "publish_date": "1813-01-28"
    },
    {
      "name": "The Hobbit",
      "genre": "Fantasy",
      "latest_edition_date": "2024-03-12",
      "publish_date": "1937-09-21"
    },
    {
      "name": "Moby-Dick",
      "genre": "Adventure",
      "latest_edition_date": "2023-08-17",
      "publish_date": "1851-10-18"
    },
    {
      "name": "The Lord of the Rings",
      "genre": "Fantasy",
      "latest_edition_date": "2024-06-25",
      "publish_date": "1954-07-29"
    },
    {
      "name": "Brave New World",
      "genre": "Dystopian",
      "latest_edition_date": "2023-04-22",
      "publish_date": "1932-02-01"
    }
  ]
  
// fiction genre
  const userbook = books.filter((info) => info.genre === "Fiction")
  console.log(userbook);

  //fentasy genre with specific publish.date 
  const userbooks = books.filter((info) => info.genre === "Fantasy" && info.publish_date === "1954-07-29")
  console.log(userbooks);