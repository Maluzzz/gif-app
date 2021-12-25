import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { CategorieAdd } from '../../components/CategorieAdd'


describe('testing Component CategorieAdd', () => {

      const setCategories = jest.fn()
      let wrapper = shallow(<CategorieAdd setCategories={setCategories} />)

      beforeEach(() => {
            jest.clearAllMocks()
            wrapper = shallow(<CategorieAdd setCategories={setCategories} />)
      })

      test('should render the component', () => {

            expect(wrapper).toMatchSnapshot()
      })

      test('should change the input', () => {

            const input = wrapper.find('input')
            input.simulate('change', { target: { value: 'Hellow word' } })
            //TO.DO CHECK INPUT VALUE VALUE IS HELLOW WORLD

      })

      test('shouldnt send the submit with setCategories', () => {

            const form = wrapper.find('form')
            form.simulate('submit', { preventDefault() { } })
            expect(setCategories).not.toHaveBeenCalled()

      })

      test('should send the submit, call the setCategories and clean the inputText', () => {


            const input = wrapper.find('input')
            input.simulate('change', { target: { value: 'Hellow word' } })
            const form = wrapper.find('form')
            form.simulate('submit', { preventDefault() { }, text: 'Hellow word' })

            expect(setCategories).toHaveBeenCalled()
            expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )
            expect(wrapper.find('input').props().value).toBe('')

      })

})
