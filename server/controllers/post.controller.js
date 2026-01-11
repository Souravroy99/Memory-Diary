export const getAllPosts = async (req, res) => {
    try {
        return res.send("WORKS")
    } catch (error) {
        return res.status(500).json({ message: "Server error!" })
    }
}