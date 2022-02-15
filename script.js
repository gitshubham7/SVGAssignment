const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano',
    default: 'blank',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            // clear: true,
            // save: true
        }
    }
});

const memento = []
const input1 = document.querySelector('#input2')

function saveMementoo() {
  memento.push(input1.value)
}

function undoo() {
   
  const lastMementoo = memento.pop()
   
  input1.value = lastMementoo ? lastMementoo : input1.value
  var x = document.getElementById("input2").value;
  document.getElementById("buy2").innerHTML = x;
}


pickr.on('change', (color) => {
    console.log(color.toRGBA().toString());
    const rgbaColor= color.toRGBA().toString();
    document.querySelector('#buy2').style.fill=rgbaColor;
    document.querySelector('#buy1').style.fill=rgbaColor;
});

var changeFontStyle = function (font) {
    document.getElementById("buy1").style.fontFamily= font.value;
    document.getElementById("buy2").style.fontFamily= font.value;

}

//for hnaging 
var changeFontSize = function (font) {
    document.getElementById("buy1").style.fontSize= font.value;
    document.getElementById("buy2").style.fontSize= font.value;

}



    var svg = document.getElementById("svg");

    //get svg source.
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);
    
    //add name spaces.
    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    
    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    
    //convert svg source to URI data scheme.
    var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);
    
    //set url value to a element's href attribute.
    document.getElementById("link1").href = url;


const mementos = []
const input = document.querySelector('#input')

function saveMemento() {
  mementos.push(input.value)
}

function undo() {
   
  const lastMemento = mementos.pop()
   
  input.value = lastMemento ? lastMemento : input.value
  var x = document.getElementById("input").value;
  document.getElementById("buy1").innerHTML = x;
 
}

