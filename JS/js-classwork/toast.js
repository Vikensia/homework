const toast = {
    success(str) {
        this.show(str, "success")
    },
    error(str) {
        this.show(str, "error")
    },
    warning(str) {
        this.show(str, "warning")
    },
    info(str) {
        this.show(str, "info")
    },
    hide() {
        document.getElementById("my-toast").remove()
    },
    show(str, type) {
        if (document.getElementById("my-toast") !== null) {
            this.hide()
        }
        document.body.insertAdjacentHTML("afterbegin",
            `<div id="my-toast" class="my-toast my-toast-${type}">
                ${str}
            </div>`
        )
        setTimeout(() => this.hide(), 5000)
    }
}