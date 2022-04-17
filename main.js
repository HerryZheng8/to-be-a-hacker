const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

let $btn = $('.button')
let $$popups = $$('.popups')
const App = {
    init() {
        this.$codePre = $('#code pre')
        this.$button = $('.button')
        this.$modal = $('#modal')
        this.$popupGranted = $('.popup-granted')
        this.$popupDenied = $('.popup-denied')

        this.text = ''
        this.cursor = 0
        this.canEdit = false

        this.bind()
        this.fetchData()
    },
    bind() {
        this.$button.onclick = () => {
            this.hide(this.$modal)
            this.canEdit = true
            this.$codePre.classList.add('editable')
        }
        document.onkeypress = (e) => {
            console.log(e)
            if (e.key === '0') {
                this.show(this.$popupGranted)
                this.canEdit = false
            } else if (e.key === '1') {
                this.show(this.$popupDenied)
                this.canEdit = false
            } else if (e.key === '2') {
                this.hide(this.$popupGranted)
                this.hide(this.$popupDenied)
                this.hide(this.$modal)
                this.canEdit = true
            } else if (e.key === 'h') {
                this.show(this.$modal)
                this.canEdit = false
            } else if (this.canEdit) {
                let str = this.text.substr(0, this.cursor)
                this.$codePre.innerText = str
                this.cursor += 10
            }
        }
    },
    show($node) {
        $node.classList.add('show')
    },
    hide($node) {
        $node.classList.remove('show')
    },
    fetchData() {
        fetch('https://raw.githubusercontent.com/forkingdog/FDStackView/master/FDStackView.podspec')
            .then(res => res.text())
            .then(res => {
                this.text = res
                this.show(this.$modal)

            })
    }
}

App.init()