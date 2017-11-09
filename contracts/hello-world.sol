pragma solidity^0.4.11;

contract HelloWorld {
    event Print(string out);
    function() { Print("Hello, World!"); }
}