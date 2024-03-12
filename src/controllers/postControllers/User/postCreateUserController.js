const { User } = require("../../../db");

const postCreateUserController = async (email, name, phone, confirmation) => {
	try {
		if (confirmation) {
			const [user, created] = await User.findOrCreate({
				where: { email: email },
				defaults: {
					name,
					phone,
				},
			});
			const response = created
				? {
						message: "Se creo correctamente el registro",
						user: user,
						status: 1,
				  }
				: { message: "El usuario ya existe porfavor intente con otro email" };

			return response;
		}
	} catch (error) {
		return error;
	}
};

module.exports = { postCreateUserController };
