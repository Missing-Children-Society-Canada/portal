"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chat_service_1 = require("./chat.service");
var ChatSidebar = (function () {
    function ChatSidebar(el) {
        this.newMessage = '';
        this.chatMessageOpened = false;
        this.conversations = new chat_service_1.ChatService();
        this.$el = jQuery(el.nativeElement);
        this.activeConversation = this.conversations.todayConversations[0];
    }
    ChatSidebar.prototype.openConversation = function (conversation) {
        this.activeConversation = conversation;
        this.chatMessageOpened = true;
    };
    ChatSidebar.prototype.deactivateLink = function (e) {
        jQuery(e.currentTarget).removeClass('active').find('.badge').remove();
    };
    ChatSidebar.prototype.initChatSidebarScroll = function () {
        var $sidebarContent = jQuery('.chat-sidebar-contacts', this.$el);
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            width: '',
            size: '4px'
        });
    };
    ChatSidebar.prototype.enableSwipeCollapsing = function () {
        var $chatContainer = jQuery('layout');
        var chatSidebarSwipe = new Hammer(document.getElementById('content-wrap'));
        chatSidebarSwipe.on('swipeleft', function () {
            if ($chatContainer.is('.nav-collapsed')) {
                $chatContainer.addClass('chat-sidebar-opened');
            }
        });
        chatSidebarSwipe.on('swiperight', function () {
            setTimeout(function () {
                if ($chatContainer.is('.chat-sidebar-opened')) {
                    $chatContainer.removeClass('chat-sidebar-opened');
                }
            });
        });
    };
    ChatSidebar.prototype.ngOnInit = function () {
        jQuery('layout').addClass('chat-sidebar-container');
        if ('ontouchstart' in window) {
            this.enableSwipeCollapsing();
        }
        jQuery(window).on('sn:resize', this.initChatSidebarScroll.bind(this));
        this.initChatSidebarScroll();
    };
    return ChatSidebar;
}());
ChatSidebar = __decorate([
    core_1.Component({
        selector: '[chat-sidebar]',
        templateUrl: './chat-sidebar.template.html'
    }),
    __metadata("design:paramtypes", [Object])
], ChatSidebar);
exports.ChatSidebar = ChatSidebar;
//# sourceMappingURL=chat-sidebar.component.js.map