//引入vue，并导出一个createApp的工厂函数，其需要一个参数app来创建应用。
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
