
const UpperCase = (stringToConvert) => {
    
    const firstChart = stringToConvert.slice(0,1).toUpperCase();
    const restOfString = stringToConvert.slice(1,stringToConvert.length);
    
    if (!stringToConvert.length && !firstChart.length && !restOfString.length) return null;

    return `${firstChart}${restOfString}`;
}

export default UpperCase;