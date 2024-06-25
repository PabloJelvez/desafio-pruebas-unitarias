import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import Contact from "@/components/Contact.vue"

describe('Contact', () => {
    test('Probando la existencia del componente Contact', async () => {
        const router =  createRouter({
        history: createWebHistory(),
        routes: [{
            path: '/contact',
            name: 'contact',
            component: Contact
        }],    
        })
        router.push('/contact')
        await router.isReady()
        const wrapper = mount(Contact, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(Contact).exists()).toBe(true)
    })
})