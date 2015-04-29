var gl;
var points;
var vertices;
var bufferId;
var vPosition;
var program;
var canvas;
var i = 0;
window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );
	canvas.addEventListener('click',change, false);
	
	// canvas.width =  screen.availWidth-50;
	// canvas.height =  screen.availHeight-200;

	gl = WebGLUtils.setupWebGL( canvas );
	if ( !gl ) { alert( "WebGL isn't available" ); }
	
	vertices = new Float32Array([.5,.5, 
				-.5,.5, 
				.5,-.5, 
				-.5,-.5]);
				
//
// Configure WebGL
//
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
// Load shaders and initialize attribute buffers
	program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

    bufferId = gl.createBuffer();
	
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	
	gl.bufferData( gl.ARRAY_BUFFER,vertices, gl.STATIC_DRAW );
	
	vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	
	render();
};

function render() {
	gl.clear( gl.COLOR_BUFFER_BIT );
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER,vertices, gl.STATIC_DRAW );
	vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	gl.drawArrays( gl.TRIANGLE_STRIP, 0, vertices.length/2 );
	
    requestAnimFrame( render );
}

function change(){
	if (i == 0){
		vertices = new Float32Array([0,.5, 
				-.5,0, 
				.5,0, 
				0,-.5]);
		++i;
	}
	else if(i == 1){
		vertices = new Float32Array([0,.5, 
				-.5,-.5, 
				.5,-.5]);
		++i;
	}
	else{
		vertices = new Float32Array([.5,.5, 
				-.5,.5, 
				.5,-.5, 
				-.5,-.5]);
		i = 0;
	}
}

// var gl;
// var points;

// window.onload = function init()
// {
    // var canvas = document.getElementById( "gl-canvas" );

	// var triangleVertexPositionBuffer;
    // var squareVertexPositionBuffer;
    
	
	
    // gl = WebGLUtils.setupWebGL( canvas );
    // if ( !gl ) { alert( "WebGL isn't available" ); }


    
//     Configure WebGL
    
    // gl.viewport( 0, 0, canvas.width, canvas.height );
    // gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    
//     Load shaders and initialize attribute buffers
    
    // var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    // gl.useProgram( program );
    
//    Load the data into the GPU

//    Associate our shader variables with our data buffer

    // render();
// };

// function webGLStart() {
    // var canvas = document.getElementById("canvas");
    // gl = WebGLUtils.setupWebGL( canvas );
	// if ( !gl ) { alert( "WebGL isn't available" ); }
    // initShaders();
    // initBuffers();

    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.enable(gl.DEPTH_TEST);

    // drawScene();
  // }

// function initBuffers() {
    // triangleVertexPositionBuffer = gl.createBuffer();
	
	// gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	
	// var vertices = [
         // 0.0,  1.0,  0.0,
        // -1.0, -1.0,  0.0,
         // 1.0, -1.0,  0.0
    // ];
	
	// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
	// triangleVertexPositionBuffer.itemSize = 3;
    // triangleVertexPositionBuffer.numItems = 3;
	
	
	// squareVertexPositionBuffer = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
    // vertices = [
         // 1.0,  1.0,  0.0,
        // -1.0,  1.0,  0.0,
         // 1.0, -1.0,  0.0,
        // -1.0, -1.0,  0.0
    // ];
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
	// squareVertexPositionBuffer.itemSize = 3;
    // squareVertexPositionBuffer.numItems = 4;
	
// }


// function drawScene() {
    // gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

	// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	 
	// mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	// mat4.identity(mvMatrix);
	// mat4.translate(mvMatrix, [-1.5, 0.0, -7.0]);
	
	// gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
    // gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
// }
	
// function render() {
    // gl.clear( gl.COLOR_BUFFER_BIT );
// }
