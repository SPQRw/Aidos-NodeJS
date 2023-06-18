import fs from "fs";
import * as readline from 'node:readline';


const Ex = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Go(question) {
  return new Promise((resolve) => {
    Ex.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function saveInfo() {
  try {
    const fName = await Go("Write please first name: ");
    const sName = await Go("Write please surname: ");
    const Birth = await Go("Write please your birthdate: ");
    const Document = await Go("Write please file name: ");

    const info = `Name: ${fName}\nSurname: ${sName}\nBirthdate: ${Birth}`;

    fs.writeFileSync(Document, info, (error) => {
      if (error) {
        console.log("error", error);
      } else {
        console.log("Information confirmed", Document);
      }
      Ex.close();
    });
  } catch (error) {
    console.log("Something go error", error);
    Ex.close();
  }
}
saveInfo();