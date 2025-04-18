const slider = document.getElementById('slider');
const minVal = document.getElementById('min-val');
const maxVal = document.getElementById('max-val');
noUiSlider.create(slider, {
    start: [30, 70],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    console.log('Values:', values);
    minVal.textContent = Math.round(values[1]);
    maxVal.textContent = Math.round(values[0]);
});