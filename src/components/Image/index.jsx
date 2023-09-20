import { forwardRef, useState, useEffect } from 'react'

function Image({ className, src, ...props }, ref) {
    const [fallBack, setFallBack] = useState('')

    function handleError() {
        setFallBack('https://www.greenheath.co.uk/wp-content/uploads/2015/09/no_image_available1.png')
    }

    return (
        <img className={className} src={fallBack || src} ref={ref} {...props} onError={handleError}/>
    )
}

export default forwardRef(Image)