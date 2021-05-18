function VATinclusivePrice (amount,VATrate) {
    const netValue= amount + (amount * (VATrate / 100)) 
    return netValue;
}

module.exports = VATinclusivePrice;