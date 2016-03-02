//Nashia Amourdon
/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(firstCubeRotation, secondCubeRotation, thirdCubeRotation, fourthCubeRotation, fifthCubeRotation) {
            this.firstCubeRotation = firstCubeRotation;
            this.secondCubeRotation = secondCubeRotation;
            this.thirdCubeRotation = thirdCubeRotation;
            this.fourthCubeRotation = fourthCubeRotation;
            this.fifthCubeRotation = fifthCubeRotation;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
