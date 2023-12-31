const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			authToken: null,
			user: null,
			users: [],
		},
		actions: {


			login: async (email, password, navigate) => {
				try {
					const response = await fetch(
						"https://sanghmitra2023-opulent-engine-9p74jjr7rw62prpj-3001.preview.app.github.dev/api/token",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								"email": email,
								"password": password
							}),
						}
					);
					if (response.ok) {
						const data = await response.json()
						setStore({ authToken: data.token });
						navigate("/private")
						return true
					}
				} catch (error) {
					console.log(error);
				};
				return false

			},

			getUser: async () => {
				const store = getStore()
				try {
					const response = await fetch("https://sanghmitra2023-opulent-engine-9p74jjr7rw62prpj-3001.preview.app.github.dev/api/protected", {
						headers: { Authorization: `Bearer ${store.authToken}` }
					});
					if (response.ok) {
						const data = await response.json();
						setStore({ user: data })
						localStorage.setItem("user", JSON.stringify(data))
					}
				}
				catch (error) {
					console.log(error)
				}

			},

			loadUser: async () => {
				const store = getStore();
				try {
					const response = await fetch("https://sanghmitra2023-opulent-engine-9p74jjr7rw62prpj-3001.preview.app.github.dev/api/user", {
						headers: { Authorization: `Bearer ${store.authToken}` }
					});
					if (response.ok) {
						const data = await response.json();
						setStore({ users: data.users })
					}
				}
				catch (error) {
					console.log(error)
				}

			},

			logOut: async (navigate) => {
				setStore({ user: null })
				localStorage.clear()
				navigate("/")
			},



			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;