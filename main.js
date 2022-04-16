const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

let $btn = $('.button')
let $$popups = $$('.popups')
const App = {
    init() {
        this.$code = $('#code')
        this.$button = $('.button')
        this.$modal = $('#modal')
        this.text = ''
        this.bind()
        this.fetchData()
    },
    bind(){

    },
    show($node){
        $node.classList.add('show')
    },
    hide($node){
        $node.classList.remove('show')
    },
    fetchData(){
        fetch('https://raw.githubusercontent.com/forkingdog/FDStackView/master/FDStackView.podspec')
            .then(res.text())
            .then(res=>{
                this.text = res
                this.show(this.$modal)
            })
    }
}

App.init()