// export function create_profile(img_src, name, info) {
//   const profile = document.createElement('a');
//   profile.classList.add('profile');

//   profile.innerHTML = `
//     <div class="profile-photo">
//       <img alt="profile photo" src="${img_src}">
//     </div>
//     <div class="profile-description">
//       <h2>${name}</h2>
//       <p>${info}</p>
//     </div>
//   `

//   return profile;
// }

// const img_src = "/images/profile.jpg";
// const name = "John Doe";
// const info = "I am a web developer";

export class Profile {
  img_src = null;
  name = null;
  info = null;

  constructor(img_src, name, info) {
    this.img_src = img_src;
    this.name = name;
    this.info = info;
  }

  build() {
    const profile = document.createElement('a');
    profile.classList.add('profile');

    profile.innerHTML = `
    <div class="profile-photo">
      <img alt="profile photo" src="${this.img_src}">
    </div>
    <div class="profile-description">
      <h2>${this.name}</h2>
      <p>${this.info}</p>
    </div>
  `

    return profile;
  }
}

