Deploy my own private blockchain using geth and deploy smart contracts on it

Here is my steps:

1. Install geth && create question7 folder to do that 

2. Generate initial accounts
    
    geth account new
    0xd2d6e015ac930d125ae18ad92a607b93bbae5eff
    
3. Creating a single node private blockchain

    initialize Geth using gensis.json

    use following command to run a node
    
    geth --allow-insecure-unlock --identity "sannie-node" --datadir . --keystore ~/Library/ethereum/keystore --networkid 4568 --http --http.addr    '0.0.0.0' --http.corsdomain "*" --http.port 8502 --http.api 'personal,eth,net,web3,txpool,miner' --mine --miner.etherbase=0xD2D6E015aC930D125AE18aD92a607B93bbae5EfF


4. Mining Ethereum blocks && get some ether
 ![image](https://user-images.githubusercontent.com/13994404/146930673-39d54ed8-eddc-49d0-8afb-47b1d1e71605.png)


5. Deploy a Smart Contract (demo contract Hello)
 ![image](https://user-images.githubusercontent.com/13994404/146930994-a2415e44-eafd-4f4e-ae11-47fed7b4eaf3.png)
 
 
6.configuration network to metamask and add account to it 
![image](https://user-images.githubusercontent.com/13994404/146931158-57918146-fe01-4861-b982-f53777d5310e.png)



