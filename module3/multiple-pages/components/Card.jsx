export function Card({ children, bgColor = 'blue', title = 'Card' }) {
    return (
        <div style={{ backgroundColor : bgColor }}>
            <h2 className='text-2xl'>{ title }</h2>
            {children}
        </div>
    )
}