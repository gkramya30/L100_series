"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportService = void 0;
var SupportService = /** @class */ (function () {
    function SupportService() {
    }
    SupportService.prototype.handle = function (ticket) {
        if (ticket.level <= 1) {
            console.log("Level 1 Support handled ticket: ".concat(ticket.description));
        }
        else if (ticket.level <= 2) {
            console.log("Level 2 Support handled ticket: ".concat(ticket.description));
        }
        else if (ticket.level <= 3) {
            console.log("Manager handled ticket: ".concat(ticket.description));
        }
        else {
            console.log("Director handled ticket: ".concat(ticket.description));
        }
    };
    return SupportService;
}());
exports.SupportService = SupportService;
