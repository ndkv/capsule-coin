CapsuleCoinABI = {
      "contractName": "CapsuleCoin",
      "abi": [
        {
          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getBalanceInEth",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "receiver",
              "type": "address"
            },
            {
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "sendCoin",
          "outputs": [
            {
              "name": "sufficient",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "getBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      ],
      "bytecode": "0x6060604052341561000f57600080fd5b6127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103c5806100636000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820715466767e0645c322d3919bac11bf3c389bada5646f61c1e21f9afd2d327f180029",
      "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101f8565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610351565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610351565b60026000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101d657600080fd5b6102c65a03f415156101e757600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610249576000905061034b565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820715466767e0645c322d3919bac11bf3c389bada5646f61c1e21f9afd2d327f180029",
      "sourceMap": "316:675:1:-;;;453:62;;;;;;;;506:5;484:8;:19;493:9;484:19;;;;;;;;;;;;;;;:27;;;;316:675;;;;;;",
      "deployedSourceMap": "316:675:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;900:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;839:4;855:10;:18;874:16;885:4;874:10;:16::i;:::-;891:1;855:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:45;;780:117;;;:::o;518:259::-;582:15;630:6;607:8;:20;616:10;607:20;;;;;;;;;;;;;;;;:29;603:47;;;645:5;638:12;;;;603:47;678:6;654:8;:20;663:10;654:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;710:6;688:8;:18;697:8;688:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;741:8;720:38;;729:10;720:38;;;751:6;720:38;;;;;;;;;;;;;;;;;;769:4;762:11;;518:259;;;;;:::o;900:89::-;954:4;971:8;:14;980:4;971:14;;;;;;;;;;;;;;;;964:21;;900:89;;;:::o",
      "source": "pragma solidity ^0.4.18;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract CapsuleCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tfunction CapsuleCoin() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\tTransfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n",
      "sourcePath": "/Users/simeon/Documents/_projects/capsule-coin/contracts/CapsuleCoin.sol",
      "ast": {
        "attributes": {
          "absolutePath": "/Users/simeon/Documents/_projects/capsule-coin/contracts/CapsuleCoin.sol",
          "exportedSymbols": {
            "CapsuleCoin": [
              112
            ]
          }
        },
        "children": [
          {
            "attributes": {
              "literals": [
                "solidity",
                "^",
                "0.4",
                ".18"
              ]
            },
            "id": 18,
            "name": "PragmaDirective",
            "src": "0:24:1"
          },
          {
            "attributes": {
              "SourceUnit": 17,
              "absolutePath": "/Users/simeon/Documents/_projects/capsule-coin/contracts/ConvertLib.sol",
              "file": "./ConvertLib.sol",
              "scope": 113,
              "symbolAliases": [
                null
              ],
              "unitAlias": ""
            },
            "id": 19,
            "name": "ImportDirective",
            "src": "26:26:1"
          },
          {
            "attributes": {
              "baseContracts": [
                null
              ],
              "contractDependencies": [
                null
              ],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "linearizedBaseContracts": [
                112
              ],
              "name": "CapsuleCoin",
              "scope": 113
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "balances",
                  "scope": 112,
                  "stateVariable": true,
                  "storageLocation": "default",
                  "type": "mapping(address => uint256)",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 20,
                        "name": "ElementaryTypeName",
                        "src": "346:7:1"
                      },
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "357:4:1"
                      }
                    ],
                    "id": 22,
                    "name": "Mapping",
                    "src": "337:25:1"
                  }
                ],
                "id": 23,
                "name": "VariableDeclaration",
                "src": "337:34:1"
              },
              {
                "attributes": {
                  "anonymous": false,
                  "name": "Transfer"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "_from",
                          "scope": 31,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 24,
                            "name": "ElementaryTypeName",
                            "src": "390:7:1"
                          }
                        ],
                        "id": 25,
                        "name": "VariableDeclaration",
                        "src": "390:21:1"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": true,
                          "name": "_to",
                          "scope": 31,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 26,
                            "name": "ElementaryTypeName",
                            "src": "413:7:1"
                          }
                        ],
                        "id": 27,
                        "name": "VariableDeclaration",
                        "src": "413:19:1"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "indexed": false,
                          "name": "_value",
                          "scope": 31,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 28,
                            "name": "ElementaryTypeName",
                            "src": "434:7:1"
                          }
                        ],
                        "id": 29,
                        "name": "VariableDeclaration",
                        "src": "434:14:1"
                      }
                    ],
                    "id": 30,
                    "name": "ParameterList",
                    "src": "389:60:1"
                  }
                ],
                "id": 31,
                "name": "EventDefinition",
                "src": "375:75:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": true,
                  "modifiers": [
                    null
                  ],
                  "name": "CapsuleCoin",
                  "payable": false,
                  "scope": 112,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 32,
                    "name": "ParameterList",
                    "src": "470:2:1"
                  },
                  {
                    "attributes": {
                      "parameters": [
                        null
                      ]
                    },
                    "children": [],
                    "id": 33,
                    "name": "ParameterList",
                    "src": "480:0:1"
                  },
                  {
                    "children": [
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 34,
                                    "name": "Identifier",
                                    "src": "484:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "origin",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 191,
                                          "type": "tx",
                                          "value": "tx"
                                        },
                                        "id": 35,
                                        "name": "Identifier",
                                        "src": "493:2:1"
                                      }
                                    ],
                                    "id": 36,
                                    "name": "MemberAccess",
                                    "src": "493:9:1"
                                  }
                                ],
                                "id": 37,
                                "name": "IndexAccess",
                                "src": "484:19:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3130303030",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 10000",
                                  "value": "10000"
                                },
                                "id": 38,
                                "name": "Literal",
                                "src": "506:5:1"
                              }
                            ],
                            "id": 39,
                            "name": "Assignment",
                            "src": "484:27:1"
                          }
                        ],
                        "id": 40,
                        "name": "ExpressionStatement",
                        "src": "484:27:1"
                      }
                    ],
                    "id": 41,
                    "name": "Block",
                    "src": "480:35:1"
                  }
                ],
                "id": 42,
                "name": "FunctionDefinition",
                "src": "453:62:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "sendCoin",
                  "payable": false,
                  "scope": 112,
                  "stateMutability": "nonpayable",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "receiver",
                          "scope": 83,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 43,
                            "name": "ElementaryTypeName",
                            "src": "536:7:1"
                          }
                        ],
                        "id": 44,
                        "name": "VariableDeclaration",
                        "src": "536:16:1"
                      },
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amount",
                          "scope": 83,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 45,
                            "name": "ElementaryTypeName",
                            "src": "554:4:1"
                          }
                        ],
                        "id": 46,
                        "name": "VariableDeclaration",
                        "src": "554:11:1"
                      }
                    ],
                    "id": 47,
                    "name": "ParameterList",
                    "src": "535:31:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "sufficient",
                          "scope": 83,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 48,
                            "name": "ElementaryTypeName",
                            "src": "582:4:1"
                          }
                        ],
                        "id": 49,
                        "name": "VariableDeclaration",
                        "src": "582:15:1"
                      }
                    ],
                    "id": 50,
                    "name": "ParameterList",
                    "src": "581:17:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "falseBody": null
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 51,
                                    "name": "Identifier",
                                    "src": "607:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 181,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 52,
                                        "name": "Identifier",
                                        "src": "616:3:1"
                                      }
                                    ],
                                    "id": 53,
                                    "name": "MemberAccess",
                                    "src": "616:10:1"
                                  }
                                ],
                                "id": 54,
                                "name": "IndexAccess",
                                "src": "607:20:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 55,
                                "name": "Identifier",
                                "src": "630:6:1"
                              }
                            ],
                            "id": 56,
                            "name": "BinaryOperation",
                            "src": "607:29:1"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 50
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 57,
                                "name": "Literal",
                                "src": "645:5:1"
                              }
                            ],
                            "id": 58,
                            "name": "Return",
                            "src": "638:12:1"
                          }
                        ],
                        "id": 59,
                        "name": "IfStatement",
                        "src": "603:47:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "-=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 60,
                                    "name": "Identifier",
                                    "src": "654:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 181,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 61,
                                        "name": "Identifier",
                                        "src": "663:3:1"
                                      }
                                    ],
                                    "id": 62,
                                    "name": "MemberAccess",
                                    "src": "663:10:1"
                                  }
                                ],
                                "id": 63,
                                "name": "IndexAccess",
                                "src": "654:20:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "678:6:1"
                              }
                            ],
                            "id": 65,
                            "name": "Assignment",
                            "src": "654:30:1"
                          }
                        ],
                        "id": 66,
                        "name": "ExpressionStatement",
                        "src": "654:30:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "+=",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 67,
                                    "name": "Identifier",
                                    "src": "688:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 44,
                                      "type": "address",
                                      "value": "receiver"
                                    },
                                    "id": 68,
                                    "name": "Identifier",
                                    "src": "697:8:1"
                                  }
                                ],
                                "id": 69,
                                "name": "IndexAccess",
                                "src": "688:18:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 70,
                                "name": "Identifier",
                                "src": "710:6:1"
                              }
                            ],
                            "id": 71,
                            "name": "Assignment",
                            "src": "688:28:1"
                          }
                        ],
                        "id": 72,
                        "name": "ExpressionStatement",
                        "src": "688:28:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple()",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 31,
                                  "type": "function (address,address,uint256)",
                                  "value": "Transfer"
                                },
                                "id": 73,
                                "name": "Identifier",
                                "src": "720:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 181,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 74,
                                    "name": "Identifier",
                                    "src": "729:3:1"
                                  }
                                ],
                                "id": 75,
                                "name": "MemberAccess",
                                "src": "729:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 44,
                                  "type": "address",
                                  "value": "receiver"
                                },
                                "id": 76,
                                "name": "Identifier",
                                "src": "741:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 46,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 77,
                                "name": "Identifier",
                                "src": "751:6:1"
                              }
                            ],
                            "id": 78,
                            "name": "FunctionCall",
                            "src": "720:38:1"
                          }
                        ],
                        "id": 79,
                        "name": "ExpressionStatement",
                        "src": "720:38:1"
                      },
                      {
                        "attributes": {
                          "functionReturnParameters": 50
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 80,
                            "name": "Literal",
                            "src": "769:4:1"
                          }
                        ],
                        "id": 81,
                        "name": "Return",
                        "src": "762:11:1"
                      }
                    ],
                    "id": 82,
                    "name": "Block",
                    "src": "599:178:1"
                  }
                ],
                "id": 83,
                "name": "FunctionDefinition",
                "src": "518:259:1"
              },
              {
                "attributes": {
                  "constant": true,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getBalanceInEth",
                  "payable": false,
                  "scope": 112,
                  "stateMutability": "view",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "addr",
                          "scope": 99,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 84,
                            "name": "ElementaryTypeName",
                            "src": "805:7:1"
                          }
                        ],
                        "id": 85,
                        "name": "VariableDeclaration",
                        "src": "805:12:1"
                      }
                    ],
                    "id": 86,
                    "name": "ParameterList",
                    "src": "804:14:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 99,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 87,
                            "name": "ElementaryTypeName",
                            "src": "839:4:1"
                          }
                        ],
                        "id": 88,
                        "name": "VariableDeclaration",
                        "src": "839:4:1"
                      }
                    ],
                    "id": 89,
                    "name": "ParameterList",
                    "src": "838:6:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "functionReturnParameters": 89
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_2_by_1",
                                      "typeString": "int_const 2"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "convert",
                                  "referencedDeclaration": 15,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 16,
                                      "type": "type(library ConvertLib)",
                                      "value": "ConvertLib"
                                    },
                                    "id": 90,
                                    "name": "Identifier",
                                    "src": "855:10:1"
                                  }
                                ],
                                "id": 91,
                                "name": "MemberAccess",
                                "src": "855:18:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 111,
                                      "type": "function (address) view returns (uint256)",
                                      "value": "getBalance"
                                    },
                                    "id": 92,
                                    "name": "Identifier",
                                    "src": "874:10:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 85,
                                      "type": "address",
                                      "value": "addr"
                                    },
                                    "id": 93,
                                    "name": "Identifier",
                                    "src": "885:4:1"
                                  }
                                ],
                                "id": 94,
                                "name": "FunctionCall",
                                "src": "874:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 95,
                                "name": "Literal",
                                "src": "891:1:1"
                              }
                            ],
                            "id": 96,
                            "name": "FunctionCall",
                            "src": "855:38:1"
                          }
                        ],
                        "id": 97,
                        "name": "Return",
                        "src": "848:45:1"
                      }
                    ],
                    "id": 98,
                    "name": "Block",
                    "src": "844:53:1"
                  }
                ],
                "id": 99,
                "name": "FunctionDefinition",
                "src": "780:117:1"
              },
              {
                "attributes": {
                  "constant": true,
                  "implemented": true,
                  "isConstructor": false,
                  "modifiers": [
                    null
                  ],
                  "name": "getBalance",
                  "payable": false,
                  "scope": 112,
                  "stateMutability": "view",
                  "superFunction": null,
                  "visibility": "public"
                },
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "addr",
                          "scope": 111,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 100,
                            "name": "ElementaryTypeName",
                            "src": "920:7:1"
                          }
                        ],
                        "id": 101,
                        "name": "VariableDeclaration",
                        "src": "920:12:1"
                      }
                    ],
                    "id": 102,
                    "name": "ParameterList",
                    "src": "919:14:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "",
                          "scope": 111,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 103,
                            "name": "ElementaryTypeName",
                            "src": "954:4:1"
                          }
                        ],
                        "id": 104,
                        "name": "VariableDeclaration",
                        "src": "954:4:1"
                      }
                    ],
                    "id": 105,
                    "name": "ParameterList",
                    "src": "953:6:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "functionReturnParameters": 105
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 106,
                                "name": "Identifier",
                                "src": "971:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 101,
                                  "type": "address",
                                  "value": "addr"
                                },
                                "id": 107,
                                "name": "Identifier",
                                "src": "980:4:1"
                              }
                            ],
                            "id": 108,
                            "name": "IndexAccess",
                            "src": "971:14:1"
                          }
                        ],
                        "id": 109,
                        "name": "Return",
                        "src": "964:21:1"
                      }
                    ],
                    "id": 110,
                    "name": "Block",
                    "src": "960:29:1"
                  }
                ],
                "id": 111,
                "name": "FunctionDefinition",
                "src": "900:89:1"
              }
            ],
            "id": 112,
            "name": "ContractDefinition",
            "src": "316:675:1"
          }
        ],
        "id": 113,
        "name": "SourceUnit",
        "src": "0:992:1"
      },
      "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
      },
      "networks": {
        "4": {
          "events": {},
          "links": {
            "ConvertLib": "0x398088749d01ee74b438f43cc9e70ef54308f43c"
          },
          "address": "0x138db7ce2af44c6c3ccb1589dfe223f15a7ef750"
        },
        "4447": {
          "events": {},
          "links": {
            "ConvertLib": "0x345ca3e014aaf5dca488057592ee47305d9b3e10"
          },
          "address": "0xf25186b5081ff5ce73482ad761db0eb0d25abfbf"
        }
      },
      "schemaVersion": "1.0.1",
      "updatedAt": "2017-12-08T19:23:54.641Z"
    };
