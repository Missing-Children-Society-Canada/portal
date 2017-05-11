"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatMessage = (function () {
    function ChatMessage() {
        this.chatMessageClosed = new core_1.EventEmitter();
        this.newMessage = '';
    }
    ChatMessage.prototype.closeChatArea = function () {
        this.open = false;
        this.chatMessageClosed.emit('');
    };
    ChatMessage.prototype.addMessage = function (message) {
        if (this.newMessage) {
            (this.conversation.messages || (this.conversation.messages = [])).push({
                text: this.newMessage,
                fromMe: true
            });
        }
        this.newMessage = '';
    };
    return ChatMessage;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChatMessage.prototype, "conversation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ChatMessage.prototype, "open", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChatMessage.prototype, "searchMessage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChatMessage.prototype, "chatMessageClosed", void 0);
ChatMessage = __decorate([
    core_1.Component({
        selector: '[chat-message]',
        templateUrl: './chat-message.template.html'
    })
], ChatMessage);
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chat-message.component.js.map