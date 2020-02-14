var workspace = Blockly.inject('blockly-canvas', {toolbox: document.getElementById('toolbox')});

function getJS() {
    // Generates Arduino code to display it.
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    return code;
}

function getArduino() {
    // Generates Arduino code to display it.
    Blockly.Arduino.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Arduino.workspaceToCode(workspace);
    return code;
}

function compileArduinoCode() {
    body = {
        "board": "arduino:avr:uno",
        "sketch": "void setup(){} void loop(){}"
    }

    $.post("http://104.248.62.207:3000/compile", body, (data) => {
        alert(data.hex)
    })
}

$(document).ready(function() {
    $('input[type=radio][name=model-btn]').change(function() {
        document.getElementById('model-img').src = `./assets/${this.value}.png`
    });
})