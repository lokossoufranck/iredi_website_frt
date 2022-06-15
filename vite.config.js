import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins:[vue()],
	https: true,

	server:{
		strictPort: true,
		port:8100,
		//host:'3.137.151.244',
		 hmr: {
			   port: 8100,
			   protocol: 'wss',
			   clientPort: 443
				},
	}

})
