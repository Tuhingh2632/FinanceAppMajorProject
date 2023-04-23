const calculateInvestment = (principal, years) => {
    return (principal * 12 * years).toFixed(2);
}

export default calculateInvestment;