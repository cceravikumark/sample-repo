'use strict';

var app = {

    updateView: function(e, tabName) {

        var signupElement = document.getElementById('id-signup-form');
        var homeElement = document.getElementById('id-home');
        if (signupElement && tabName && tabName == "Sign Up") {
            signupElement.style.display = "block";
            homeElement.style.display = "none";
            console.log('sign up view activated !.')
        }

        if (homeElement && tabName && tabName == "Home") {
            signupElement.style.display = "none";
            homeElement.style.display = "block";
            console.log('home view activated !.')
        }

    },

    changeFont: function(fontName) {

        if (fontName != "Default")
            document.getElementById('font-element').style.fontFamily = fontName;
        else
            document.getElementById('font-element').style.fontFamily = "Arial";

    },
    showTab: function(e, tabName) {

        // update active item from click event
        console.log(e.target);
        var element = undefined;
        if (e.target)
            element = e.target;
        if (element) {
            console.log(element);

            var navBar = element.parentElement;
            var navBarElements = navBar.children;
            for (var i = 0; i < navBar.childElementCount; i++) {

                if (navBarElements[i].hasAttribute('class')) {
                    var x = navBarElements[i].getAttribute("class");
                    console.log(navBarElements[i].className);
                    if (x) {
                        var attribute = navBarElements[i].className;
                        attribute = attribute.replace(" active", "");
                        navBarElements[i].setAttribute("class", attribute);
                    }
                }
                console.log(navBarElements[i]);
            }

            element.setAttribute("class", element.className += " active");
            console.log("active Element : " + element);
        }

        this.updateView(e, tabName);
    }

}