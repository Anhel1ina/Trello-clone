import { createDivPargFormElement} from "./add-elem-func";

export const getUsers = async () => {
    const f = await fetch('https://652a6bdc4791d884f1fce7bd.mockapi.io/users')
    const data = await f.json()
    return data
}

export function User(blockToAdd){
    const userHolder = createDivPargFormElement('div', 'dropdown-users-holder__user user-holder', blockToAdd)
    const avatarHolder = createDivPargFormElement('div', 'user-holder__avatar', userHolder)
    const nicknameHolder = createDivPargFormElement('p', 'user-holder__nickname', userHolder)
    const addUserHolder = createDivPargFormElement('div', 'user-holder__added', userHolder)

    this.userHolder = userHolder
    this.avatarHolder = avatarHolder
    this.nicknameHolder = nicknameHolder
    this.addUserHolder = addUserHolder
}

export const displayUsers = async (blockToAdd) => {
    const users = await getUsers();
    users.forEach((dataItem) => {
        const user = new User(blockToAdd)
        user.nicknameHolder.innerText = dataItem.name
        user.avatarHolder.style.backgroundImage = `url(${dataItem.avatar})`

        user.userHolder.addEventListener('click', () => {
            user.userHolder.classList.toggle('clicked-user')
            user.addUserHolder.classList.toggle('show-form')

            if(user.userHolder.classList.contains('clicked-user')){
                const usersAvasHolder = user.userHolder.closest('.task-card__main-form').closest('.task-card').querySelector('.card-footer-users')
                const userAvatar = createDivPargFormElement('div', 'card-footer-users__elem', usersAvasHolder)
                userAvatar.style.backgroundImage = user.avatarHolder.style.backgroundImage
            }
            else{
                const usersAvasHolder = user.userHolder.closest('.task-card__main-form').closest('.task-card').querySelector('.card-footer-users')
                usersAvasHolder.querySelector('.card-footer-users__elem').remove()
            }
        })
    });
};