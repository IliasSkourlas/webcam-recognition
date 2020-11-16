let mobilenet;
let whatIs;
let label = "";
let confidence = "";

function modelReady(){
    // console.log("model is ready");
    mobilenet.predict(gotResult)
}

function gotResult(error, results){
    if(error){
        // console.error(error);
    }else{
        console.log(results);
        label = results[0].label;
        confidence = results[0].confidence;
        mobilenet.predict(gotResult);
    }
}
function setup(){
    createCanvas(750, 800)
    whatIs = createCapture(VIDEO)
    whatIs.hide();
    background(0);
    mobilenet = ml5.imageClassifier("MobileNet",  whatIs, modelReady);
}

function draw(){
    background(0);
    image(whatIs, 0, 0 )
    fill(0, 250, 250)
    textSize(30)
    text(label, 10, height - 50)
    text("confidence: " + Math.floor( confidence*100 ) + " % ", 10, height - 10)
}