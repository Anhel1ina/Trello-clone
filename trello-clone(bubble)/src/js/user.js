import { createDivPargFormElement} from "./add-elem-func";

export const getUsers = async () => {
    const f = await fetch('https://652a6bdc4791d884f1fce7bd.mockapi.io/users')
    const data = await f.json()
    return data
}

export function User(blockToAdd, users){
    const userHolder = createDivPargFormElement('div', 'dropdown-users-holder__user user-holder', blockToAdd)
    const avatarHolder = createDivPargFormElement('div', 'user-holder__avatar', userHolder)
    const nicknameHolder = createDivPargFormElement('p', 'user-holder__nickname', userHolder)
    const addUserHolder = createDivPargFormElement('div', 'user-holder__added', userHolder)

    this.userHolder = userHolder
    this.avatarHolder = avatarHolder
    this.nicknameHolder = nicknameHolder
    this.addUserHolder = addUserHolder
}

export const displayUsers = async (blockToAdd, usersLoaded) => {
    const users = await getUsers();
    users.forEach((dataItem) => {
        const user = new User(blockToAdd)
        user.nicknameHolder.innerText = dataItem.name
        user.avatarHolder.style.backgroundImage = `url(${dataItem.avatar})`
        user.userHolder.id = dataItem.id

        const usersAvasHolder = user.userHolder.closest('.task-card__main-form').closest('.task-card').querySelector('.card-footer-users')

        if(usersLoaded){
            for(let userLoaded of usersLoaded){
                if(userLoaded == 'user' + user.userHolder.id){
                    user.userHolder.classList.add('clicked-user')
                    user.addUserHolder.classList.toggle('show-form')
    
                    const userAvatar = createDivPargFormElement('div', 'card-footer-users__elem', usersAvasHolder)
                    userAvatar.style.backgroundImage = user.avatarHolder.style.backgroundImage
                    userAvatar.id = 'user' + user.userHolder.id
                }
            }
        }
        user.userHolder.addEventListener('click', () => {
            user.userHolder.classList.toggle('clicked-user')
            user.addUserHolder.classList.toggle('show-form')

            if(user.userHolder.classList.contains('clicked-user')){
                const userAvatar = createDivPargFormElement('div', 'card-footer-users__elem', usersAvasHolder)
                userAvatar.style.backgroundImage = user.avatarHolder.style.backgroundImage
                userAvatar.id = 'user' + user.userHolder.id
                

            }
            else{
                let cardUsers = usersAvasHolder.children
                for(let cardUser of cardUsers){
                    if(cardUser.id === 'user' + user.userHolder.id){
                        cardUser.remove()
                    }
                }
                for(let user of usersAvasHolder.children){
                    console.log(user.id)
                }
            }
        })
    });
};