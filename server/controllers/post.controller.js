import POST from "../models/post.model.js"

export const getAllPosts = async (req, res) => {
    try {
        const posts = await POST.find()
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({ message: "Server error!" })
    }
}

export const createPost = async (req, res) => {
    try {
        const post = req.body
        const newPost = new POST(post)
        await POST.save()

        return res.status(201).json(newPost)
    } catch (error) {
        return res.status(500).json({ message: "Server error!" })
    }
}