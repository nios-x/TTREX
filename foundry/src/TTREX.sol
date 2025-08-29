// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TTREX is ERC1155, ERC1155Burnable, Ownable {
    using Strings for uint256;

    uint256 private _propertyIds;
    string public name = "TTREX Fractionalized Assets";
    string public symbol = "TTREX";

    struct Property {
        uint256 propertyId;
        string metadataURI;
        uint256 totalFractions;
        uint256 fractionsMinted;
        address originalOwner;
        bool fractionalized;
    }

    mapping(uint256 => Property) public properties;
    mapping(uint256 => uint256) public propertyTokenId;

    event PropertyCreated(
        uint256 indexed propertyId,
        string metadataURI,
        address indexed owner
    );
    event PropertyFractionalized(uint256 indexed propertyId);
    event FractionsMinted(
        uint256 indexed propertyId,
        uint256 amount,
        address indexed to
    );
    event FractionsBurned(
        uint256 indexed propertyId,
        uint256 amount,
        address indexed from
    );

    constructor(string memory baseURI) ERC1155(baseURI) Ownable(msg.sender) {}

    // Create property without fractions
    function createProperty(
        string memory metadataURI
    ) external onlyOwner returns (uint256) {
        _propertyIds++;
        uint256 newId = _propertyIds;

        properties[newId] = Property({
            propertyId: newId,
            metadataURI: metadataURI,
            totalFractions: 0, // initially 0
            fractionsMinted: 0,
            originalOwner: msg.sender,
            fractionalized: false
        });

        propertyTokenId[newId] = newId;

        emit PropertyCreated(newId, metadataURI, msg.sender);
        return newId;
    }

    // Set total fractions and fractionalize
    function fractionalizeProperty(
        uint256 propertyId,
        uint256 totalFractions
    ) external onlyOwner {
        Property storage prop = properties[propertyId];
        require(!prop.fractionalized, "Property already fractionalized");
        prop.fractionalized = true;
        prop.totalFractions = totalFractions;

        emit PropertyFractionalized(propertyId);
    }

    function mintFractions(
        uint256 propertyId,
        address to,
        uint256 amount
    ) external onlyOwner {
        Property storage prop = properties[propertyId];
        require(prop.fractionalized, "Property not fractionalized yet");
        require(
            prop.fractionsMinted + amount <= prop.totalFractions,
            "Exceeds max fractions"
        );

        _mint(to, propertyTokenId[propertyId], amount, "");
        prop.fractionsMinted += amount;

        emit FractionsMinted(propertyId, amount, to);
    }

    function burnFractions(uint256 propertyId, uint256 amount) external {
        _burn(msg.sender, propertyTokenId[propertyId], amount);

        Property storage prop = properties[propertyId];
        require(prop.fractionsMinted >= amount, "Cannot burn more than minted");
        prop.fractionsMinted -= amount;

        emit FractionsBurned(propertyId, amount, msg.sender);
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        require(tokenId > 0 && tokenId <= _propertyIds, "Invalid tokenId");
        return
            string(
                abi.encodePacked(
                    super.uri(tokenId),
                    tokenId.toString(),
                    ".json"
                )
            );
    }

    function totalProperties() external view returns (uint256) {
        return _propertyIds;
    }

    function unlockProperty(uint256 propertyId) external {
        Property storage prop = properties[propertyId];
        require(prop.fractionalized, "Property not fractionalized");
        require(
            msg.sender == prop.originalOwner,
            "Only original owner can unlock"
        );

        // Ensure all fractions are returned or burned
        uint256 remainingFractions = prop.totalFractions - prop.fractionsMinted;
        require(
            remainingFractions == 0,
            "All fractions must be reclaimed or burned"
        );

        prop.fractionalized = false;

        // Mint back the "full NFT" to the original owner if needed
        _mint(prop.originalOwner, propertyTokenId[propertyId], 1, "");

        emit PropertyFractionalized(propertyId); // Or emit a separate "Unlocked" event
    }

    function getPropertyFractions(
        uint256 propertyId
    ) external view returns (uint256 minted, uint256 total) {
        Property storage prop = properties[propertyId];
        return (prop.fractionsMinted, prop.totalFractions);
    }
}
