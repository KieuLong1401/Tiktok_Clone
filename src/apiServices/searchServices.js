import request from '../utils/http'

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        })
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}
