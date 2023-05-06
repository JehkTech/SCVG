// Import the Brython library
importScripts('https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js');

// Load the Python runtime
languagePluginLoader.then(() => {
  // Define a function to generate scratch card numbers
  function generateNumbers(provider, numberOfCards) {
    // Convert provider string to provider code used in Python code
    const providerCodes = { 'mtn': 0, 'airtel': 1, 'zamtel': 2 };
    const providerCode = providerCodes[provider];

    // Generate scratch card numbers using Python code
    const generatedNumbers = pyodide.runPython(`
      import random
      numbers = []
      for i in range(${numberOfCards}):
        if ${providerCode} == 0 or ${providerCode} == 1:
          number = str(random.randint(1, 9)) + str(random.randint(6, 9))
          for j in range(12):
            number += str(random.randint(0, 9))
        elif ${providerCode} == 2:
          number = str(random.randint(1, 9)) + str(random.randint(9, 9))
          for j in range(11):
            number += str(random.randint(0, 9))
        numbers.append(number)
      return numbers`);

    // Create HTML elements to display the generated numbers
    const numbersContainer = document.createElement('div');
    numbersContainer.className = 'numbers-container';

    const providerHeading = document.createElement('h2');
    providerHeading.textContent = provider.toUpperCase() + ' Numbers:';
    numbersContainer.appendChild(providerHeading);

    const numbersList = document.createElement('ul');
    numbersList.className = 'numbers-list';

    for (let i = 0; i < generatedNumbers.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = generatedNumbers[i];
      numbersList.appendChild(listItem);
    }

    numbersContainer.appendChild(numbersList);

    // Clear previous results and display the new ones
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(numbersContainer);
  }

  // Add an event listener to the form submit button
  const form = document.getElementById('generator-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const providerSelect = document.getElementById('provider-select');
    const provider = providerSelect.value;
    const numberOfCardsInput = document.getElementById('number-of-cards');
    const numberOfCards = numberOfCardsInput.value;
    generateNumbers(provider, numberOfCards);
  });
});
