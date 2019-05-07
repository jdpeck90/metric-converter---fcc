/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
    this.getNum = function(input) {
        var splitNumber = input.split(/[^/0-9.]/);
        var result = eval(splitNumber[0]);

        console.log(result, splitNumber, 'from getNum');
        if (isNaN(result)) {
            console.log('isNan');
            return (result = 'invalid number');
        } else {
            console.log('hit the result');
            return result;
        }
        return result;
    };

    this.getUnit = function(input) {
        var result;
        var splitInput = input.split(/[^a-zA-Z]/);
        result = splitInput[splitInput.length - 1];

        if (result.indexOf(['gal', 'mi', 'kg', 'lbs', 'km', 'L'])) return result;
    };

    this.getReturnUnit = function(initUnit) {
        var result;
        switch (initUnit) {
            case 'gal':
                {
                    return (result = 'L');
                }
            case 'mi':
                {
                    return (result = 'km');
                }
            case 'lbs':
                {
                    return (result = 'kg');
                }
            case 'L':
                {
                    return (result = 'gal');
                }
            case 'km':
                {
                    return (result = 'mi');
                }
            case 'kg':
                {
                    return (result = 'lbs');
                }
            default:
                {
                    return 'invalid unit';
                }
        }
        return result;
    };

    this.spellOutUnit = function(unit) {
        var result = unit;
        console.log('spellOutUnit', unit);

        return result;
    };

    this.convert = function(initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        var result;

        switch (initUnit) {
            case 'gal':
                {
                    console.log('initNum', initNum, parseInt(initNum));
                    result = parseFloat(initNum).toFixed(2) * galToL;
                    console.log('galtoL', result);
                    return result;
                }
            case 'mi':
                {
                    result = parseFloat(initNum).toFixed(2) * miToKm;
                    console.log('mitoKM', result);
                    return result;
                }
            case 'lbs':
                {
                    result = parseFloat(initNum).toFixed(2) * lbsToKg;
                    console.log('lbsToKg', result);
                    return result;
                }
            case 'L':
                {
                    console.log('initNum', initNum, parseInt(initNum));
                    result = parseFloat(initNum).toFixed(2) / galToL;
                    console.log('Ltogal', result);
                    return result;
                }
            case 'mi':
                {
                    result = parseFloat(initNum).toFixed(2) / miToKm;
                    console.log('KMtomi', result);
                    return result;
                }
            case 'kg':
                {
                    result = parseFloat(initNum).toFixed(2) / lbsToKg;
                    console.log('KgTolbs', result);
                    return result;
                }
            default:
                {
                    return 'invalid number';
                }
        }
        return result;
    };

    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        var stringResult;
        if (initUnit == 'invalid unit' && initNum == 'invalid number') {
            stringResult = 'invalid unit';
        } else if (initNum == 'invalid number') {
            stringResult = 'invalid number';
        } else if (returnUnit == 'invalid unit' || initUnit == 'invalid unit') {
            stringResult = 'invalid number and unit';
        } else {
            stringResult = ` ${initNum + initUnit} converts to ${returnNum +
        returnUnit}`;
        }
        var unitNumResults = {
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: stringResult
        };

        return unitNumResults;
    };
}

module.exports = ConvertHandler;