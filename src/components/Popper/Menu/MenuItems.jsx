import Button from '../../Button'

function MenuItems({ data }) {
    return (
        <div>
            <Button leftIcon={data.icon}>{data.title}</Button>
        </div>
    )
}

export default MenuItems
