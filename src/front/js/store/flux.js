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
			dog: [],
		},
		actions: {


			login: async (email, password, navigate) => {
				try {
					console.log("before fetch")
					const response = await fetch(
						"https://sanghmitra2023-potential-rotary-phone-5wgpxxjgw5rfx97-3001.preview.app.github.dev/api/token",
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
					console.log("after response")
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
					const response = await fetch("https://sanghmitra2023-potential-rotary-phone-5wgpxxjgw5rfx97-3001.preview.app.github.dev/api/protected", {
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
					const response = await fetch("https://sanghmitra2023-potential-rotary-phone-5wgpxxjgw5rfx97-3001.preview.app.github.dev/api/user", {
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


			addFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			  },
		
			  deleteItem: (i) => {
				const store = getStore();
				let newFavorites = store.favorites.filter((item, index) => {
				  return i != index;
				});
				setStore({ favorites: newFavorites });
			  },
		
			  loadSomeData: () => {
				fetch("https://sanghmitra2023-potential-rotary-phone-5wgpxxjgw5rfx97-3001.app.github.dev/api/dog/")
				  .then((res) => res.json())
				  .then((data) => {
					console.log(data);
					setStore({ people: data.results });
				  })
				  .catch((err) => console.error(err));
			  }

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