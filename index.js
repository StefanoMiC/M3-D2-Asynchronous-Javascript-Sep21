function greet(string) {
  console.log(string, "HELLO");
}

function something(string, callback) {
  const str = string + "!";
  //EVERYTHING ELSE FINISHED

  callback(str);
}

something("Stefano", function (str) {
  console.log(str.slice(2, 6));
});

// getUser("http://whatever.com/user", function (user) {
//   getBlogPosts("http://whatever.com/posts/" + user.name, function (blogPosts) {
//     getCommets(
//       "http://whatever.com/comments/" + blogPosts[0].id,
//       function (comments) {
//         //DOM MANIPULATION
//         console.log(comments);
//       }
//     );
//   });
// });

getUser("http://whatever.com/user")
  .then(function (user) {
    return getBlogPosts("http://whatever.com/posts/" + user.name);
  })
  .then(function (blogPosts) {
    return getCommets("http://whatever.com/comments/" + blogPosts[0].id);
  })
  .then(function (comments) {
    console.log(comments);
  })
  .catch(function (error) {
    alert("something is wrong! and this is the error " + error.message);
  });

//   function funcName() {
//       return "whatever"
//   }

//   const funcName = function() {
//       return whatever
//   }

// const funcName = () => "Hello there";

// console.log(funcName());

// getUser("http://whatever.com/user")
//   .then(user => getBlogPosts("http://whatever.com/posts/" + user.name))
//   .then(blogPosts => getCommets("http://whatever.com/comments/" + blogPosts[0].id))
//   .then(comments => console.log(comments))
//   .catch(error => alert("something is wrong! and this is the error " + error.message));

// function funcName() {
//   return "whatever";
// }
