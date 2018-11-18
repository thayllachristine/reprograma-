const input_cpf = document.getElementById("cpf")

input_cpf.addEventListener("focus", function (event) {
    input_cpf.value = "___.___.___-__"
    setTimeout(function () {
        a
        input_cpf.setSelectionRange(0, 0)
    }, 1)
})

input_cpf.addEventListener("blur", function () {
    this.value = ""
})

input_cpf.addEventListener("keydown", function (event) {
    event.preventDefault()
    if ("0123456789".indexOf(event.key) !== -1
        && this.value.indexOf("_") !== -1) {
        this.value = this.value.replace(/_/, event.key)
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    } else if (event.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }
})
