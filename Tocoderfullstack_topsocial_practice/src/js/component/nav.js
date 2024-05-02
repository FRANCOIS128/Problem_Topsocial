export class Nav {
  #dom = null
  #info = null
  constructor(info) {
    this.#info = info
  }

  build = () => {
    this.#dom = document.createElement('nav')
    this.#dom.classList.add('container')

    // this.#createLogo(this.#dom)
    // this.#createSearchBar(this.#dom)
    // this.#cratePostCreate(this.#dom)

    return this.#dom
  }

  get dom() {
    return this.#dom
  }
  // #createLogo = (fatherDom) => {
  //   const dom_logo = document.createElement('div')
  //   dom_logo.classList.add('logo')
  //   dom_logo.textContent = "TOPSOCIAL"
  //   fatherDom?.appendChild(dom_logo)
  // }

  // #createSearchBar = (fatherDom) => {
  //   const dom_search = document.createElement('div')
  //   dom_search.classList.add('search-bar')
  //   this.#createLabel(dom_search)
  //   this.#createInput(dom_search)
  //   fatherDom?.appendChild(dom_search)
  // }

  // #createLabel = (fatherDom) => {
  //   const dom = document.createElement('label')
  //   dom.setAttribute('for', 'navbar-search')
  //   const dom_i = document.createElement('i')
  //   dom_i.classList.add('uil', 'uil-search-alt')
  //   dom.appendChild(dom_i)
  //   fatherDom?.appendChild(dom)
  // }

  // #createInput = (fatherDom) => {
  //   const dom = document.createElement('input')
  //   dom.setAttribute('type', 'search')
  //   dom.setAttribute('name', 'navbar-search')
  //   dom.setAttribute('id', 'navbar-search')
  //   dom.setAttribute('placeholder', 'Search for Creators')
  //   fatherDom?.appendChild(dom)

  // }

  // #cratePostCreate = (fatherDom) => {
  //   const dom = document.createElement('div')
  //   dom.classList.add('create')
  //   dom.innerHTML = `
  //   <label for="create-post" class="btn btn-primary">Create</label>
  //       <div class="profile-photo">
  //         <img alt="profile photo" src="${this.#info.img_src}">
  //       </div>
  //   `
  //   fatherDom?.appendChild(dom)
  // }
}