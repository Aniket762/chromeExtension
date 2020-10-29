if(element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
}
else if(element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/sumana/gi)) //in place of sumana replace the word you want to remove
    {
        element.parentElement.remove()
    }
}
