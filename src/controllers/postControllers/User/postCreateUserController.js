const { User } = require("../../../db");

const postCreateUserController = async (email, phone, name, confirmation) => {
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
				: {
						message: "El usuario ya existe porfavor intente con otro email",
						status: 0,
				  };

			return response;
		} else {
			return {
				message: "El usuario no ha sido creado correctamente",
				status: 0,
			};
		}
	} catch (error) {
		return error;
	}
};

module.exports = { postCreateUserController };
