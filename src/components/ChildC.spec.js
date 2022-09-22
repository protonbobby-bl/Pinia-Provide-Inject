import { mount } from '@vue/test-utils'
import { it, expect } from 'vitest'

import ChildC from './ChildC.vue';

const mockDummyService = {
  async decrement() {
    this.count--
  },
  count: 0,
  doubleCount: 0,
}

it('exports a valid component', async () => {
  const wrapper = mount(ChildC, { 
    global: {
      provide: {
        storeContext: mockDummyService
      }
    }
  })
  
  expect(wrapper.exists()).toBe(true)
})

it('decrements the value on button click', async () => {
  const wrapper = mount(ChildC, { 
    global: {
      provide: {
        storeContext: mockDummyService
      }
    }
  })
  
  await wrapper.get('button').trigger('click')
  
  expect(wrapper.vm.store.count).toBe(-1)
})

