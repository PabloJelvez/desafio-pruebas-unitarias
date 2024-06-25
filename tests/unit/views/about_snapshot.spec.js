import { shallowMount } from "@vue/test-utils"
import About from "@/components/About.vue"

describe("Componente About.vue", () => {
    test("Validación de match con el snapshot", () => {
        const wrapper = shallowMount(About)

        expect(wrapper.html()).toMatchSnapshot()
    });
    test("Validar el titulo de la vista About", () => {
        const wrapper = shallowMount(About)
        const titleAbout = wrapper.find(".aboutTitle")
        expect(titleAbout.text()).toBe("Vista About")
    })
})