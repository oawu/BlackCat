/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
    var viewer = new ThetaViewer( document.getElementById("viewer") );
    viewer.images = ["img/EGJG8822.jpg"];
    viewer.interval = 2000;
    viewer.autoRotate = true;
    viewer.load();
});