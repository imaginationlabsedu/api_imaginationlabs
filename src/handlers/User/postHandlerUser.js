const {
	postCreateUserController,
} = require("../../controllers/postControllers/User/postCreateUserController");

const postHandlerUser = async (req, res) => {
	if (req.body) {
		const { name, email, phone, confirmation } = req.body;
		if (!name || !email || !phone || !confirmation) {
			return res.status(400).json({ error: "Lack Of Data" });
		}
		try {
			const newInfo = await postCreateUserController(
				email,
				phone,
				name,
				confirmation
			);
			if (newInfo.status === 1) {
				return res.status(200).json(newInfo);
			}
			return res.status(404).json(newInfo);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
};

module.exports = { postHandlerUser };
