import ApplicantInfo2 from '@/components/common/applicant-info-2.vue'
import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import newReqModule from '@/store/new-request-module'
import Vuetify from 'vuetify'

const store = newReqModule
const localVue = createLocalVue()
const vuetify = new Vuetify()

localVue.use(Vuetify)
describe('It initially renders correctly', () => {
  let wrapper: any

  beforeEach(async (done) => {
    wrapper = mount(ApplicantInfo2, {
      localVue,
      vuetify
    })
    await wrapper.vm.$nextTick()
    done()
  })

  it('renders the form', () => {
    expect(wrapper.find('#applicant-info-2-form').element).toBeTruthy()
  })
  it('Initially renders the disabled continue button', () => {
    expect(wrapper.find('#submit-continue-btn-disabled').element).toBeTruthy()
    expect(wrapper.find('#submit-continue-btn').element).toBeFalsy()
  })
  it('calls validate when Continue button is pressed', async () => {
    wrapper.vm.validate = jest.fn()
    let btn = wrapper.find('#submit-continue-btn-disabled')
    btn.trigger('click')
    expect(wrapper.vm.validate).toHaveBeenCalled()
  })
})
