//Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//Messages
const requestFriend = document.querySelector('.friend-requests');
const Mc1 = document.querySelector('.message-requests-1');
const Mc2 = document.querySelector('.message-requests-2');
const Mc3 = document.querySelector('.message-requests');
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

/*      SideBar       */

//Remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications.notification-count').style.display = 'none';
        }
    })
})

/*      Messages     */
//search user on chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//Highlight messages card when messages menu item is clicked
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

//  Theme/display customization

//Opens Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
//Close Modal
themeModal.addEventListener('click', closeThemeModal)/

theme.addEventListener('click', openThemeModal);


/*      Font Size       */

//Remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('sticky-top-left', '5.4rem');
            root.style.setProperty('sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('sticky-top-left', '5.4rem');
            root.style.setProperty('sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('sticky-top-left', '-2rem');
            root.style.setProperty('sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('sticky-top-left', '-5rem');
            root.style.setProperty('sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('sticky-top-left', '-12rem');
            root.style.setProperty('sticky-top-right', '-35rem');
        }

        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

//Change primary colors

//remove active class from spans or color selectors
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelector();
        let primary;
        color.classList.toggle('active');

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//Theme Background Value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//Change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

//Removing "active" from Messages - primary general requests -
Mc1.addEventListener('click', () => {
    Mc1.classList.add('active');
    Mc2.classList.remove('active');
    Mc3.classList.remove('active');
})

Mc2.addEventListener('click', () => {
    Mc2.classList.add('active');
    Mc1.classList.remove('active');
    Mc3.classList.remove('active');
})

Mc3.addEventListener('click', () => {
    Mc3.classList.add('active');
    Mc2.classList.remove('active');
    Mc1.classList.remove('active');
})

function liked(){
    if(document.getElementById("like")) {
        var element = document.getElementById("like");
        element.classList.toggle("liked");
    }
}
