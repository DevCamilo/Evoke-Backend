const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, date, data, previousHash = '') {
        this.index = index;
        this.date = date;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        this.nonce = 0;
    }

    createHash() {
        return SHA256(this.index + this.date + this.data + this.previousHash + this.nonce).toString();
    }

    mine(difficulty) {
        while (!this.hash.startsWith(difficulty)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }
}

class BlockChain {
    constructor(genesis, date, difficulty = '00') {
        this.chain = [this.createFirstBlock(genesis, date)];
        this.difficulty = difficulty;
    }

    createFirstBlock(genesis, date) {
        return new Block(0, date, genesis);
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(date, data) {
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock.index + 1, date, data, prevBlock.hash);
        block.mine(this.difficulty);
        this.chain.push(block);
    }
    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            let prevBlock = this.chain[i - 1];
            let currBlock = this.chain[i];

            if (currBlock.previousHash != prevBlock.hash)
                return false;

            if (currBlock.createHash() != currBlock.hash)
                return false;
        }
        return true;
    }
}

const EvocoinsModel = require('../models/EvocoinsModel');
const moment = require('moment');


function setTransacTion(req, res) {
    let evocoins = [];
    EvocoinsModel.find((err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Error al generar la tramsaccion" });
        } else {
            for (i = 0; i < data.length; i++) {
                if (i == 0) {
                    evocoins = new BlockChain({
                        receiver: data[i].data.receiver,
                        donor: data[i].data.donor,
                        quantity: data[i].data.quantity
                    }, data[i].date, '00');
                } else {
                    evocoins.addBlock(data[i].date, {
                        receiver: data[i].data.receiver,
                        donor: data[i].data.donor,
                        quantity: data[i].data.quantity
                    });
                }
            }
            evocoins.addBlock(new Date(moment().toISOString()), {
                receiver: req.body.receiver,
                donor: req.body.donor,
                quantity: req.body.quantity
            });
            let lastBlock = evocoins.chain[evocoins.chain.length - 1];
            //res.status(200).send({ BLOCK: lastBlock });
            EvocoinsModel.create(lastBlock, (err2, data2) => {
                if (err2) {
                    res.status(200).send({ status: false, message: "Fallo al encadenar la trasnasccion" });
                } else {
                    res.status(200).send({ status: true, message: "Transacción encadenada exitósamente" });
                }
            });
        }
        //console.log(JSON.stringify(evocoins.chain, null, 2));
    });
}

module.exports = {
    setTransacTion
}