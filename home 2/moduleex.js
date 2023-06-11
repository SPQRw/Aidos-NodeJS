export function takeNam(text) {
  return new Promise((resolve,reject) =>{
    process.stdin.on("data", (data) => {
      let uname = data.toString();
      console.log("your name is ", uname);
      process.stdin.pause();
      
    });
    process.stdout.write(text);
  })

//   user_ask_lastname = false;


}

