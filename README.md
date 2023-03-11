# Upgradeable Contract Quickstart
This project provides a basic use case for Hardhat, using OpenZeppelin Upgradeable Contracts. Upgradeable contracts allow for contracts to be updated without losing any previously stored data on the blockchain. This is achieved through the use of a proxy contract that forwards calls to the current implementation contract.

The project includes a sample contract, a test for that contract, and a script that deploys the contract. The sample contract is implemented using OpenZeppelin Upgradeable Contracts, and it provides a basic example of how to implement upgradeable contracts in your own projects.

# Commands
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

# AvaxWallet Contract
The AvaxWallet contract is a basic Ethereum wallet contract that can receive, store, and transfer funds on the Avalanche blockchain. The contract is initialized using the OpenZeppelin Initializable library, which provides a safe and standardized way to initialize upgradeable contracts.

The initialized variable is used to ensure that the contract can only be initialized once. The owner variable stores the address of the contract owner, who has the ability to withdraw funds from the contract. The changeOwner function allows the contract owner to transfer ownership of the contract to another address.

The withdraw function allows the contract owner to withdraw a specified amount of funds from the contract. The deposit function allows anyone to deposit funds into the contract by sending a specified amount of AVAX to the contract address.

The getBalance function returns the current balance of the contract in AVAX.

The contract uses the OpenZeppelin ReentrancyGuard library to protect against reentrant attacks, which are a type of attack where a contract can be called repeatedly before previous calls have completed.

Usage
To use the AvaxWallet contract, you can deploy it to the Avalanche network using your preferred development framework, such as Hardhat or Truffle. Once deployed, you can interact with the contract by calling its functions, such as deposit, withdraw, changeOwner, and getBalance.

# Contributing
This project is open-source, and contributions are welcome. To contribute, please fork this repository and submit a pull request with your changes. Before submitting a pull request, please make sure that your changes pass the tests and adhere to the project's coding standards.
