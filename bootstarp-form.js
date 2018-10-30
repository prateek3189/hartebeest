$(function() {

    var ValidationModule = function() {
        var elements = $('[data-role="validate"]');
        elements.popover({ placement: 'top' });

        elements.on('invalid', function() {
            var firstInvalidElement = document.querySelector('input:invalid');
            firstInvalidElement.popover("show");
        });

        elements.on('blur', function() {
            $(this).popover("hide");
        });

        var validate = function(formSelector) {
            if(!/#/.test(formSelector)) {
                formSelector = '#' + formSelector;
            }

            return document.querySelector(formSelector).checkValidity();
        }

        return {
            validate: validate
        };
    }

    var validator = new ValidationModule();
    var $msg = $('#msg');

    $('[data-role="trigger-validation"]').click(function(){
        if(validator.validate('email-form')) {
            $msg.text('Valid')
        } else {
            $msg.text('Invalid')
        }
    });
});
