/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
    var viewer = new ThetaViewer (document.getElementById ('viewer'));
    viewer.images = ["img/EGJG8822.jpg"];
    // viewer.images = ["imgs/R0013005.JPG", "imgs/R0013006.JPG", "imgs/R0013007.JPG"];
    // viewer.interval = 200;
    // viewer.autoRotate = true;
    viewer.load();
});