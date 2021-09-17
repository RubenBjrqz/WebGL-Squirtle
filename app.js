const canvas = document.getElementById('gl-canvas');
const gl = canvas.getContext('webgl2');

gl.clearColor(1, 1, 1, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

//Shader para posiciones
const vertexShader = `#version 300 es
precision mediump float;
in vec2 position;
in vec3 color;
out vec3 vColor;
void main()
{
    gl_Position = vec4(position, 0, 1);
    vColor = color;
}
`;

//Shader para color
const fragmentShader = `#version 300 es
precision mediump float;
out vec4 fragColor;
in vec3 vColor;
void main()
{
    fragColor = vec4(vColor, 1);
}
`;

const vs = gl.createShader(gl.VERTEX_SHADER);
const fs = gl.createShader(gl.FRAGMENT_SHADER);

gl.shaderSource(vs, vertexShader);
gl.shaderSource(fs, fragmentShader);

gl.compileShader(vs);
gl.compileShader(fs);

if(!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
{
    console.error(gl.getShaderInfoLog(vs));
}

if(!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
{
    console.error(gl.getShaderInfoLog(fs));
}

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

if(!gl.getProgramParameter(program, gl.LINK_STATUS))
{
    console.error(gl.getProgramInfoLog(program));
}

gl.useProgram(program);

//Dibujo de triangulo basico
const triangleCoords = [

    //X,Y (-1,1)

];

console.log(triangleCoords);

//Ciclo1
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 1.0,
        x, 0.9,
        x + 0.1, 1.0,

        x + 0.1, 1.0,
        x + 0.1, 0.9,
        x, 0.9,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo2
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.9,
        x, 0.8,
        x + 0.1, 0.9,

        x + 0.1, 0.9,
        x + 0.1, 0.8,
        x, 0.8,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo3
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.8,
        x, 0.7,
        x + 0.1, 0.8,

        x + 0.1, 0.8,
        x + 0.1, 0.7,
        x, 0.7,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo4
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.7,
        x, 0.6,
        x + 0.1, 0.7,

        x + 0.1, 0.7,
        x + 0.1, 0.6,
        x, 0.6,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo5
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.6,
        x, 0.5,
        x + 0.1, 0.6,

        x + 0.1, 0.6,
        x + 0.1, 0.5,
        x, 0.5,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo6
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.5,
        x, 0.4,
        x + 0.1, 0.5,

        x + 0.1, 0.5,
        x + 0.1, 0.4,
        x, 0.4,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo7
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.4,
        x, 0.3,
        x + 0.1, 0.4,

        x + 0.1, 0.4,
        x + 0.1, 0.3,
        x, 0.3,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo8
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.3,
        x, 0.2,
        x + 0.1, 0.3,

        x + 0.1, 0.3,
        x + 0.1, 0.2,
        x, 0.2,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo9
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.2,
        x, 0.1,
        x + 0.1, 0.2,

        x + 0.1, 0.2,
        x + 0.1, 0.1,
        x, 0.1,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo10
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.1,
        x, 0.0,
        x + 0.1, 0.1,

        x + 0.1, 0.1,
        x + 0.1, 0.0,
        x, 0.0,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo11
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, 0.0,
        x, -0.1,
        x + 0.1, 0.0,

        x + 0.1, 0.0,
        x + 0.1, -0.1,
        x, -0.1,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo12
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, -0.1,
        x, -0.2,
        x + 0.1, -0.1,

        x + 0.1, -0.1,
        x + 0.1, -0.2,
        x, -0.2,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo13
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, -0.2,
        x, -0.3,
        x + 0.1, -0.2,

        x + 0.1, -0.2,
        x + 0.1, -0.3,
        x, -0.3,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo14
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, -0.3,
        x, -0.4,
        x + 0.1, -0.3,

        x + 0.1, -0.3,
        x + 0.1, -0.4,
        x, -0.4,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo15
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, -0.4,
        x, -0.5,
        x + 0.1, -0.4,

        x + 0.1, -0.4,
        x + 0.1, -0.5,
        x, -0.5,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

//Ciclo16
for(let x = -1; x <= 1; x += 0.1) {
    const coordinates = [
        x, -0.5,
        x, -0.6,
        x + 0.1, -0.5,

        x + 0.1, -0.5,
        x + 0.1, -0.6,
        x, -0.6,
    ];
  
    coordinates.forEach(element => {
        triangleCoords.push(element);
    });

}

console.log(triangleCoords);

const vertexColor = [

    //RGB

];

//Reservar memoria en la tarjeta de video (Vram)
const positionBuffer = gl.createBuffer();
const colorBuffer = gl.createBuffer();

//Posicion
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleCoords), gl.STATIC_DRAW);

const attribPosition = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(attribPosition);
gl.vertexAttribPointer(attribPosition, 2, gl.FLOAT, gl.FALSE, 0, 0);

//Color
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexColor), gl.STATIC_DRAW);

const color = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(color);
gl.vertexAttribPointer(color, 3, gl.FLOAT, gl.FALSE, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 5000);