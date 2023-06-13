const readline = require('readline');

async function main() {
  let userAge = await prompt("Сколько вам лет?", 5);
  console.log(userAge);

  let userWeight = await prompt("Какой у вас вес?", 0.0);
  console.log(userWeight);

  let userName = await prompt("Как вас зовут?", "no name");
  console.log(userName);
}

main();

function prompt(message, defaultValue) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    const parsedDefault = parseDefaultValue(defaultValue);

    rl.question(`${message} (default: ${parsedDefault}): `, (userInput) => {
      rl.close();
      const parsedValue = parseUserInput(userInput, parsedDefault);
      resolve(parsedValue);
    });
  });
}

function parseDefaultValue(defaultValue) {
  if (typeof defaultValue === 'boolean') {
    return defaultValue.toString();
  } else if (Array.isArray(defaultValue)) {
    return JSON.stringify(defaultValue);
  } else {
    return defaultValue;
  }
}

function parseUserInput(userInput, defaultValue) {
  if (typeof defaultValue === 'number') {
    const parsedValue = parseFloat(userInput);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
  } else if (typeof defaultValue === 'string') {
    return userInput !== '' ? userInput : defaultValue;
  } else if (typeof defaultValue === 'boolean') {
    const lowercaseInput = userInput.toLowerCase();
    if (lowercaseInput === 'true') {
      return true;
    } else if (lowercaseInput === 'false') {
      return false;
    } else {
      return defaultValue;
    }
  } else if (Array.isArray(defaultValue)) {
    try {
      const parsedValue = JSON.parse(userInput);
      return Array.isArray(parsedValue) ? parsedValue : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  } else {
    return userInput;
  }
}