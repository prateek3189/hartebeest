document.addEventListener('DOMContentLoaded', function() {

    var ruleNames = [];
    var forEach = Array.prototype.forEach;

    var ruleElements = document.querySelectorAll('span[data-rules]');
    forEach.call(ruleElements, function(element) {
        var ruleName = element.getAttribute('data-rules');
        if(ruleNames.indexOf(ruleNames) < 0) {
            ruleNames.push(ruleName);
        }
    });

    var validate = function() {
        debugger;
        var messages = document.querySelectorAll('.validation-message span');
        forEach.call(messages, function(message) {
            message.classList.add('hide');
        });
        document.getElementById('custom-validation').checkValidity();
    }

    var validationFail = function(e) {
        var element, validity;

        element = e.currentTarget;
        validity = element.validity;

        if(!validate.valid) {
            ruleNames.forEach(function (ruleName) {
                checkRule(validity, ruleName, element);
            });
            e.preventdefault;
        }
    }

    var checkRule = function(state, ruleName, element) {
        if(state[ruleName]) {
            var rules = element
                            .nextElementSibling
                            .querySelectorAll('[data-rules="' + ruleName + '"]');

            forEach.call(rules, function(rule) {
                rule.classList.remove('hide');
            });
        }
    }

    var inputElements = document.querySelectorAll('#custom-validation input:not(button)');

    // binding events of invalid and validation fail to each element of the form
    forEach.call(inputElements, function(input) {
        input.oninvalid = validationFail;
        input.onblur = validate;
    });
    // This will perform on click of submit button
    document.getElementById('submitButton').addEventListener('click', validate, false);
});
