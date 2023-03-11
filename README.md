# Upgradeable Contract Quickstart
This project provides a basic use case for Hardhat, using OpenZeppelin Upgradeable Contracts. Upgradeable contracts allow for contracts to be updated without losing any previously stored data on the blockchain. This is achieved through the use of a proxy contract that forwards calls to the current implementation contract.

The project includes a sample contract, a test for that contract, and a script that deploys the contract. The sample contract is implemented using OpenZeppelin Upgradeable Contracts, and it provides a basic example of how to implement upgradeable contracts in your own projects.

# Usage
To get started, try running some of the following tasks:

Run the tests for the sample contract.
```zsh
npx hardhat test
```

Run the tests for the sample contract and displays the gas report.
```zsh
GAS_REPORT=true npx hardhat test
```

Start a Hardhat network node.

```zsh
npx hardhat node
```

Deploy the sample contract.
```zsh
npx hardhat run scripts/deploy.ts
```

# Contributing
This project is open-source, and contributions are welcome. To contribute, please fork this repository and submit a pull request with your changes. Before submitting a pull request, please make sure that your changes pass the tests and adhere to the project's coding standards.
