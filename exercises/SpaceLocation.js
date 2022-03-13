"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
// Paste in the provided code here:
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
        this.milesPerKilometer = 0.621;
        this.speedMph = 17500;
    }
    SpaceLocation.prototype.getDaysToLocation = function (kilometersAway) {
        var milesPerKilometer = 0.621;
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    SpaceLocation.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
