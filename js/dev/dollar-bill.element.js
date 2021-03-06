
dollarbill.fn.attr = function (name, value) {

    if (!name) {
        return this;
    }

    if (!value) {
        return this[0].getAttribute(name);
    }

    for (var i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }

    return this;

};

dollarbill.fn.html = function (value) {

    if (!this[0]) {
        return this;
    }

    var i = 0;

    if (value === undefined) {
        return this[0].innerHTML;
    }

    for (; i < this.length; i++) {
        this[i].innerHTML = value;
    }

    return this;

};

dollarbill.fn.removeAttr = function (name) {

    if (!this[0]) {
        return this;
    }

    var i = 0;

    for (; i < this.length; i++) {
        this[i].removeAttribute(name);
    }

    return this;
};

dollarbill.fn.data = function (name, val) {

    //TODO: modify this to allow an object of name - values to be passed & set

    var elem = this[i];

    if (!val) {

        return (elem.hasAttribute("data-" + name) ?
                        elem.getAttribute("data-" + name) : "");

    } else {
        elem.setAttribute("data-" + name, val);
        return;
    }

};
