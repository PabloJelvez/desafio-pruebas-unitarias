import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import About from "@/components/About.vue"

describe('About', () => {
    test('Probando la existencia del componente About', async () => {
        const router =  createRouter({
        history: createWebHistory(),
        routes: [{
            path: '/about',
            name: 'about',
            component: About
        }],    
        })
        router.push('/about')
        await router.isReady()
        const wrapper = mount(About, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(About).exists()).toBe(true)
    })
})