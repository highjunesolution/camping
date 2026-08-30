export const createBooking = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({
            success: true,
            message: "Jukkru!!"
        })
    } catch (error) {
        next(error)
    }
}