const calculateSip = (investment, annualRate, years) => {
    let monthlyRate = annualRate/12/100;
    let months = years * 12;
    let futurevalue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

    return futurevalue.toFixed(2);
}

export default calculateSip;