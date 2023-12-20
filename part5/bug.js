const measureKelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celcius",
        value: 95
    };

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());