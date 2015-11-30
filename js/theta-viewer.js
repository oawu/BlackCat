(function(){var t;t=function(){function t(t){var e,i;this.dom=t,this.__defineGetter__("width",function(){return this.dom.clientWidth}),this.__defineGetter__("height",function(){return this.dom.clientHeight}),this.images=[],this.interval=1e3,this.materialOffset=0,this.camera=new THREE.PerspectiveCamera(100,this.width/this.height),this.camera.position.set(0,0,180),this.scene=new THREE.Scene,this.renderer=new THREE.WebGLRenderer,this.renderer.setSize(this.width,this.height),this.dom.appendChild(this.renderer.domElement),this.controls=new THREE.OrbitControls(this.camera),this.controls.addEventListener("change",function(t){return function(){return t.renderer.render(t.scene,t.camera)}}(this)),this.sphere=new THREE.SphereGeometry(300,100,100),this.mesh=new THREE.Mesh(this.sphere),this.mesh.scale.x=-1,this.scene.add(this.mesh),this.autoRotate=!1,this.running=!1,i=this.width,e=this.height,setInterval(function(t){return function(){return i!==t.width||e!==t.height?(i=t.width,e=t.height,t.renderer.setSize(t.width,t.height)):void 0}}(this),100)}return t.prototype.load=function(t){return null==t&&(t=function(){}),this.loadMaterials(function(t){return function(){return t.running?void 0:(t.running=!0,t.displayNextMaterial(),setInterval(function(){return t.displayNextMaterial()},t.interval),t.autoRotate?setInterval(function(){return t.controls.rotateLeft(.003),t.controls.update()},50):void 0)}}(this))},t.prototype.loadMaterials=function(t){var e;return e=new THREE.UVMapping,async.map(this.images,function(t,i){var n;return n=THREE.ImageUtils.loadTexture(t,e,function(){var t;return t=new THREE.MeshBasicMaterial({map:n}),i(null,t)})},function(e){return function(i,n){return e.materials=n,t()}}(this))},t.prototype.displayNextMaterial=function(){return this.materialOffset+=1,this.materialOffset<this.materials.length||(this.materialOffset=0),this.mesh.material=this.materials[this.materialOffset],this.renderer.render(this.scene,this.camera)},t}(),null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t:window.ThetaViewer=t}).call(this);