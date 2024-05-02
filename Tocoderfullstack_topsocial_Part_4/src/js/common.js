import { profile, sidebar, highline, cards, message, request } from "/data/db.json"
import { Profile } from "@/js/components/mainLeft/profile";
import { Sidebar } from "@/js/components/mainLeft/sidebar";
import { create_post } from "@/js/components/mainLeft/createPost";
import { Highlight } from "@/js/components/mainMiddle/highline";
import { create_post as create_simple_post } from "@/js/components/mainMiddle/createPost";
import { create_message } from "@/js/components/mainRight/createMessage";
import { FriendList } from "@/js/components/mainRight/friendList";
import { RequestList } from "@/js/components/mainRight/requestList";
import { CardList } from "@/js/components/mainMiddle/cardList";

/* NavBar */
export const navbar = document.querySelector('nav');              
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar');
export const navbar_container_create = navbar_container.querySelector('.create');
export const navbar_container_img = navbar_container.querySelector('img');

/* Main */
export const main = document.querySelector('main');
export const main_container = main.querySelector('.container');

/* Main Left */
export const main_left = main_container.querySelector('.main-left');
const main_left_profile = new Profile(profile.img_src, profile.name, profile.at).build()
main_left.appendChild(main_left_profile);

console.log(sidebar);

const main_left_sidebar = new Sidebar(sidebar).dom
main_left.appendChild(main_left_sidebar)

const main_left_create_post = create_post()
main_left.appendChild(main_left_create_post)


/* Main Middle */
export const main_middle = main_container.querySelector('.main-middle');
const main_middle_highline = new Highlight(highline).build()
const main_middle_post = create_simple_post(profile)

main_middle.appendChild(main_middle_highline)
main_middle.appendChild(main_middle_post)



const cardList = new CardList(cards)
cardList.build()
console.log(cardList.dom); 
main_middle.appendChild(cardList.dom)


/* Main Right */
export const main_right = main_container.querySelector('.main-right');
export const main_right_message = create_message()
main_right.appendChild(main_right_message)
const main_right_friend_list = new FriendList(message).build()
main_right_message.appendChild(main_right_friend_list)
const main_right_request_list = new RequestList(request).build()
main_right.appendChild(main_right_request_list)

