var snippets = $( "pre > code" );

snippets.each(function(i) {
    var currentId = "codeblock" + (i + 1);
    $(this).attr('id', currentId);

    //trigger
    var clipButton = '<button class="copy-btn" data-clipboard-target="#' + currentId + '"><img src="https://clipboardjs.com/assets/images/clippy.svg" class="icon" style="width: 13px" alt="Copy to clipboard"></button>';
        $(this).before(clipButton);
    });
    
var clipboardSnippets = new ClipboardJS('.copy-btn');

var copy_btns = document.querySelectorAll('.copy-btn');
for (var i = 0; i < copy_btns.length; i++) {
    copy_btns[i].addEventListener('mouseleave', clearTooltip);
    copy_btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
    e.currentTarget.setAttribute('class', 'copy-btn');
    e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'copy-btn tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
}

function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
    return actionMsg;
}

clipboardSnippets.on('success', function (e) {
    e.clearSelection();
    showTooltip(e.trigger, 'Copied!');
});

clipboardSnippets.on('error', function (e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});
