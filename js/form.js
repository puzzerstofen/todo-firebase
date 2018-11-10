Vue.use(window.vuelidate.default)
var vueRecaptchaApiLoaded = function() {
    console.log("loaded")
}
console.log(window)
Vue.use(window.grecaptcha)
var formApp = function() {

    var init = function() {
        // local mixin
        var validationMixin = window.vuelidate.validationMixin
        const { required, minLength, email } = window.validators


        new Vue({
            el: "#app",
            data: {
                nome: '',
                email:'',
                telefono: ''
            },
            validations: {
                nome: {
                    required: required
                },
                email: {
                    required: required,
                    email: email,
                },
                telefono: {
                    required: required,
                    minLength: minLength(5)
                }
            },
            methods: {
                status(validation) {
                    return {
                        error: validation.$error,
                        dirty: validation.$dirty
                    }
                },
                submitForm: function() {
                    alert("iii")
                }
            }
        })

    }
    return {
        init: init,
    }
}();
formApp.init();