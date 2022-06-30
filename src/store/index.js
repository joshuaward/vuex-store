import { createStore } from 'vuex'

export default createStore({
  state: {
		endpoint: 'https://restcountries.com/v3.1/all',
		error: false,
		loaded: false,
		items: [],
  },
  getters: {
		error: state => state.error,
		loaded: state => state.loaded,
		items: state => state.items,
  },
  mutations: {
		setError(state, error) {
			state.error = error;
		},
		setLoaded(state, loaded) {
			state.loaded = loaded;
		}
  },
  actions: {
		getData({state, commit}) {
			fetch(state.endpoint)
			.then(res => {
					commit('setLoaded', false);
					if(res.ok) {
						console.log('test')
						return res.json();
					} else {
						return Promise.reject(res)
					}
				})
				.then(data => {
					state.items = data;
					console.log(state.items)
					setTimeout(() => {
						commit('setLoaded', true);
					}, 2000);
				})
				.catch(err => {
					commit('setError', true);
					console.error('error', err);
				}) 
		}
  },
  modules: {
  }
})
