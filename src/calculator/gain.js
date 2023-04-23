const calculateGain = (totalValue, totalInvestment) => {
    console.log(totalValue - totalInvestment);
    return (totalValue - totalInvestment).toFixed(2);
}

export default calculateGain;