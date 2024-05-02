class Menu {

  constructor(name = '', icon_class_list = []) {
    this.name = name;
    this.icon_class_list = icon_class_list;
    this.build()
  }

  build = () => {
    this.item = document.createElement('a');
    this.item.classList.add('menu-item');
    this.item.innerHTML = `
      <span>
        <i class="${this.icon_class_list.join(' ')}"></i>
      </span>
      <h2>${this.name}</h2>
    `
    return this.item
  }
}

export class Sidebar {
  constructor(menuList = []) {
    this.menuList = menuList;
    this.build()
  }

  create_sidebar = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('sidebar');
  }

  build = () => {
    this.create_sidebar();
    this.menuList.forEach(menuItem => {
      this.dom.appendChild(new Menu(menuItem.name, menuItem.icon_class_list).item)
    })
    return this.dom
  }
}