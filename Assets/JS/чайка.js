(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"чайка_atlas_1", frames: [[802,0,338,338],[0,602,996,332],[0,0,800,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.касатка = function() {
	this.initialize(img.касатка);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.льдина = function() {
	this.initialize(ss["чайка_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.фонарктика = function() {
	this.initialize(ss["чайка_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.чайка_1 = function() {
	this.initialize(ss["чайка_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.чайка_1();
	this.instance.setTransform(-74.8,-56.1,0.187,0.187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-56.1,149.6,112.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.льдина();
	this.instance.setTransform(-351.95,-323.75,2.0825,1.9157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.9,-323.7,703.9,647.5);


(lib.пингвин1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AjYAEQACgLACgMQAShlA4g5QA5g6BOAAQBNAAA4BBQA4BBAYBlQABADABADADeBYQgCArgMAiQgbBFi9ACQi9ABgQhOQgHgigBgl");
	this.shape.setTransform(-0.1,0.0254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AjNgXQADgUAFgWQAgiZBPAmQBOAnAvgpQAxgpAuAzQAvAyAXBZQACAGABAGADYA8QgBAigJAfQgVBGi0AGQi0AFgbg7QgPgfACg4");
	this.shape_1.setTransform(-0.1121,2.376);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("ABPAEQgGgCgBgCQABgBAGgCQAHgCAJAAQAKAAAGACQAGACAAABQAAACgGACQgGACgKAAQgJAAgHgCgAhuAEQgGgCgBgCQABgBAGgCQAGgCAKAAQAJAAAHACQAGACAAABQAAACgGACQgHACgJAAQgKAAgGgCg");
	this.shape_2.setTransform(-1.2,-0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjWCfQgHgiAAglIgIAGQgZARgYAKQgZAKgFgFQgGgFARgaQARgbAcgnQAdgmAGANIAFgXQARhlA4g5QA5g6BOAAQBMAAA5BBQA4BBAYBlIACAGQgBgEAHgCQAGgCAdAmQAdAmARAbQARAagGAFQgFAFgZgKQgYgKgZgRIgKgIQgBArgNAiQgaBFi9ACIgEAAQi5AAgQhNgAjLCqQAbA7C0gFQCzgFAWhGQAJgfABgjQgIAVgDgdQgCgdgFghQgEggANAVIgDgLQgYhagugyQgvgygwApQgvAohOgmQhPgnghCZQgEAWgEAUQAOgVgGApQgFApgBAXQgCAWgJgWQgCA3APAfgAA6gXQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAA+gzQAAAAgBABQAAAAAAAAQAAABAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABgAhugXQgHgHAAgKQAAgKAHgHQAHgHAKAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgKAAgHgHgAhqgzQAAAAgBABQAAAAAAAAQAAABAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_3.setTransform(0,0.0254);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("AgBAOQgOgBgJgIQgLgHAAgGQAAgGASADQASACAMgCIASgDQAEAAAAAGQAAAGgLAIQgKAJgNAAIgCgBg");
	this.shape_4.setTransform(-1,-1.4969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjKCTQgPgfACg4QAKAWABgWQABgWAGgpQAFgqgNAWQADgUAFgWQAgiZBPAmQBOAnAvgpQAxgpAuAzQAvAyAXBZIADAMQgNgWAFAhQAEAgADAdQACAdAIgUQgBAigJAfQgVBGi0AGIgbAAQibAAgZg2gAgrgvQAAAGAKAJQAJAIAPABQANABAMgJQALgKAAgGQAAgGgFABIgSACQgLADgSgDIgKgBQgIAAAAAEgABEgiQgGACAAADQAAACAGACQAHACAJAAQAKAAAGgCQAHgCAAgCQAAgDgHgCQgGgBgKAAQgJAAgHABgAh5giQgGACAAADQAAACAGACQAHACAJAAQAKAAAGgCQAHgCAAgCQAAgDgHgCQgGgBgKAAQgJAAgHABgAA7hRQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAhthRQgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAA/hDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAhphDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(-0.1121,2.376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-25,62.1,50.1);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AzQgVgVAAgeQABgTAKgRQAFgIAHgGQAVgVAeAAIADAAIACAAQAcABATAUQAVAVAAAdQgBAegWAVQgWAVgdAAQgfAAgVgVg");
	this.shape.setTransform(7.825,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4FFFF").s().p("Ag7A7QgYgYAAgjQAAgbAPgVQgKARgBAUQAAAdAVAVQAVAVAfAAQAdAAAXgVQAVgVABgdQABgegWgVQgTgUgcgBQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgZgZg");
	this.shape_1.setTransform(8.4,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,16.8,16.8), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(1,1,1).p("AgmgLIBMANIhMAKg");
	this.shape.setTransform(52.45,-3.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(0.7,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADg");
	this.shape_1.setTransform(44.125,-5.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABfhKQAagBAdAAQByAABQAZQAEABAGACQAegGAbgPQAMgHALgJIALAoQgTAQgVAMQgzAXg5gNIgLgoQAkAFAggGABfhKIAEAAIhwBtIhsgNAGbhEQADgGAEgEQASgRAZAAQAZAAARARQASASAAAZQAAAZgSAPQgRASgZAAQgVAAgQgMQgDgDgDgDQgKgJgDgMAGoALQgBAihPAaQhQAZhyAAQhzAAhPgZQhCgVgLgcIlegsIgxglIJngP");
	this.shape_2.setTransform(-4.225,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgmgLIBNAMIhNALg");
	this.shape_3.setTransform(52.45,-3.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(44.125,-5.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsBHQhCgVgLgcIBsANIBwhtIgEAAQAagBAdAAQByAABQAZIAKADQgSADgUAAIAAAAIAAAAIgWgBIgIgBIALAoIACABIABAAQATAEATAAIAAAAIAAAAQAjAAAggPQggAPgjAAIAAAAIAAAAQgTAAgTgEIgBAAIgCgBIgLgoIAIABIAWABIAAAAIAAAAQAUAAASgDQAegGAbgPQAMgHALgJIALAoQgTAQgVAMQADAMAKAJIAGAGQgBAihPAaQhQAZhyAAQhzAAhPgZgAh5AWIlegsIgxglIJngPIAEAAIhwBtgAGoALIgGgGQgKgJgDgMQAVgMATgQIgLgoQgLAJgMAHQADgGAEgEQASgRAZAAQAZAAARARQASASAAAZQAAAZgSAPQgRASgZAAQgVAAgQgMgAHcg/QgDADAAAEQAAAEADADQADADAEAAQAFAAADgDQADgDAAgEQAAgEgDgDQgDgDgFAAQgEAAgDADgAh5AWgAGVgQIAAAAg");
	this.shape_5.setTransform(-4.225,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-10.5,114.6,21.1);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#995A0D").ss(5,1,1).p("AppgFQhChJgrhTQMfCgKOimQgtBegmBEQgpBOhDBIQnqAuoAguQhIgzhPhjgAKEgFQprCJqCiJ");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AnSCRQhIgzhOhjQFBBEE6AAQE8AAE1hEQk1BEk8AAQk6AAlBhEQhDhJgqhTQMeCgKNimQgsBegmBEQgqBOhDBIQj0AXj7AAQj6AAkAgXg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-19.3,150.3,38.7);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.касатка();
	this.instance.setTransform(-492.1,-284.6,0.2647,0.2647,-24.7004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.1,-558.9,984.3,1117.8);


(lib.лодка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация5("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.4567},49).to({rotation:1.1996},39).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,-25.5,151.5,47.6);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-10.5,114.6,21.1);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.instance = new lib.Символ3();
	this.instance.setTransform(-0.1,-0.1,1,1,0,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.4,regY:8.4,scaleX:1.08,scaleY:1.08,x:0,y:0},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:0.05,y:0.05},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:0,y:0},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:0.05,y:0.05},0).wait(1).to({scaleX:1.256,scaleY:1.256},0).wait(1).to({scaleX:1.192,scaleY:1.192,x:0,y:0},0).wait(1).to({scaleX:1.128,scaleY:1.128,x:0.05,y:0.05},0).wait(1).to({scaleX:1.064,scaleY:1.064},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:0.05,y:0.05},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:0.1,y:0.1},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:0.05,y:0.05},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:0.1,y:0.1},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:0.05,y:0.05},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.1,30.299999999999997,30.299999999999997);


(lib.снежок = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:0.004,y:0.004,startPosition:1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:0.008,y:0.008,startPosition:2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:0.012,y:0.012,startPosition:3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:0.016,y:0.016,startPosition:4},0).wait(1).to({scaleX:1.256,scaleY:1.256,x:0.0128,y:0.0128,startPosition:5},0).wait(1).to({scaleX:1.192,scaleY:1.192,x:0.0096,y:0.0096,startPosition:6},0).wait(1).to({scaleX:1.128,scaleY:1.128,x:0.0064,y:0.0064,startPosition:7},0).wait(1).to({scaleX:1.064,scaleY:1.064,x:0.0032,y:0.0032,startPosition:8},0).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-14.5,29.2,29.2);


// stage content:
(lib.чайка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.instance = new lib.Символ2("synched",0);
	this.instance.setTransform(-90.55,106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-75.996,y:106.2278},0).wait(1).to({x:-61.4419,y:106.2556},0).wait(1).to({x:-46.8879,y:106.2833},0).wait(1).to({x:-32.3338,y:106.3111},0).wait(1).to({x:-17.7798,y:106.3389},0).wait(1).to({x:-3.2258,y:106.3667},0).wait(1).to({x:11.3283,y:106.3944},0).wait(1).to({x:25.8823,y:106.4222},0).wait(1).to({x:40.4364,y:106.45},0).wait(1).to({x:54.9904,y:106.4778},0).wait(1).to({x:69.5444,y:106.5056},0).wait(1).to({x:84.0985,y:106.5333},0).wait(1).to({x:98.6525,y:106.5611},0).wait(1).to({x:113.2066,y:106.5889},0).wait(1).to({x:127.7606,y:106.6167},0).wait(1).to({x:142.3147,y:106.6444},0).wait(1).to({x:156.8687,y:106.6722},0).wait(1).to({x:171.4227,y:106.7},0).wait(1).to({x:185.9768,y:106.7278},0).wait(1).to({x:200.5308,y:106.7556},0).wait(1).to({x:215.0849,y:106.7833},0).wait(1).to({x:229.6389,y:106.8111},0).wait(1).to({x:244.1929,y:106.8389},0).wait(1).to({x:258.747,y:106.8667},0).wait(1).to({x:273.301,y:106.8944},0).wait(1).to({x:287.8551,y:106.9222},0).wait(1).to({x:302.4091,y:106.95},0).wait(1).to({x:316.9631,y:106.9778},0).wait(1).to({x:331.5172,y:107.0056},0).wait(1).to({x:346.0712,y:107.0333},0).wait(1).to({x:360.6253,y:107.0611},0).wait(1).to({x:375.1793,y:107.0889},0).wait(1).to({x:389.7333,y:107.1167},0).wait(1).to({x:404.2874,y:107.1444},0).wait(1).to({x:418.8414,y:107.1722},0).wait(1).to({x:433.3955,y:107.2},0).wait(1).to({x:447.9495,y:107.2278},0).wait(1).to({x:462.5035,y:107.2556},0).wait(1).to({x:477.0576,y:107.2833},0).wait(1).to({x:491.6116,y:107.3111},0).wait(1).to({x:506.1657,y:107.3389},0).wait(1).to({x:520.7197,y:107.3667},0).wait(1).to({x:535.2737,y:107.3944},0).wait(1).to({x:549.8278,y:107.4222},0).wait(1).to({x:564.3818,y:107.45},0).wait(1).to({x:578.9359,y:107.4778},0).wait(1).to({x:593.4899,y:107.5056},0).wait(1).to({x:608.0439,y:107.5333},0).wait(1).to({x:622.598,y:107.5611},0).wait(1).to({x:637.152,y:107.5889},0).wait(1).to({x:651.7061,y:107.6167},0).wait(1).to({x:666.2601,y:107.6444},0).wait(1).to({x:680.8141,y:107.6722},0).wait(1).to({x:695.3682,y:107.7},0).wait(1).to({x:709.9222,y:107.7278},0).wait(1).to({x:724.4763,y:107.7556},0).wait(1).to({x:739.0303,y:107.7833},0).wait(1).to({x:753.5843,y:107.8111},0).wait(1).to({x:768.1384,y:107.8389},0).wait(1).to({x:782.6924,y:107.8667},0).wait(1).to({x:797.2465,y:107.8944},0).wait(1).to({x:811.8005,y:107.9222},0).wait(1).to({x:826.3546,y:107.95},0).wait(1).to({x:840.9086,y:107.9778},0).wait(1).to({x:855.4626,y:108.0056},0).wait(1).to({x:870.0167,y:108.0333},0).wait(1).to({x:884.5707,y:108.0611},0).wait(1).to({x:899.1248,y:108.0889},0).wait(1).to({x:913.6788,y:108.1167},0).wait(1).to({x:928.2328,y:108.1444},0).wait(1).to({x:942.7869,y:108.1722},0).wait(1).to({x:957.3409,y:108.2},0).wait(1).to({x:971.895,y:108.2278},0).wait(1).to({x:986.449,y:108.2556},0).wait(1).to({x:1001.003,y:108.2833},0).wait(1).to({x:1015.5571,y:108.3111},0).wait(1).to({x:1030.1111,y:108.3389},0).wait(1).to({x:1044.6652,y:108.3667},0).wait(1).to({x:1059.2192,y:108.3944},0).wait(1).to({x:1073.7732,y:108.4222},0).wait(1).to({x:1088.3273,y:108.45},0).wait(1).to({x:1102.8813,y:108.4778},0).wait(1).to({x:1117.4354,y:108.5056},0).wait(1).to({x:1131.9894,y:108.5333},0).wait(1).to({x:1146.5434,y:108.5611},0).wait(1).to({x:1161.0975,y:108.5889},0).wait(1).to({x:1175.6515,y:108.6167},0).wait(1).to({x:1190.2056,y:108.6444},0).wait(1).to({x:1204.7596,y:108.6722},0).wait(1).to({x:1219.3136,y:108.7},0).wait(1).to({x:1233.8677,y:108.7278},0).wait(1).to({x:1248.4217,y:108.7556},0).wait(1).to({x:1262.9758,y:108.7833},0).wait(1).to({x:1277.5298,y:108.8111},0).wait(1).to({x:1292.0838,y:108.8389},0).wait(1).to({x:1306.6379,y:108.8667},0).wait(1).to({x:1321.1919,y:108.8944},0).wait(1).to({x:1335.746,y:108.9222},0).wait(1).to({x:1350.3,y:108.95},0).wait(1));

	// касатка
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(48.6,827.15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({scaleX:1.524,scaleY:1.524,rotation:72.0006,guide:{path:[48.7,827.1,53.8,796.7,60.9,759.6,75.2,685.4,88.6,633.9,102,582.4,133.7,509.8,165.5,437.2,211.6,382.1,257.9,326.8,313.4,295.2,339.4,280.4,360.6,271]}},20).to({regX:0.1,regY:-0.1,scaleX:1.5502,scaleY:1.5502,rotation:75.6003,guide:{path:[360.6,270.9,377.6,263.5,391.4,259.5]}},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:90,guide:{path:[391.4,259.5,397.1,257.9,402.3,256.8,435.8,250.2,453.4,249.8,470.9,249.5,495.2,250,508.8,250.4,523.3,253.3]}},4).to({rotation:132.0002,guide:{path:[523.4,253.4,534.8,255.7,546.8,259.5,612,280.5,662.5,328.1,711.8,374.6,737.9,409.1,755,431.7,771.6,464.2,786.6,493.4,803.1,544,804,546.8,804.9,549.5]}},15).to({_off:true},1).wait(40));

	// чайка
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(494.8,539.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:424.55,y:524.55},4).to({x:346.95,y:545.55},5).to({x:294.45},10).to({skewY:180},1).to({x:392.15},19).to({x:435.8,y:535.9},5).to({x:510.15,y:548.05},5).to({skewY:0},1).to({x:478.65},9).to({x:439.1,y:539.2},5).to({x:383.35,y:547.3},5).to({skewY:180},1).to({x:414.85},9).to({x:310.7,y:553.75},20).wait(1));

	// льдина
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(450.95,598.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.9441,x:361.3},19).to({regX:0.1,regY:0.1,rotation:2.097,x:466.15,y:598.85},20).to({regX:0.2,scaleX:0.9999,scaleY:0.9999,rotation:-0.8945,x:401.75},20).to({regX:0.3,rotation:3.5687,x:468.65},20).to({regX:0.4,rotation:-2.6099,x:370.8,y:598.95},20).wait(1));

	// лодка
	this.instance_4 = new lib.лодка("synched",0);
	this.instance_4.setTransform(723.1,531.25,1.5815,1.5815,-2.1919);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,regY:0.1,scaleX:1.5814,scaleY:1.5814,rotation:-2.1914,x:772.7,y:531.35,startPosition:47},47).to({regX:0,regY:0,scaleX:1.5815,scaleY:1.5815,rotation:-2.1919,x:774.6,y:531.25,startPosition:39},2).to({x:723.1,startPosition:0},50).wait(1));

	// снежок
	this.instance_5 = new lib.снежок("synched",0);
	this.instance_5.setTransform(706.3,496.45);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.setTransform(596.55,259.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},33).to({state:[{t:this.instance_6}]},9).to({state:[]},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({_off:true,x:596.55,y:259.9},9).wait(58));

	// пингвин
	this.instance_7 = new lib.пингвин1("synched",0);
	this.instance_7.setTransform(658.6,501.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:660.9683,y:501.9947},0).wait(1).to({x:663.3545,y:501.8718},0).wait(1).to({x:665.7538,y:501.3221},0).wait(1).to({x:668.1323,y:499.8262},0).wait(1).to({x:670.5225,y:497.9188},0).wait(1).to({x:672.9164,y:496.5894},0).wait(1).to({x:675.3068,y:496.4241},0).wait(1).to({x:677.6968,y:496.3565},0).wait(1).to({x:680.0832,y:496.2814},0).wait(1).to({x:682.4693,y:496.2504},0).wait(1).to({x:684.8525,y:496.2943},0).wait(1).to({x:687.239,y:496.3728},0).wait(1).to({x:689.6242,y:496.4283},0).wait(1).to({x:692.0129,y:496.889},0).wait(1).to({x:694.4007,y:498.2482},0).wait(1).to({x:696.7893,y:500.2614},0).wait(1).to({x:699.1788,y:501.4826},0).wait(1).to({x:701.5638,y:501.9215},0).wait(1).to({x:703.951,y:501.9899},0).wait(1).to({x:706.336,y:501.954},0).wait(1).to({x:708.7232,y:501.9918},0).wait(1).to({x:711.1118,y:501.8058},0).wait(1).to({x:713.4975,y:501.1275},0).wait(1).to({x:715.8855,y:499.4038},0).wait(1).to({x:718.2718,y:497.6447},0).wait(1).to({x:720.6584,y:496.4197},0).wait(1).to({x:723.0411,y:496.4151},0).wait(1).to({x:725.4274,y:496.3401},0).wait(1).to({x:727.8155,y:496.2699},0).wait(1).to({x:730.2004,y:496.2534},0).wait(1).to({x:732.5855,y:496.3086},0).wait(1).to({x:734.9702,y:496.3885},0).wait(1).to({x:737.3507,y:496.4253},0).wait(1).to({x:739.7411,y:497.3065},0).wait(1).to({x:742.0925,y:498.611},0).wait(1).to({x:744.4566,y:500.6081},0).wait(1).to({x:746.8449,y:501.6142},0).wait(1).to({x:749.2326,y:501.9568},0).wait(1).to({x:751.6211,y:501.9797},0).wait(1).to({x:754.0106,y:501.965},0).wait(1).to({x:756.4039,y:501.9797},0).wait(1).to({x:758.7918,y:501.7208},0).wait(1).to({x:761.1703,y:500.8925},0).wait(1).to({x:763.5599,y:498.9968},0).wait(1).to({x:765.9467,y:497.5208},0).wait(1).to({x:768.3342,y:496.411},0).wait(1).to({x:770.7202,y:496.4029},0).wait(1).to({x:773.112,y:496.3239},0).wait(1).to({x:775.496,y:496.2599},0).wait(1).to({x:777.8759},0).wait(1).to({x:780.2714,y:496.3239},0).wait(1).to({x:782.6647,y:496.4029},0).wait(1).to({x:785.0562,y:496.411},0).wait(1).to({x:787.4473,y:497.5208},0).wait(1).to({x:789.8388,y:498.9968},0).wait(1).to({x:792.223,y:500.8925},0).wait(1).to({x:794.6274,y:501.7208},0).wait(1).to({x:794.6928,y:501.9797},0).wait(1).to({x:792.2891,y:501.965},0).wait(1).to({x:789.9159,y:501.9797},0).wait(1).to({x:787.5295,y:501.9568},0).wait(1).to({x:785.1381,y:501.6142},0).wait(1).to({x:782.7473,y:500.6081},0).wait(1).to({x:780.355,y:498.611},0).wait(1).to({x:777.9679,y:497.3065},0).wait(1).to({x:775.5844,y:496.4253},0).wait(1).to({x:773.1923,y:496.3885},0).wait(1).to({x:770.8017,y:496.3086},0).wait(1).to({x:768.4124,y:496.2534},0).wait(1).to({x:766.0093,y:496.2699},0).wait(1).to({x:763.6486,y:496.3401},0).wait(1).to({x:761.2604,y:496.4151},0).wait(1).to({x:758.8722,y:496.4197},0).wait(1).to({x:756.4889,y:497.6447},0).wait(1).to({x:754.1019,y:499.4038},0).wait(1).to({x:751.7174,y:501.1275},0).wait(1).to({x:749.3277,y:501.8058},0).wait(1).to({x:746.9402,y:501.9918},0).wait(1).to({x:744.5497,y:501.954},0).wait(1).to({x:742.1613,y:501.9899},0).wait(1).to({x:739.7739,y:501.9215},0).wait(1).to({x:737.3857,y:501.4826},0).wait(1).to({x:734.998,y:500.2614},0).wait(1).to({x:732.6088,y:498.2482},0).wait(1).to({x:730.2224,y:496.889},0).wait(1).to({x:727.8346,y:496.4283},0).wait(1).to({x:725.4423,y:496.3728},0).wait(1).to({x:723.0545,y:496.2943},0).wait(1).to({x:720.6648,y:496.2504},0).wait(1).to({x:718.277,y:496.2814},0).wait(1).to({x:715.8895,y:496.3565},0).wait(1).to({x:713.5046,y:496.4241},0).wait(1).to({x:711.1151,y:496.5894},0).wait(1).to({x:708.7257,y:497.9188},0).wait(1).to({x:706.3318,y:499.8262},0).wait(1).to({x:703.9423,y:501.3221},0).wait(1).to({x:701.5727,y:501.8718},0).wait(1).to({x:699.164,y:501.9947},0).wait(1).to({x:696.8,y:501.95},0).wait(1));

	// фон
	this.instance_8 = new lib.фонарктика();
	this.instance_8.setTransform(-1,0,1.2869,2.168);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(141.5,-229.1,1266.1,1615.1999999999998);
// library properties:
lib.properties = {
	id: '6B43A39F34ADEC4F890C3559A5919385',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/касатка_.png", id:"касатка"},
		{src:"images/чайка_atlas_1.png", id:"чайка_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6B43A39F34ADEC4F890C3559A5919385'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;