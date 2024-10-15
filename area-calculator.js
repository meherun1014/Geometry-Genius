function calculateTriangleArea(){

    //triangle base

    const trianglebaseInput = document.getElementById('triangle-base')
    const triangleBaseText = trianglebaseInput.value;
    console.log(triangleBaseText)
    const base = parseFloat(triangleBaseText)      //parsefloat korar karon hocce value string ke number korar jonne
      
    
    
    //triangle height
    
    const triangleheightInput = document.getElementById('triangle-height')
    const trianglehightText = triangleheightInput.value;
    console.log(trianglehightText)
    const height = parseFloat(triangleBaseText)

    // console.log(typeof(triangleBaseText))    //eirkm hole string asbe tai parsefloat diye setha number ante hobe
    console.log(typeof(height))


    //triangle area

    const area = 0.5 *base*height;
    console.log("Area",area)

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText=area;
}



//Rectangle area


function calculateRectangleArea(){
              //Rectangle base

    const rectanglebaseInput = document.getElementById('rectangle-width')
    const rectangleText = rectanglebaseInput.value;
    console.log(rectangleText)
    const width = parseFloat(rectangleText)


    //Rectangle lenght

    const rectangleLength = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLength.value;
    console.log(rectangleLengthText)
    const length = parseFloat(rectangleLengthText)

    //Rectangle Area

    const Rectangle = width*length;
    console.log("Area",Rectangle)

    const RectangleArea = document.getElementById('rectangle-area')
    RectangleArea.innerText=Rectangle;
    
}



                //Parallelogram area

 function calculateParallelogramArea(){

    const Parallelogram=document.getElementById('parallelogram-base')
    const paralleogramBase = Parallelogram.value;
    console.log(paralleogramBase)
    const gram = parseFloat(paralleogramBase)


    const paralleogrambase = document.getElementById('parallelogram-height')
    const parallegramHeight = paralleogrambase.value;
    console.log(parallegramHeight)
    const paralleo = parseFloat(parallegramHeight)

    //paralleogram area

    const paralle = gram*paralleo;
    console.log('Area',paralle)

    const parallelogramArea = document.getElementById('parallelogram-area')
    parallelogramArea.innerText=paralle;

 }


