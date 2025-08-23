"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectorSupport = exports.ManagerSupport = exports.Level2Support = exports.Level1Support = exports.SupportHandler = void 0;
var SupportHandler = /** @class */ (function () {
    function SupportHandler() {
        this.nextHandler = null;
    }
    SupportHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    SupportHandler.prototype.handle = function (ticket) {
        if (this.nextHandler) {
            this.nextHandler.handle(ticket);
        }
        else {
            console.log("No handler could process the ticket.");
        }
    };
    return SupportHandler;
}());
exports.SupportHandler = SupportHandler;
var Level1Support = /** @class */ (function (_super) {
    __extends(Level1Support, _super);
    function Level1Support() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level1Support.prototype.handle = function (ticket) {
        if (ticket.level <= 1) {
            console.log("Level 1 Support handled ticket: ".concat(ticket.description));
        }
        else {
            console.log("Level 1 Support escalated ticket.");
            _super.prototype.handle.call(this, ticket);
        }
    };
    return Level1Support;
}(SupportHandler));
exports.Level1Support = Level1Support;
var Level2Support = /** @class */ (function (_super) {
    __extends(Level2Support, _super);
    function Level2Support() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level2Support.prototype.handle = function (ticket) {
        if (ticket.level <= 2) {
            console.log("Level 2 Support handled ticket: ".concat(ticket.description));
        }
        else {
            console.log("Level 2 Support escalated ticket.");
            _super.prototype.handle.call(this, ticket);
        }
    };
    return Level2Support;
}(SupportHandler));
exports.Level2Support = Level2Support;
var ManagerSupport = /** @class */ (function (_super) {
    __extends(ManagerSupport, _super);
    function ManagerSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagerSupport.prototype.handle = function (ticket) {
        if (ticket.level <= 3) {
            console.log("Manager handled ticket: ".concat(ticket.description));
        }
        else {
            console.log("Manager escalated ticket.");
            _super.prototype.handle.call(this, ticket);
        }
    };
    return ManagerSupport;
}(SupportHandler));
exports.ManagerSupport = ManagerSupport;
var DirectorSupport = /** @class */ (function (_super) {
    __extends(DirectorSupport, _super);
    function DirectorSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectorSupport.prototype.handle = function (ticket) {
        console.log("Director handled ticket: ".concat(ticket.description));
    };
    return DirectorSupport;
}(SupportHandler));
exports.DirectorSupport = DirectorSupport;
